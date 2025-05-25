import React from 'react';

const Header = () => {
    return (
        <header style={ styles.header }>
            <div style={ styles.headerContent }>
                <h1 style={ styles.title }>VapeShop</h1>
                <nav>
                    <ul style={ styles.navList }>
                        <li style={ styles.navItem }><a href='#' style={ styles.links }>Каталог</a></li>
                        <li style={ styles.navItem }><a href='#' style={ styles.links }>О нас</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

const styles = {
    header: {
        backgroundColor: '#282c34',
        color: 'white',
        padding: '20px',
    },

    headerContent: {
        display: 'flex',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
    },

    title: {
        margin: 0,
        marginRight: '40px',
    },

    navList: {
        listStyle: 'none',
        padding: 0,
        display: 'flex',
        margin: 0,
    },

    navItem: {
        margin: '0 15px',
    },

    linksHover: {
        color: '#61dafb'
    }
};

export default Header;