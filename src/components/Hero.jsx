import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import logoDark from '../assets/logo-dark.png';

const Hero = ({ theme }) => {
  return (
    <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{ marginBottom: 'var(--space-md)' }}
      >
        <img 
          src={theme === 'dark' ? logoDark : logo} 
          alt="CyberShore Logo" 
          style={{ height: '140px', width: 'auto' }} 
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          display: 'inline-block',
          background: 'var(--bg-headland)',
          border: '2px solid var(--color-primary)',
          padding: '0.5rem 1.25rem',
          borderRadius: '4px',
          fontSize: '0.85rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '2px',
          color: 'var(--color-primary)',
          marginBottom: 'var(--space-md)',
        }}
      >
        Launching Soon
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          fontSize: 'clamp(3rem, 10vw, 5rem)',
          fontWeight: 800,
          marginBottom: 'var(--space-sm)',
          color: 'var(--text-mist)',
          letterSpacing: '-2px',
        }}
      >
        CyberShore
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          fontSize: '1.5rem',
          color: 'var(--text-spray)',
          maxWidth: '650px',
          margin: '0 auto',
          marginBottom: 'var(--space-lg)',
          lineHeight: 1.4,
        }}
      >
        Cyber security <span style={{ color: 'var(--text-mist)', fontWeight: 600 }}>for the rest of us.</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <button className="sentinel-button">
          Secure Your Perimeter
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
