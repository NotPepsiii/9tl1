import React, { useState } from "react";
import { Star as StarIcon, MessageSquare as MsgIcon, Quote, Heart } from "lucide-react";
import { reviews } from "../data";

export default function ReviewsSection() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Collect all unique tags
  const allTags = React.useMemo(() => {
    const tagsSet = new Set<string>();
    reviews.forEach(r => r.tags?.forEach(t => tagsSet.add(t)));
    return Array.from(tagsSet).slice(0, 10);
  }, []);

  // Filter reviews if a tag is chosen
  const filteredReviews = React.useMemo(() => {
    if (!selectedTag) return reviews;
    return reviews.filter(r => r.tags?.includes(selectedTag));
  }, [selectedTag]);

  return (
    <section className="bg-slate-950 border-t border-slate-900 py-16 px-4" id="community-reviews">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Title Heading */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 text-amber-500 text-xs font-mono font-bold tracking-widest rounded-full uppercase">
            <Quote className="w-3.5 h-3.5 fill-amber-500" />
            100% Genuine 5-Star Reviews
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white tracking-tight">
            What <span className="text-amber-400">Clondalkin</span> says about us
          </h2>
          <p className="text-xs md:text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
            We are incredibly proud to be a family‑owned business. Our staff cooks everything fresh to order. Read reviews from our amazing local community!
          </p>
        </div>

        {/* Filters/Popular tags */}
        <div className="flex flex-wrap justify-center items-center gap-2 max-w-2xl mx-auto">
          <button
            onClick={() => setSelectedTag(null)}
            className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-all ${
              !selectedTag
                ? "bg-amber-500 text-slate-950 border-amber-500 font-bold"
                : "bg-slate-900 border-slate-850 text-slate-450 hover:text-white hover:border-slate-705"
            }`}
          >
            All Reviews ({reviews.length})
          </button>
          
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-all capitalize ${
                selectedTag === tag
                  ? "bg-amber-500 text-slate-950 border-amber-500 font-bold"
                  : "bg-slate-900 border-slate-850 text-slate-450 hover:text-white"
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>

        {/* Reviews Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-900 border border-slate-850 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/20 transition-all group scale-100 hover:scale-[1.01]"
            >
              <div className="space-y-4">
                {/* Review Source details */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-extrabold text-sm md:text-base text-white group-hover:text-amber-400 transition-colors">
                      {rev.author}
                    </h4>
                    <span className="text-[10px] text-slate-500 font-mono block mt-0.5">
                      {rev.timeAgo} • Local Google Review
                    </span>
                  </div>
                  {/* Rating Stars */}
                  <div className="flex gap-0.5" aria-label="5 stars rating">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                </div>

                {/* Main comment quote content */}
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Tags panel inside individual card */}
              {rev.tags && rev.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-slate-850/50">
                  {rev.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-mono text-slate-500 group-hover:text-amber-400 bg-slate-955 px-2 py-0.5 rounded transition-colors"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Trust summary Footer */}
        <div className="p-6 bg-slate-900 border border-slate-850/70 rounded-2xl text-center max-w-4xl mx-auto space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 division-x divide-slate-800">
            <div>
              <div className="text-2xl md:text-3xl font-black font-display text-white">4.4 / 5</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-mono font-bold mt-1">Google Score</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black font-display text-amber-400">569+</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-mono font-bold mt-1">Customer Reviews</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black font-display text-white">100%</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-mono font-bold mt-1">Freshly Cooked</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black font-display text-amber-500">TikTok</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-mono font-bold mt-1">Viral Sensations</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
