function Header() {
    return (
      <header className="pt-16 pb-12">
        {/* Name */}
        <h1
          className="text-6xl sm:text-8xl font-black tracking-tighter leading-none mb-3"
          style={{
            fontFamily: "'Syne', sans-serif",
            background: 'linear-gradient(135deg, #ffffff 30%, #7DF9AA)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Nazar Pidvirnyi
        </h1>
  
        {/* Title badge */}
        <p className="text-[#7DF9AA] text-xs tracking-[0.2em] uppercase mb-10 font-normal">
          Node.js Developer
        </p>
  
        {/* Contact card */}
        <div className="bg-[#111118] border border-white/[0.07] border-l-[3px] border-l-[#7DF9AA] rounded-xl p-6 mb-10">
          <h2
            className="text-[10px] tracking-[0.25em] uppercase text-[#7070a0] mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Contact
          </h2>
          <address className="not-italic space-y-1">
            {[
              { icon: '📍', content: 'Lviv, Ukraine' },
              { icon: '📞', content: <a href="tel:+38098xxx1595" className="text-[#4FACFE] hover:text-[#7DF9AA] transition-colors">+380 98 464 1595</a> },
              { icon: '📧', content: <a href="mailto:nexqite@gmail.com" className="text-[#4FACFE] hover:text-[#7DF9AA] transition-colors">nexqite@gmail.com</a> },
              { icon: '✈️', content: <a href="https://t.me/NazarPidvirnyi" className="text-[#4FACFE] hover:text-[#7DF9AA] transition-colors">@NazarPidvirnyi</a> },
              { icon: '🐙', content: <a href="https://github.com/Reqdoxx" target="_blank" rel="noreferrer" className="text-[#4FACFE] hover:text-[#7DF9AA] transition-colors">github.com/Reqdoxx</a> },
              { icon: '🔗', content: <a href="#" className="text-[#4FACFE] hover:text-[#7DF9AA] transition-colors">Nazar Pidvirnyi</a> },
            ].map(({ icon, content }, i) => (
              <p key={i} className="flex items-center gap-3 py-2 border-b border-white/[0.05] last:border-0 text-sm text-[#e8e8f0]">
                <span>{icon}</span>
                <span>{content}</span>
              </p>
            ))}
          </address>
        </div>
  
        {/* Divider */}
        <div
          className="h-px w-full opacity-40"
          style={{ background: 'linear-gradient(90deg, transparent, #7DF9AA, transparent)' }}
        />
      </header>
    );
  }
  
  export default Header;