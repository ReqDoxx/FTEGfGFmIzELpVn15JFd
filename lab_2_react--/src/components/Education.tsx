function Education() {
    return (
      <section>
        <h2
          className="text-[10px] tracking-[0.25em] uppercase text-[#7070a0] mb-5 flex items-center gap-3"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Education
          <span className="flex-1 h-px bg-white/[0.07]" />
        </h2>
  
        <div className="bg-[#111118] border border-white/[0.07] border-l-2 border-l-[#4FACFE] rounded-xl p-6 flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h3
              className="text-white font-bold text-base mb-1"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Lviv Polytechnic National University
            </h3>
            <p className="text-[#9090b8] text-sm">Cybersecurity</p>
          </div>
          <em className="not-italic text-[#7DF9AA] text-xs tracking-wide bg-[#7DF9AA]/10 border border-[#7DF9AA]/20 rounded-full px-3 py-1 self-start">
            Sep 2023 – Present
          </em>
        </div>
      </section>
    );
  }
  
  export default Education;