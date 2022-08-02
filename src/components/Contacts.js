import React, {useEffect, useState} from "react";
import "./Contact.css";
import Contact from "./Contact";
import data from "../data/contacts";

const Contacts = () => {
    const [contacts, setContacts] = useState(data);
    const [search, setSearch] = useState("");
    const [male, setMale] = useState(true);
    const [female, setFemale] = useState(true);
    const [nongender, setNongender] = useState(true);
    const [genderContact, setGenderContact] = useState([]);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    function changeCheckMale(e) {
        setMale(e.target.checked);
    }

    function changeCheckFemale(e) {
        setFemale(e.target.checked);
    }

    function changeCheckNongender(e) {
        setNongender(e.target.checked);
    }

    useEffect(() => {
        let filterGender = [];
        data.map((el) => {
            if (el.gender === "male" && male === true) {
                filterGender.push(el);
            } else if (el.gender === "female" && female === true) {
                filterGender.push(el);
            } else if (el.gender === undefined && nongender === true) {
                filterGender.push(el);
            }
        });
        setGenderContact(filterGender);
        setContacts(filterGender);
    }, [male, female, nongender]);

    return (<div className="container">
        <div className="checkbox">
            <input type="checkbox" onChange={changeCheckMale} checked={male}/>
            <span>Ч</span>
            <input
                type="checkbox"
                onChange={changeCheckFemale}
                checked={female}
            ></input>
            <span>Ж</span>
            <input
                type="checkbox"
                onChange={changeCheckNongender}
                checked={nongender}
            />
            <span>Не визначено</span>
        </div>

        <input className="input" onChange={handleChange} placeholder="Search"/>
        {contacts
            .filter((contact) => {
                if (contact.firstName.toLowerCase().includes(search.toLowerCase()) || contact.lastName.toLowerCase().includes(search.toLowerCase()) || contact.phone.toString().includes(search.toString())) {
                    return contact;
                }
            })
            .map((contact) => (<Contact {...contact} key={Math.random()}/>))}
    </div>);
};

export default Contacts;
