function Header() {
    return (
      <header className="pt-20 pb-14">
        {/* Name */}
        <h1 className="font-syne text-[clamp(2.8rem,8vw,5rem)] font-black tracking-[-0.03em] leading-none mb-3 bg-clip-text text-transparent
          bg-gradient-to-br from-slate-800 to-emerald-600
          dark:from-white dark:to-[#7DF9AA]">
          Nazar Pidvirnyi
        </h1>
  
        <p className="font-mono text-sm tracking-[0.15em] uppercase mb-10
          text-emerald-600 dark:text-[#7DF9AA]">
          Node.js Developer
        </p>
  
        {/* Contact card */}
        <div className="rounded-xl p-6 mb-10 border-l-[3px]
          bg-white dark:bg-[#111118]
          border border-slate-200 dark:border-white/[0.07]
          border-l-emerald-500 dark:border-l-[#7DF9AA]
          shadow-sm dark:shadow-none">
          <h2 className="font-syne text-[10px] tracking-[0.25em] uppercase mb-4
            text-slate-400 dark:text-[#7070a0]">
            Contact
          </h2>
          <address className="not-italic space-y-1">
            {[
              { icon: '📍', text: 'Lviv, Ukraine',      href: undefined },
              { icon: '📞', text: '+380 98 xxx 1595',   href: 'tel:+38098xxx1595' },
              { icon: '📧', text: 'nexqite@gmail.com',  href: 'mailto:nexqite@gmail.com' },
              { icon: '✈️', text: '@NazarPidvirnyi',    href: 'https://t.me/NazarPidvirnyi' },
              { icon: '🐙', text: 'github.com/Reqdoxx', href: 'https://github.com/Reqdoxx' },
              { icon: '🔗', text: 'Nazar Pidvirnyi',    href: '#' },
            ].map(({ icon, text, href }) => (
              <p key={text} className="flex items-center gap-3 py-2 text-sm
                border-b border-slate-100 dark:border-white/[0.05] last:border-0
                text-slate-700 dark:text-[#e8e8f0]">
                <span>{icon}</span>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="text-blue-500 dark:text-[#4FACFE] hover:text-emerald-600 dark:hover:text-[#7DF9AA] transition-colors"
                  >
                    {text}
                  </a>
                ) : (
                  <span>{text}</span>
                )}
              </p>
            ))}
          </address>
        </div>
  
        {/* Divider */}
        <div className="h-px w-full opacity-40
          bg-gradient-to-r from-transparent via-emerald-500 to-transparent
          dark:via-[#7DF9AA]" />
      </header>
    );
  }
  
  export default Header;