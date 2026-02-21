function About() {
    return (
      <section>
        <h2 className="font-syne text-[10px] tracking-[0.25em] uppercase mb-5 flex items-center gap-3
          text-slate-400 dark:text-[#7070a0]">
          About Me
          <span className="flex-1 h-px bg-slate-200 dark:bg-white/[0.07]" />
        </h2>
        <p className="text-base leading-[1.9] italic pl-5
          border-l-2 border-emerald-500 dark:border-[#7DF9AA]
          text-slate-600 dark:text-[#e8e8f0]/80">
          Node.js developer with 1+ years of experience in building and delivering business applications.
          Focused on backend development and DevOps, ensuring scalable, secure, and efficient solutions.
          Interested in cybersecurity and eager to constantly learn and apply new knowledge.
        </p>
      </section>
    );
  }
  
  export default About;