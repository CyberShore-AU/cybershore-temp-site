import { useState } from 'react';
import { motion } from 'framer-motion';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      style={{
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(12px)',
        padding: '2.5rem',
        borderRadius: '20px',
        border: '1px solid var(--glass-border)',
        width: '100%',
        maxWidth: '500px',
        boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
      }}
    >
      <p style={{ marginBottom: '1.5rem', fontWeight: 500, textAlign: 'center' }}>
        Join the security waitlist
      </p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your work email"
            required
            style={{
              flex: 1,
              minWidth: '200px',
              padding: '1rem',
              borderRadius: '10px',
              border: '1px solid var(--glass-border)',
              background: 'var(--bg-secondary)',
              color: 'var(--text-primary)',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.3s ease',
            }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--accent-color)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--glass-border)')}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            style={{
              padding: '1rem 2rem',
              borderRadius: '10px',
              border: 'none',
              backgroundColor: 'var(--accent-color)',
              color: '#0a192f',
              fontWeight: 700,
              cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              opacity: status === 'loading' ? 0.7 : 1,
              minWidth: '130px',
            }}
            onMouseEnter={(e) => {
              if (status !== 'loading') {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.filter = 'brightness(1.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (status !== 'loading') {
                e.target.style.transform = 'none';
                e.target.style.filter = 'none';
              }
            }}
          >
            {status === 'loading' ? 'Joining...' : status === 'success' ? 'Joined!' : 'Notify Me'}
          </button>
        </div>
        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              marginTop: '0.5rem',
              fontSize: '0.85rem',
              color: 'var(--success-color)',
              textAlign: 'center',
            }}
          >
            Thank you! You've been added to our secure waitlist.
          </motion.p>
        )}
      </form>
    </motion.div>
  );
};

export default WaitlistForm;
