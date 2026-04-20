import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import logoDark from '../assets/logo-dark.png';

const Hero = ({ theme }) => {
  return (
    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{ marginBottom: '1.5rem' }}
      >
        <img 
          src={theme === 'dark' ? logoDark : logo} 
          alt="CyberShore Logo" 
          style={{ height: '120px', width: 'auto' }} 
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          display: 'inline-block',
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          fontSize: '0.8rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '2px',
          color: 'var(--accent-color)',
          marginBottom: '2rem',
          boxShadow: '0 0 15px rgba(100, 255, 218, 0.2)'
        }}
      >
        Launching Soon
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
          fontWeight: 800,
          marginBottom: '1rem',
          background: 'linear-gradient(45deg, var(--text-primary), var(--accent-color))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          whiteSpace: 'nowrap',
        }}
      >
        CyberShore
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          fontSize: '1.25rem',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '0 auto',
        }}
      >
        <span style={{ whiteSpace: 'nowrap' }}>Cyber security</span>{' '}
        <span style={{ whiteSpace: 'nowrap' }}>for the rest of us.</span>
      </motion.p>
    </div>
  );
};

export default Hero;
