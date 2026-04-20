import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
      <div className="coastline-bg">
        <div className="wave" style={{ opacity: 0.1, animationDuration: '15s' }}></div>
        <div className="wave" style={{ opacity: 0.2, animationDelay: '-5s', animationDuration: '25s' }}></div>
        <div className="wave" style={{ opacity: 0.3, animationDelay: '-10s', animationDuration: '35s' }}></div>
      </div>
      
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', padding: '0 1.5rem', paddingTop: '80px' }}>
        <div className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Hero theme={theme} />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
