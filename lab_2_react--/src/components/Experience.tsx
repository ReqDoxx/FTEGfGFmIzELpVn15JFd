interface ExperienceCardProps {
    title: string;
    period: string;
    description: string;
    techStack: string;
    link?: string; // optional — не всі картки мають посилання
  }
  
  function ExperienceCard({ title, period, description, link, techStack }: ExperienceCardProps) {
    return (
      <article className="group relative bg-[#111118] border border-white/[0.07] rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#7DF9AA]/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
        {/* Animated top gradient bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
          style={{ background: 'linear-gradient(90deg, #7DF9AA, #4FACFE)' }}
        />
  
        <h3
          className="text-white text-base font-bold mb-1"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {title}
        </h3>
  
        <em className="not-italic text-[#7DF9AA] text-xs tracking-wide block mb-3">{period}</em>
  
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-[#4FACFE] hover:underline text-xs block mb-3"
          >
            → GitHub Link
          </a>
        )}
  
        <p className="text-[#9090b8] text-sm leading-relaxed mb-3">{description}</p>
  
        <p className="text-[10px] text-[#7070a0] tracking-wide">
          <span className="uppercase mr-1">Stack:</span>
          {techStack}
        </p>
      </article>
    );
  }
  
  function Experience() {
    return (
      <section>
        <h2
          className="text-[10px] tracking-[0.25em] uppercase text-[#7070a0] mb-5 flex items-center gap-3"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Experience
          <span className="flex-1 h-px bg-white/[0.07]" />
        </h2>
  
        <div className="space-y-4">
          <ExperienceCard
            title="Tech-lead Back-end | Market Reveal"
            period="September 2024 – February 2025"
            link="https://github.com/Reqdoxx"
            description="MarketReveal is a project that automatically searches and collects listings from marketplaces like OLX, helping users quickly find the best products with cheapest prices."
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