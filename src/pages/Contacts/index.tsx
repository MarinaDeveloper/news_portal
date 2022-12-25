import React from "react";
import routeMain from "./routes";

import photo from 'assets/img/frontend.jpg';

import './styles.scss';

const Contacts = () => {
    return (
        <section className="contactsPage">
            <div className="info">
                <div className="phone">
                    <a href="tel:+38050150150">+380 50 150 150</a>
                </div>
                <div className="name">
                    Marina <br/> Merkotan
                </div>
                <div className="mail">
                    <a href="mailto:mail@gmail.com">mail@gmail.com</a>
                </div>
                <div className="position">
                    Frontent Developer
                </div>
                <div className="technologies">
                    HTML CSS JS
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