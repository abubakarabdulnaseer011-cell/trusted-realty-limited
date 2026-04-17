type MarketCardProps = {
  city: string;
  headline: string;
  summary: string;
  highlight: string;
  index: number;
};

export function MarketCard({ city, headline, summary, highlight, index }: MarketCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#14110f]/90 p-6 transition duration-300 hover:border-[#d8b87a]/40 hover:bg-[#171310] sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,184,122,0.1),transparent_45%)] opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative">
        <p className="text-sm font-semibold text-[#c9aa71]">{String(index).padStart(2, "0")}</p>
        <h3 className="mt-4 font-serif text-3xl text-[#f7f2eb]">{city}</h3>
        <p className="mt-4 text-lg leading-8 text-[#ded4c6]">{headline}</p>
        <p className="mt-4 text-sm leading-7 text-[#a89d90]">{summary}</p>
        <p className="mt-6 border-t border-white/8 pt-5 text-sm leading-7 text-[#c7bcae]">{highlight}</p>
      </div>
    </article>
  );
}
