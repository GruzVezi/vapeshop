import React from "react";
import "./styles/styles-footer.css";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <section className='sectionLeft'>
                <div className='catalogSection'>
                    <p className='legal'>
                        В соответствии со ст. 20 ФЗ №15 «Об охране здоровья граждан» <br/> лицам, не достигшим 18 лет пользование данным сайтом запрещено.
                    </p>
                </div>
                </section>
                <section className='sectionRight'>
                <h3 className='subtitle'>НАШИ КОНТАКТЫ</h3>
                <ul className='contactsList'>
                    <li className='contactItem'>88005553535</li>
                    <li className='contactItem'>10:00 - 20:00</li>
                    <li className='contactItem'>
                    <a href="mailto:email@mail.ru" className='link'>
                        email@mail.ru
                    </a>
                    </li>
                </ul>
                </section>
            </div>
    </footer>
    );
};

export default Footer;