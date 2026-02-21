import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e8e8f0] font-mono relative overflow-x-hidden">
      {/* Animated grid background */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(125,249,170,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(125,249,170,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8">
        <Header />
        <main className="space-y-16 pb-8">
          <About />
          <Experience />
          <Skills />
          <Education />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;