const Footer = () => {
  return (
    <footer style={{
      padding: 'var(--space-lg) var(--space-md)',
      textAlign: 'center',
      fontSize: '0.85rem',
      color: 'var(--text-spray)',
      marginTop: 'auto',
      borderTop: '1px solid var(--border-sentinel)',
      backgroundColor: 'var(--bg-headland)'
    }}>
      <p style={{ letterSpacing: '0.5px' }}>
        &copy; {new Date().getFullYear()} CyberShore. 
        <span style={{ color: 'var(--text-mist)', marginLeft: '8px' }}>Securing the Digital Coastline.</span>
      </p>
    </footer>
  );
};

export default Footer;
