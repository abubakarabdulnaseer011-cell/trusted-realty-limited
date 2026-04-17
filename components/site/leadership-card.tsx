type LeadershipCardProps = {
  name: string;
  role: string;
  education: string;
  bio: string;
};

export function LeadershipCard({ name, role, education, bio }: LeadershipCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-white/10 bg-[#12100f] p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c9aa71]">{role}</p>
      <h3 className="mt-5 font-serif text-3xl text-[#f7f2eb]">{name}</h3>
      <p className="mt-3 text-sm uppercase tracking-[0.1em] text-[#978c80]">{education}</p>
      <p className="mt-6 text-sm leading-7 text-[#bdb3a7]">{bio}</p>
    </article>
  );
}
