import React from "react";

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>© 2025 Кабачки оптом!!!</p>
            <div style={styles.socialLinks}>
                <a href="#" style={styles.link}>VK</a>
                <a href="#" style={styles.link}>Telegram</a>
            </div>
    </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#282c34',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
    },

    socialLinks: {
        marginTop: '10px',
    },
  
    link: {
        color: 'white',
        margin: '0 10px',
        textDecoration: 'none',
    },
};

export default Footer;