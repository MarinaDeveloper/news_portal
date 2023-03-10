import React from "react";
import routeMain from "./routes";

import photo from 'assets/img/frontend.jpg';

import './styles.scss';

const Contacts = () => {
    return (
        <section className="contactsPage">
            <div className="info">
                <div className="phone">
                    <a href="tel:+380508007060">+380 50 800 70 60</a>
                </div>
                <div className="name">
                    Maryna <br/> Merkotan
                </div>
            
                <div className="position">
                    E-mail редакції:
                </div>
                <div className="mail">
                    <a href="mailto:your_email@gmail.com">your_email@gmail.com</a>
                </div>
                <div className="technologies">
                    ©2000-2023
                </div>
            </div>
            <div className="image">
                <img src={photo} alt={photo}/>
            </div>
        </section>
    )
}

export {routeMain};

export default Contacts;