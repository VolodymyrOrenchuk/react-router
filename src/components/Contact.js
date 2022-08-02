import {Link} from "react-router-dom";

const Contact = ({firstName, lastName, phone, gender, id, match}) => {


    function imgGender(gender) {
        if (gender === "male") {
            return <div className="male"></div>;
        } else if (gender === "female") {
            return <div className="female"></div>;
        } else {
            return <div className="nongender"></div>;
        }
    }

    return (<div className="box">
        <div className="contact">
            <Link className="profile-label" to={`/contacts/${id}`}>
                <h1>
                    {firstName + " " + lastName}
                </h1>
                <div></div>
                <h2 style={{display: "flex"}}>
                    {phone}
                    <div className="phone-icon"></div>
                </h2>
            </Link>
            <div className="profile-image">
                <div className="gender">{imgGender(gender)}</div>
                <h3>{gender}</h3>
            </div>
        </div>
    </div>);
};

export default Contact;
