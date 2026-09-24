import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { toast } from 'sonner';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { getErrorMessage, getFileUrl } from '@/services/api';
import { newsAPI } from '@/services/newsApi';

const schema = z.object({
  title: z.string().min(3, 'Title is required'),
  slug: z
    .string()
    .regex(/^[a-z0-9-]*$/, 'Use lowercase letters, numbers and hyphens only')
    .optional()
    .or(z.literal('')),
  summary: z.string().min(10, 'Add a short summary'),
  content: z.string().min(20, 'Add the article content'),
  category: z.string().min(1, 'Select a category'),
  author: z.string().optional().or(z.literal('')),
  publishedDate: z.string().optional().or(z.literal('')),
  status: z.enum(['draft', 'published']),
  seoTitle: z.string().optional().or(z.literal('')),
  seoDescription: z
    .string()
    .max(320, 'Keep the SEO description under 320 characters')
    .optional()
    .or(z.literal('')),
});

type FormDataType = z.infer<typeof schema>;
const categories = ['Corporate', 'Manufacturing', 'Retail', 'Hospitality'];
const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
const toDateInput = (value?: string | null) => {
  if (!value) return '';
  // Existing timezone-less values were entered in local time already.
  if (!/[zZ]$|[+-]\d{2}:\d{2}$/.test(value)) return value.replace(' ', 'T').slice(0, 16);
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60_000);
  return local.toISOString().slice(0, 16);
};

export default function NewsForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(isEdit);
  const [error, setError] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [slugEdited, setSlugEdited] = useState(isEdit);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: '',
      slug: '',
      summary: '',
      content: '',
      category: 'Corporate',
      author: 'Supun Group',
      publishedDate: '',
      status: 'published',
      seoTitle: '',
      seoDescription: '',
    },
  });

  const title = watch('title');
  const status = watch('status');

  useEffect(() => {
    if (!isEdit && !slugEdited) setValue('slug', slugify(title));
  }, [title, isEdit, slugEdited, setValue]);

  useEffect(() => {
    if (!isEdit || !id) return;
    (async () => {
      try {
        const article = await newsAPI.getById(Number(id));
        setValue('title', article.title);
        setValue('slug', article.slug);
        setValue('summary', article.summary);
        setValue('content', article.content);
        setValue('category', article.category);
        setValue('author', article.author || '');
        setValue('publishedDate', toDateInput(article.publishedDate));
        setValue('status', article.status);
        setValue('seoTitle', article.seoTitle || '');
        setValue('seoDescription', article.seoDescription || '');
        setImagePreview(getFileUrl(article.featuredImage || undefined) || '');
      } catch (err) {
        setError(getErrorMessage(err));
      } finally {
        setIsFetching(false);
      }
    })();
  }, [id, isEdit, setValue]);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) return toast.error('Please select an image file');
    if (file.size > 10 * 1024 * 1024) return toast.error('Image must be under 10MB');
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const onSubmit = async (data: FormDataType) => {
    try {
      setIsLoading(true);
      setError(null);
      const form = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        // datetime-local has no timezone; store an unambiguous UTC timestamp.
        const submittedValue =
          key === 'publishedDate' && value ? new Date(value).toISOString() : value;
        form.append(key, submittedValue ?? '');
      });
      if (imageFile) form.append('featuredImage', imageFile);

      if (isEdit && id) {
        await newsAPI.update(Number(id), form);
        toast.success('News article updated');
      } else {
        await newsAPI.create(form);
        toast.success(data.status === 'published' ? 'News article published' : 'Draft saved');
      }
      navigate('/admin/news');
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetching)
    return <div className="py-12 text-center text-muted-foreground">Loading article...</div>;

  return (
    <div className="container mx-auto max-w-5xl px-4 py-8">
      <Button variant="ghost" className="mb-6" onClick={() => navigate('/admin/news')}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to News
      </Button>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Card>
          <CardHeader>
            <CardTitle>{isEdit ? 'Edit News Article' : 'Add News Article'}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2 md:col-span-2">
              <Label>Featured Image</Label>
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex h-40 w-full max-w-[260px] items-center justify-center overflow-hidden rounded-lg border-2 border-dashed bg-muted">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Article preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <ImageIcon className="h-10 w-10 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1">
                  <Input type="file" accept="image/*" onChange={handleImage} />
                  <p className="mt-2 text-xs text-muted-foreground">
                    JPEG, PNG, WebP or GIF. Maximum 10MB.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="title">Title *</Label>
              <Input id="title" {...register('title')} />
              {errors.title && <p className="text-sm text-destructive">{errors.title.message}</p>}
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="slug">URL Slug</Label>
              <Input
                id="slug"
                {...register('slug')}
                onChange={(e) => {
                  setSlugEdited(true);
                  setValue('slug', slugify(e.target.value), { shouldValidate: true });
                }}
                placeholder="article-url"
              />
              {errors.slug && <p className="text-sm text-destructive">{errors.slug.message}</p>}
              <p className="text-xs text-muted-foreground">
                Public URL: /news/{watch('slug') || 'article-url'}
              </p>
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="summary">Short Summary *</Label>
              <Textarea id="summary" rows={3} {...register('summary')} />
              {errors.summary && (
                <p className="text-sm text-destructive">{errors.summary.message}</p>
              )}
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="content">Full Article *</Label>
              <Textarea
                id="content"
                rows={14}
                {...register('content')}
                placeholder="Write the approved article here. Use blank lines between paragraphs."
              />
              {errors.content && (
                <p className="text-sm text-destructive">{errors.content.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <select
                id="category"
                {...register('category')}
                className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="author">Author</Label>
              <Input id="author" {...register('author')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Status *</Label>
              <select
                id="status"
                {...register('status')}
                className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
              >
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
              <p className="text-xs text-muted-foreground">
                Published articles appear on News &amp; Media. Drafts stay in the admin panel.
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="publishedDate">Publish Date</Label>
              <Input id="publishedDate" type="datetime-local" {...register('publishedDate')} />
              <p className="text-xs text-muted-foreground">
                If publishing with no date, the server uses the current time.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>SEO</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="seoTitle">SEO Title</Label>
              <Input
                id="seoTitle"
                {...register('seoTitle')}
                placeholder={title || 'Article title'}
              />
              <p className="text-xs text-muted-foreground">Leave empty to use the article title.</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="seoDescription">SEO Description</Label>
              <Textarea
                id="seoDescription"
                rows={3}
                {...register('seoDescription')}
                placeholder="Short search result description"
              />
              {errors.seoDescription && (
                <p className="text-sm text-destructive">{errors.seoDescription.message}</p>
              )}
              <p className="text-xs text-muted-foreground">
                Leave empty to use the article summary.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-3">
          <Button type="button" variant="outline" onClick={() => navigate('/admin/news')}>
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Saving...' : status === 'published' ? 'Save & Publish' : 'Save Draft'}
          </Button>
        </div>
      </form>
    </div>
  );
}
