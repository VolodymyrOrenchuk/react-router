import React from 'react';
import data from '../data/contacts';
import {useParams} from "react-router-dom";
import '../components/Contact.css';


const ContactPage = () => {
    let {id} = useParams()

    const found = data.find(contact => {
        return contact.id === +id;
    });

    return (<div className="profile-label">
        {found && (

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div>
                    <h2>
                        First name: {found.firstName}
                    </h2>
                    <h2>Last name: {found.lastName}</h2>
                    <h2 style={{display: "flex"}}>
                        Number: {found.phone}
                    </h2>
                    <h3>Genger: {found.gender}</h3>
                </div>
                <div>
                    <h2>Detailed information</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>)}
    </div>)
}

export default ContactPage
