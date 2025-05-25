import React from "react";

const Main = () => {
    return (
        <main style={ styles.main }>
            <div style={ styles.container }>
                <section style={ styles.section }>
                    <h2>VapeShop</h2>
                    <p>Test message Test message Test message Test message Test message</p>
                </section>
                <section style={ styles.section }>
                    <h3>Some text Some text Some text</h3>
                </section>
            </div>
        </main>
    )
};

const styles = {
    main: {
        padding: '20px',
        minHeight: '400px',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    section: {
        marginBottom: '30px',
        textAlign: 'center',
    },
};

export default Main;