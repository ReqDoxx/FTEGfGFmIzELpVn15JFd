interface ExperienceCardProps {
    title: string;
    period: string;
    description: string;
    techStack: string;
    link?: string;
  }
  
  function ExperienceCard({ title, period, description, link, techStack }: ExperienceCardProps) {
    return (
      <article className="group relative rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1
        bg-white dark:bg-[#111118]
        border border-slate-200 dark:border-white/[0.07]
        hover:border-emerald-300 dark:hover:border-[#7DF9AA]/20
        shadow-sm dark:shadow-none
        hover:shadow-md dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
  
        {/* Animated top bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500
          bg-gradient-to-r from-emerald-400 to-blue-400
          dark:bg-topbar-gradient" />
  
        <h3 className="font-syne text-base font-bold mb-1
          text-slate-800 dark:text-white">
          {title}
        </h3>
  
        <em className="not-italic text-xs tracking-wide block mb-3
          text-emerald-600 dark:text-[#7DF9AA]">
          {period}
        </em>
  
        {link && (
          <a href={link} target="_blank" rel="noreferrer"
            className="text-xs block mb-3
              text-blue-500 dark:text-[#4FACFE] hover:underline">
            → GitHub Link
          </a>
        )}
  
        <p className="text-sm leading-relaxed mb-3
          text-slate-500 dark:text-[#7070a0]">
          {description}
        </p>
  
        <p className="text-[10px] tracking-wide
          text-slate-400 dark:text-[#7070a0]">
          <span className="uppercase mr-1">Stack:</span>{techStack}
        </p>
      </article>
    );
  }
  
  function Experience() {
    return (
      <section>
        <h2 className="font-syne text-[10px] tracking-[0.25em] uppercase mb-5 flex items-center gap-3
          text-slate-400 dark:text-[#7070a0]">
          Experience
          <span className="flex-1 h-px bg-slate-200 dark:bg-white/[0.07]" />
        </h2>
        <div className="space-y-4">
          <ExperienceCard
            title="Tech-lead Back-end | Market Reveal"
            period="September 2024 – February 2025"
            link="https://github.com/Reqdoxx"
            description="MarketReveal automatically searches and collects listings from marketplaces like OLX, helping users quickly find the best products with cheapest prices."
            techStack="TypeScript, Nest.js, GrammyJS, PostgreSQL, Sequelize, Redis, Git, GitHub, Docker, Docker-compose, SOLID, Jira, SCRUM"
          />
          <ExperienceCard
            title="Tech-lead Back-end | IMEI Checker (NDA)"
            period="August 2024 – February 2025"
            description="Telegram bot wrapper for multiple existing IMEI checking services providing more comfortable access to them inside Telegram."
            techStack="JavaScript, Express.js, grammY.js, PostgreSQL, Sequelize, Redis, Docker, Docker-compose, Ngrok"
          />
        </div>
      </section>
    );
  }
  
  export default Experience;