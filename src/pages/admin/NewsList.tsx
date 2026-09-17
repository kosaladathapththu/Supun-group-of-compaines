import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Eye, Newspaper, Pencil, Plus, Search, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { getErrorMessage, getFileUrl } from '@/services/api';
import { newsAPI, type NewsArticle } from '@/services/newsApi';

const formatDate = (value?: string | null) => {
  if (!value) return 'Not published';
  const date = new Date(value.replace(' ', 'T'));
  return Number.isNaN(date.getTime()) ? value : date.toLocaleDateString();
};

export default function NewsList() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const loadNews = async () => {
    try {
      setIsLoading(true);
      setArticles(await newsAPI.getAllAdmin());
    } catch (error) {
      toast.error(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { loadNews(); }, []);

  const filtered = useMemo(() => {
    const q = searchTerm.toLowerCase().trim();
    if (!q) return articles;
    return articles.filter((article) => `${article.title} ${article.category} ${article.summary}`.toLowerCase().includes(q));
  }, [articles, searchTerm]);

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      await newsAPI.delete(deleteId);
      toast.success('News article deleted');
      await loadNews();
    } catch (error) {
      toast.error(getErrorMessage(error));
    } finally {
      setDeleteId(null);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <CardTitle className="flex items-center gap-2 text-2xl"><Newspaper className="h-6 w-6" /> News & Media</CardTitle>
            <Link to="/admin/news/new"><Button><Plus className="mr-2 h-4 w-4" /> Add Article</Button></Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-10" placeholder="Search news..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>

          {isLoading ? <div className="py-10 text-center text-muted-foreground">Loading news...</div> : filtered.length === 0 ? (
            <div className="py-12 text-center"><Newspaper className="mx-auto mb-4 h-12 w-12 text-muted-foreground" /><h3 className="text-lg font-semibold">No news articles found</h3><p className="mt-2 text-muted-foreground">Create the first approved update from the admin panel.</p></div>
          ) : (
            <div className="rounded-md border overflow-x-auto">
              <Table>
                <TableHeader><TableRow><TableHead>Image</TableHead><TableHead>Article</TableHead><TableHead>Category</TableHead><TableHead>Status</TableHead><TableHead>Published</TableHead><TableHead className="text-right">Actions</TableHead></TableRow></TableHeader>
                <TableBody>{filtered.map((article) => (
                  <TableRow key={article.id}>
                    <TableCell><div className="h-14 w-20 overflow-hidden rounded bg-muted">{article.featuredImage ? <img src={getFileUrl(article.featuredImage) || ''} alt="" className="h-full w-full object-cover" /> : null}</div></TableCell>
                    <TableCell><div className="font-medium">{article.title}</div><div className="max-w-[360px] truncate text-xs text-muted-foreground">/{article.slug}</div></TableCell>
                    <TableCell>{article.category}</TableCell>
                    <TableCell>{article.status === 'published' ? <Badge>Published</Badge> : <Badge variant="secondary">Draft</Badge>}</TableCell>
                    <TableCell>{formatDate(article.publishedDate)}</TableCell>
                    <TableCell className="text-right"><div className="flex justify-end gap-2">
                      {article.status === 'published' && <a href={`/news/${article.slug}`} target="_blank" rel="noreferrer"><Button variant="ghost" size="sm"><Eye className="h-4 w-4" /></Button></a>}
                      <Link to={`/admin/news/${article.id}/edit`}><Button variant="outline" size="sm"><Pencil className="h-4 w-4" /></Button></Link>
                      <Button variant="destructive" size="sm" onClick={() => setDeleteId(article.id)}><Trash2 className="h-4 w-4" /></Button>
                    </div></TableCell>
                  </TableRow>
                ))}</TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      <AlertDialog open={deleteId !== null} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent><AlertDialogHeader><AlertDialogTitle>Delete news article?</AlertDialogTitle><AlertDialogDescription>This permanently removes the article from the admin panel and public website.</AlertDialogDescription></AlertDialogHeader><AlertDialogFooter><AlertDialogCancel>Cancel</AlertDialogCancel><AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">Delete</AlertDialogAction></AlertDialogFooter></AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
