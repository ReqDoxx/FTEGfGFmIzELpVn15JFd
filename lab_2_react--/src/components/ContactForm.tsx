import { useState, useEffect } from 'react';

const fields = [
  { id: 'cf-name',  label: 'Name',  type: 'text',  name: 'name',  placeholder: 'John Doe',         required: true  },
  { id: 'cf-email', label: 'Email', type: 'email', name: 'email', placeholder: 'john@example.com', required: true  },
  { id: 'cf-phone', label: 'Phone', type: 'tel',   name: 'phone', placeholder: '+380 00 000 0000', required: false },
] as const;

function ContactForm() {
  const [isOpen, setIsOpen]       = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsOpen(true), 60_000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const res = await fetch(e.currentTarget.action, {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) { setSubmitted(true); setTimeout(() => setIsOpen(false), 3000); }
      else alert('Something went wrong.');
    } catch { alert('Network error.'); }
  }

  if (!isOpen) return null;

  const inputClass = `w-full rounded-lg px-4 py-2.5 text-sm font-mono outline-none transition-all
    bg-slate-50 dark:bg-[#1a1a25]
    border border-slate-200 dark:border-white/[0.07]
    text-slate-800 dark:text-[#e8e8f0]
    placeholder:text-slate-400 dark:placeholder:text-[#7070a0]
    focus:border-emerald-500 dark:focus:border-[#7DF9AA]
    focus:shadow-[0_0_0_3px_rgba(16,185,129,0.15)] dark:focus:shadow-[0_0_0_3px_rgba(125,249,170,0.15)]`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-black/70 backdrop-blur-md"
      onClick={e => { if (e.target === e.currentTarget) setIsOpen(false); }}
    >
      <div className="animate-fadeUp relative w-[90%] max-w-md rounded-2xl p-9 shadow-2xl
        bg-white dark:bg-[#111118]
        border border-slate-200 dark:border-white/[0.07]
        border-t-[3px] border-t-emerald-500 dark:border-t-[#7DF9AA]">

        <button onClick={() => setIsOpen(false)} aria-label="Close"
          className="absolute top-4 right-5 text-xl leading-none transition-colors
            text-slate-400 dark:text-[#7070a0]
            hover:text-emerald-600 dark:hover:text-[#7DF9AA]">
          ✕
        </button>

        <h2 className="font-syne text-2xl font-black mb-1 text-slate-800 dark:text-white">
          👋 Let's Connect!
        </h2>
        <p className="text-xs mb-6 text-slate-400 dark:text-[#7070a0]">
          You've been here for a minute — fancy leaving a message?
        </p>

        {submitted ? (
          <div className="text-center py-6">
            <div className="text-5xl mb-4">✅</div>
            <p className="font-syne font-bold text-lg text-emerald-600 dark:text-[#7DF9AA]">Message sent!</p>
            <small className="text-slate-400 dark:text-[#7070a0] text-xs">I'll get back to you soon.</small>
          </div>
        ) : (
          <form action="https://formspree.io/f/xojnkdon" method="POST" onSubmit={handleSubmit} className="space-y-4">
            {fields.map(f => (
              <div key={f.id}>
                <label htmlFor={f.id} className="block text-[10px] tracking-[0.12em] uppercase mb-1
                  text-slate-400 dark:text-[#7070a0]">
                  {f.label}
                </label>
                <input id={f.id} type={f.type} name={f.name}
                  placeholder={f.placeholder} required={f.required}
                  className={inputClass} />
              </div>
            ))}
            <div>
              <label htmlFor="cf-message" className="block text-[10px] tracking-[0.12em] uppercase mb-1
                text-slate-400 dark:text-[#7070a0]">
                Message
              </label>
              <textarea id="cf-message" name="message" placeholder="Your message..." required rows={3}
                className={`${inputClass} resize-y`} />
            </div>
            <button type="submit"
              className="w-full mt-2 font-syne font-black text-sm tracking-widest uppercase rounded-xl py-3 transition-all
                bg-emerald-500 dark:bg-[#7DF9AA]
                text-white dark:text-[#0a0a0f]
                hover:bg-emerald-600 dark:hover:opacity-85
                hover:-translate-y-0.5 active:translate-y-0">
              Send Message →
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactForm;