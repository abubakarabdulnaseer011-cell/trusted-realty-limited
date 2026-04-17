type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-white/10 bg-[#12100f] p-6 sm:p-8">
      <p className="font-serif text-2xl leading-10 text-[#f4efe8]">“{quote}”</p>
      <div className="mt-8 border-t border-white/8 pt-5">
        <p className="text-base font-semibold text-[#f7f2eb]">{name}</p>
        <p className="mt-1 text-sm text-[#978c80]">{role}</p>
      </div>
    </article>
  );
}
