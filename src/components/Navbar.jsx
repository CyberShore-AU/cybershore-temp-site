import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.5rem 2rem',
      backgroundColor: 'var(--nav-bg)',
      backdropFilter: 'blur(10px)',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      borderBottom: '1px solid var(--glass-border)'
    }}>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontSize: '1.5rem',
          fontWeight: 800,
          letterSpacing: '-1px',
          color: 'var(--accent-color)'
        }}
      >
        <img 
          src={logo} 
          alt="CyberShore Logo" 
          className="brand-logo"
          style={{ height: '32px', width: 'auto' }} 
        />
        CyberShore
      </motion.div>
      
      <motion.button 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={toggleTheme}
        aria-label="Toggle light/dark mode"
        style={{
          background: 'none',
          border: '1px solid var(--accent-color)',
          padding: '0.5rem',
          borderRadius: '50%',
          cursor: 'pointer',
          color: 'var(--accent-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--button-hover)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </motion.button>
    </nav>
  );
};

export default Navbar;
