import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import logoDark from '../assets/logo-dark.png';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: 'var(--bg-headland)',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      borderBottom: '2px solid var(--border-sentinel)'
    }}>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontSize: '1.25rem',
          fontWeight: 800,
          letterSpacing: '-1px',
          color: 'var(--text-mist)'
        }}
      >
        <img 
          src={theme === 'dark' ? logoDark : logo} 
          alt="CyberShore Logo" 
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
          border: '2px solid var(--color-primary)',
          padding: '0.4rem',
          borderRadius: '4px',
          cursor: 'pointer',
          color: 'var(--color-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--color-primary)';
          e.currentTarget.style.color = 'var(--bg-ocean)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = 'var(--color-primary)';
        }}
      >
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </motion.button>
    </nav>
  );
};

export default Navbar;
