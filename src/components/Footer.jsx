const Footer = () => {
  return (
    <footer style={{
      padding: '2rem',
      textAlign: 'center',
      fontSize: '0.9rem',
      color: 'var(--text-secondary)',
      marginTop: 'auto'
    }}>
      <p>&copy; {new Date().getFullYear()} CyberShore. All rights reserved. Securing the Digital Coastline.</p>
    </footer>
  );
};

export default Footer;
