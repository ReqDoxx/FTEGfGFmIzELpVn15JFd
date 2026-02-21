const techSkills = [
    'Python', 'JavaScript', 'TypeScript',
    'HTML / CSS', 'SQLite', 'PostgreSQL',
    'Sequelize', 'Nest.js', 'Express.js',
    'grammY.js', 'Git', 'GitHub',
    'Docker', 'Docker-compose', 'AWS',
    'DigitalOcean', 'Ngrok', 'Redis',
    'RabbitMQ', 'Clean Code', 'SOLID',
    'HTTP/HTTPS', 'REST API', 'Jira', 'SCRUM',
  ];
  
  const languages = [
    { lang: 'English', level: 'Advanced (C1)' },
    { lang: 'Ukrainian', level: 'Native (C2)' },
  ];
  
  interface TagProps {
    label: string;
  }
  
  function Tag({ label }: TagProps) {
    return (
      <li className="bg-[#1a1a25] border border-white/[0.07] rounded-md px-3 py-1.5 text-xs text-[#e8e8f0] tracking-wide cursor-default transition-all duration-200 hover:bg-[#7DF9AA]/10 hover:border-[#7DF9AA]/40 hover:text-[#7DF9AA] hover:shadow-[0_0_14px_rgba(125,249,170,0.12)]">
        {label}
      </li>
    );
  }
  
  function Skills() {
    return (
      <section>
        <h2
          className="text-[10px] tracking-[0.25em] uppercase text-[#7070a0] mb-5 flex items-center gap-3"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Skills
          <span className="flex-1 h-px bg-white/[0.07]" />
        </h2>
  
        <ul className="flex flex-wrap gap-2 mb-8">
          {techSkills.map((s) => <Tag key={s} label={s} />)}
        </ul>
  
        <h3
          className="text-[10px] tracking-[0.25em] uppercase text-[#7070a0] mb-4 flex items-center gap-3"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Languages
          <span className="flex-1 h-px bg-white/[0.07]" />
        </h3>
  
        <ul className="flex flex-wrap gap-3">
          {languages.map(({ lang, level }) => (
            <li
              key={lang}
              className="bg-[#111118] border border-[#7DF9AA]/20 rounded-lg px-5 py-3 text-sm"
            >
              <span className="text-[#7DF9AA] font-semibold mr-2">{lang}:</span>
              <span className="text-[#9090b8]">{level}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  
  export default Skills;