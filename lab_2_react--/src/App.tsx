import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

type Theme = 'dark' | 'light';

function getAutoTheme(): Theme {
  const h = new Date().getHours();
  return h >= 7 && h < 21 ? 'light' : 'dark';
}

function App() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    setTheme(saved ?? getAutoTheme());
  }, []);

  useEffect(() => {
    // Tailwind dark: варіант читає клас 'dark' на <html>
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0f] text-slate-800 dark:text-[#e8e8f0] font-mono relative overflow-x-hidden transition-colors duration-500">

      {/* Grid — dark only */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-0 dark:opacity-100 bg-grid-dark bg-[length:40px_40px] transition-opacity duration-500" />

      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="fixed top-5 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono
          bg-white dark:bg-[#111118]
          border border-slate-200 dark:border-white/[0.07]
          text-slate-700 dark:text-[#e8e8f0]
          hover:border-emerald-500 dark:hover:border-[#7DF9AA]
          hover:text-emerald-600 dark:hover:text-[#7DF9AA]
          transition-all duration-300 shadow-lg"
      >
        <span className="text-base">{theme === 'dark' ? '☀️' : '🌙'}</span>
        <span>{theme === 'dark' ? 'Day mode' : 'Night mode'}</span>
      </button>

      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8">
        <Header />
        <main className="space-y-16 pb-8">
          <About />
          <Experience />
          <Skills />
          <Education />
          <Reviews />
        </main>
        <Footer />
      </div>

      <ContactForm />
    </div>
  );
}

export default App;