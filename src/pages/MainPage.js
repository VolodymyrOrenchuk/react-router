import image from "../img/pic1.jpg"

function MainPage() {
    return (
        <div style={{display: 'flex'}}>
            <img src={image} style={{width: "80%"}} alt="no p"/>
            <span style={{color: "darkblue", fontSize: 40}}>Nice picture</span>
        </div>
    );
}

export default MainPage;
