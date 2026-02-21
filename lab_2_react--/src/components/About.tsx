function About() {
    return (
      <section>
        <h2
          className="text-[10px] tracking-[0.25em] uppercase text-[#7070a0] mb-5 flex items-center gap-3"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          About Me
          <span className="flex-1 h-px bg-white/[0.07]" />
        </h2>
  
        <p className="text-[#c0c0d8] text-base leading-relaxed italic border-l-2 border-[#7DF9AA] pl-5">
          Node.js developer with 1+ years of experience in building and delivering business applications.
          Focused on backend development and DevOps, ensuring scalable, secure, and efficient solutions.
          Interested in cybersecurity and eager to constantly learn and apply new knowledge.
        </p>
      </section>
    );
  }
  
  export default About;