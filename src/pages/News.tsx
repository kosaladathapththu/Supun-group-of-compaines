import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Building2, Mail, Newspaper, PackageCheck, Sparkles } from "lucide-react";
import Seo from "@/components/Seo";

const filters = ["All updates", "Corporate", "Manufacturing", "Retail", "Hospitality"];

const stories = [
  { label: "Our story", title: "From trading goods to making them.", text: "Discover the milestones that shaped Supun Group from 1978 to today.", to: "/about", icon: Sparkles },
  { label: "Group portfolio", title: "Eleven connected companies.", text: "Explore businesses across manufacturing, retail, distribution and hospitality.", to: "/companies", icon: Building2 },
  { label: "Made in Sri Lanka", title: "Meet the Camy product range.", text: "See locally manufactured products created by specialist Group companies.", to: "/camy-products", icon: PackageCheck },
];

const News = () => {
  const [activeFilter, setActiveFilter] = useState("All updates");

  return (
    <main className="news-page min-h-screen text-[#10233f]">
      <Seo title="News & Media | Supun Group of Companies" description="News, announcements and media resources from Supun Group of Companies in Sri Lanka." keywords="Supun Group news, Supun Group media, Sri Lanka manufacturing news, Camy news" />
      <style>{`
        .news-page{background:#f5f6f4}.news-shell{width:min(1540px,calc(100% - 40px));margin:auto}
        .news-hero{position:relative;overflow:hidden;min-height:560px;background:#fff;border-bottom:1px solid rgba(16,35,63,.1)}.news-hero:before{content:"";position:absolute;width:640px;height:640px;right:-230px;top:-240px;border:105px solid rgba(120,190,67,.09);border-radius:50%}
        .news-hero-grid{display:grid;grid-template-columns:1.05fr .95fr;align-items:end;min-height:560px}.media-board{display:grid;grid-template-columns:1fr 1fr;gap:1px;overflow:hidden;border-radius:30px 30px 0 0;background:#dfe4e9}.media-tile{display:flex;min-height:190px;flex-direction:column;background:#10233f;padding:30px;color:#fff;transition:.25s}.media-tile:first-child{grid-column:span 2;background:#315f9f}.media-tile:hover{background:#173f72}.media-tile-arrow{margin-top:auto;display:flex;align-items:center;justify-content:space-between;padding-top:28px}
        .filter-row{display:flex;gap:8px;overflow-x:auto;padding-bottom:5px}.news-filter{flex:none;border:1px solid rgba(16,35,63,.12);border-radius:999px;background:#fff;padding:12px 18px;font-size:12px;font-weight:700;transition:.2s}.news-filter:hover,.news-filter.active{border-color:#78be43;background:#10233f;color:#fff}
        .newsroom{display:grid;grid-template-columns:320px 1fr;gap:24px}.news-status{position:relative;overflow:hidden;display:flex;min-height:430px;flex-direction:column;align-items:center;justify-content:center;border:1px solid rgba(16,35,63,.1);border-radius:28px;background:#fff;padding:42px;text-align:center}.news-status:after{content:"";position:absolute;width:230px;height:230px;right:-135px;bottom:-135px;border:38px solid rgba(120,190,67,.1);border-radius:50%}
        .story-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.story-card{display:flex;min-height:350px;flex-direction:column;border:1px solid rgba(16,35,63,.1);border-radius:24px;background:#fff;padding:28px;transition:.25s}.story-card:hover{transform:translateY(-6px);border-color:rgba(49,95,159,.3);box-shadow:0 20px 45px rgba(16,35,63,.09)}
        .media-cta{position:relative;overflow:hidden;display:grid;grid-template-columns:1fr auto;align-items:center;gap:30px;border-radius:30px;background:#0d2340;padding:52px;color:#fff}.media-cta:after{content:"";position:absolute;width:300px;height:300px;right:-130px;top:-140px;border:50px solid rgba(120,190,67,.1);border-radius:50%}
        @media(max-width:1000px){.news-hero-grid{grid-template-columns:1fr;padding-top:90px}.newsroom{grid-template-columns:1fr}.story-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:680px){.news-shell{width:calc(100% - 24px)}.news-hero,.news-hero-grid{min-height:auto}.media-board,.story-grid{grid-template-columns:1fr}.media-tile:first-child{grid-column:auto}.media-cta{grid-template-columns:1fr;padding:32px 24px}}
      `}</style>

      <section className="news-hero px-5 pt-0 md:px-8">
        <div className="news-shell news-hero-grid relative z-10">
          <div className="pb-16 pr-6 md:pb-24 lg:pr-16">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.25em] text-[#315f9f]"><span className="h-px w-11 bg-[#78be43]" /> News & Media</p>
            <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[.94] tracking-[-.055em] md:text-7xl lg:text-[5.6rem]">Stories from a Group that keeps moving.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#68788d]">Official announcements, company achievements and media resources from across Supun Group.</p>
            <a href="#newsroom" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#78be43] px-7 py-4 text-sm font-bold transition hover:bg-[#10233f] hover:text-white">Enter the newsroom <ArrowRight size={17} /></a>
          </div>
          <div className="media-board">
            <Link to="/about" className="media-tile group"><small className="text-xs font-bold uppercase tracking-[.18em] text-[#b4e18e]">Inside the Group</small><h2 className="mt-5 max-w-lg text-3xl font-bold leading-tight">A Sri Lankan story built since 1978.</h2><span className="media-tile-arrow text-sm font-bold">Read our story <ArrowUpRight size={18} /></span></Link>
            <Link to="/companies" className="media-tile"><Building2 className="text-[#9bd36d]" /><span className="media-tile-arrow text-sm font-bold">Explore companies <ArrowRight size={17} /></span></Link>
            <Link to="/contact" className="media-tile"><Mail className="text-[#9bd36d]" /><span className="media-tile-arrow text-sm font-bold">Media contact <ArrowRight size={17} /></span></Link>
          </div>
        </div>
      </section>

      <section id="newsroom" className="px-5 py-20 md:px-8 md:py-28">
        <div className="news-shell">
          <div className="grid gap-6 border-b border-[#10233f]/10 pb-8 md:grid-cols-2 md:items-end"><div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#5c9c30]">The newsroom</p><h2 className="mt-4 text-4xl font-bold tracking-[-.04em] md:text-5xl">Latest updates.</h2></div><p className="max-w-xl leading-7 text-[#708095] md:justify-self-end">Browse official Group news by sector. Only approved announcements will appear here.</p></div>
          <div className="filter-row mt-7" role="tablist">{filters.map(filter => <button key={filter} type="button" onClick={() => setActiveFilter(filter)} className={`news-filter ${activeFilter === filter ? "active" : ""}`}>{filter}</button>)}</div>
          <div className="newsroom mt-7">
            <aside className="rounded-[1.6rem] bg-[#eaf0e5] p-7"><Newspaper className="text-[#5c9c30]" size={27} /><p className="mt-10 text-xs font-bold uppercase tracking-[.18em] text-[#315f9f]">Selected channel</p><h3 className="mt-3 text-2xl font-bold">{activeFilter}</h3><p className="mt-4 text-sm leading-6 text-[#68788d]">News will be organised here as approved releases are published.</p></aside>
            <div className="news-status"><span className="grid h-16 w-16 place-items-center rounded-full bg-[#edf4e8] text-[#5c9c30]"><Newspaper size={26} /></span><p className="mt-6 text-xs font-bold uppercase tracking-[.18em] text-[#315f9f]">Official updates only</p><h3 className="mt-3 text-3xl font-bold">The next story is being prepared.</h3><p className="mt-4 max-w-xl leading-7 text-[#708095]">No approved articles are published in this channel yet. For a statement or company information, contact our media desk.</p><Link to="/contact" className="relative z-10 mt-7 inline-flex items-center gap-3 rounded-full bg-[#10233f] px-6 py-3.5 text-sm font-bold text-white">Media enquiry <ArrowRight size={16} /></Link></div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#10233f]/10 bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="news-shell"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#5c9c30]">Explore Supun Group</p><h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-.04em] md:text-5xl">The stories behind the headlines.</h2><div className="story-grid mt-12">{stories.map(({ label, title, text, to, icon: Icon }) => <Link key={title} to={to} className="story-card group"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#edf4e8] text-[#5c9c30]"><Icon size={23} /></span><div className="mt-auto"><small className="font-bold uppercase tracking-[.15em] text-[#315f9f]">{label}</small><h3 className="mt-3 text-2xl font-bold leading-tight">{title}</h3><p className="mt-4 text-sm leading-6 text-[#708095]">{text}</p><span className="mt-7 inline-flex items-center gap-2 text-sm font-bold">Read more <ArrowRight size={15} /></span></div></Link>)}</div></div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24"><div className="news-shell media-cta"><div className="relative z-10"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#a8dc7d]">For journalists & media</p><h2 className="mt-4 text-3xl font-bold md:text-5xl">Need an official Group response?</h2><p className="mt-4 max-w-2xl leading-7 text-white/65">Send your publication, deadline and enquiry details to our Group office.</p></div><Link to="/contact" className="relative z-10 inline-flex items-center justify-center gap-3 rounded-full bg-[#78be43] px-7 py-4 text-sm font-bold text-[#10233f]">Contact media desk <ArrowRight size={17} /></Link></div></section>
    </main>
  );
};

export default News;
