function EduCard({ title, sub, period, accentDark }: { title: string; sub: string; period: string; accentDark?: boolean }) {
    return (
      <div className={`rounded-xl p-6 flex items-start justify-between flex-wrap gap-4
        bg-white dark:bg-[#111118]
        border border-slate-200 dark:border-white/[0.07]
        shadow-sm dark:shadow-none
        border-l-[3px] ${accentDark
          ? 'border-l-emerald-500 dark:border-l-[#7DF9AA]'
          : 'border-l-blue-400 dark:border-l-[#4FACFE]'}`}>
        <div>
          <h3 className="font-syne font-bold text-base mb-1 text-slate-800 dark:text-white">{title}</h3>
          <p className="text-sm text-slate-500 dark:text-[#7070a0]">{sub}</p>
        </div>
        <span className="text-xs rounded-full px-3 py-1 self-start
          text-emerald-700 dark:text-[#7DF9AA]
          bg-emerald-50 dark:bg-[#7DF9AA]/10
          border border-emerald-200 dark:border-[#7DF9AA]/20">
          {period}
        </span>
      </div>
    );
  }
  
  function Education() {
    return (
      <section>
        <h2 className="font-syne text-[10px] tracking-[0.25em] uppercase mb-5 flex items-center gap-3
          text-slate-400 dark:text-[#7070a0]">
          Education & Work
          <span className="flex-1 h-px bg-slate-200 dark:bg-white/[0.07]" />
        </h2>
        <div className="space-y-4">
          <EduCard
            title="Lviv Polytechnic National University"
            sub="Cybersecurity"
            period="Sep 2023 – Present"
          />
          <EduCard
            title="SoftServe inc."
            sub="CSOC Security Analyst"
            period="Jun 2025 – Present"
            accentDark
          />
        </div>
      </section>
    );
  }
  
  export default Education;