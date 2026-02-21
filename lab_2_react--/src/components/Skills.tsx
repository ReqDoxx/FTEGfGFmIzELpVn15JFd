const techSkills = [
    'Python', 'JavaScript', 'TypeScript', 'HTML/CSS',
    'SQLite', 'PostgreSQL', 'Sequelize', 'Nest.js',
    'Express.js', 'grammY.js', 'Git', 'GitHub',
    'Docker', 'Docker-compose', 'AWS', 'DigitalOcean',
    'Ngrok', 'Redis', 'RabbitMQ', 'Clean Code',
    'SOLID', 'HTTP/HTTPS', 'REST API', 'Jira', 'SCRUM',
  ];
  
  const languages = [
    { lang: 'English', level: 'Advanced (C1)' },
    { lang: 'Ukrainian', level: 'Native (C2)' },
  ];
  
  function Tag({ label }: { label: string }) {
    return (
      <li className="rounded-md px-3 py-1.5 text-xs tracking-wide cursor-default transition-all duration-200
        bg-slate-100 dark:bg-[#1a1a25]
        border border-slate-200 dark:border-white/[0.07]
        text-slate-700 dark:text-[#e8e8f0]
        hover:bg-emerald-50 dark:hover:bg-[#7DF9AA]/10
        hover:border-emerald-400 dark:hover:border-[#7DF9AA]/40
        hover:text-emerald-700 dark:hover:text-[#7DF9AA]
        hover:shadow-[0_0_14px_rgba(16,185,129,0.15)] dark:hover:shadow-[0_0_14px_rgba(125,249,170,0.12)]">
        {label}
      </li>
    );
  }
  
  function Skills() {
    return (
      <section>
        <h2 className="font-syne text-[10px] tracking-[0.25em] uppercase mb-5 flex items-center gap-3
          text-slate-400 dark:text-[#7070a0]">
          Skills
          <span className="flex-1 h-px bg-slate-200 dark:bg-white/[0.07]" />
        </h2>
  
        <ul className="flex flex-wrap gap-2 mb-8">
          {techSkills.map(s => <Tag key={s} label={s} />)}
        </ul>
  
        <h3 className="font-syne text-[10px] tracking-[0.25em] uppercase mb-4 flex items-center gap-3
          text-slate-400 dark:text-[#7070a0]">
          Languages
          <span className="flex-1 h-px bg-slate-200 dark:bg-white/[0.07]" />
        </h3>
  
        <ul className="flex flex-wrap gap-3">
          {languages.map(({ lang, level }) => (
            <li key={lang} className="rounded-lg px-5 py-3 text-sm
              bg-white dark:bg-[#111118]
              border border-emerald-200 dark:border-[#7DF9AA]/20">
              <span className="font-semibold mr-2 text-emerald-600 dark:text-[#7DF9AA]">{lang}:</span>
              <span className="text-slate-500 dark:text-[#7070a0]">{level}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  
  export default Skills;