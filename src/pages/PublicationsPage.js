import Post from "../components/Post";
import "../index.css"


const ANAKIN_IMAGE =
  "https://static.wikia.nocookie.net/disney/images/5/50/Profile_-_Anakin_Skywalker.png";
const RAY_IMAGE =
  "https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpeg?region=1%2C318%2C999%2C499&width=960";

function PublicationsPage() {
    return (
      <div className="centeredContainer">
        <Post
          author={{
            name: "Anakin Skywalker ✔️",
            photo: ANAKIN_IMAGE,
            nickname: "@dart_vader",
          }}
          content="WTF?  Who is Ray?  Why she is Skywalker?  Luke...?"
          image={RAY_IMAGE}
          date={" 26 лютого."}
        />
        <Post
          author={{
            name: "Anakin Skywalker ✔️",
            photo: ANAKIN_IMAGE,
            nickname: "@dart_vader",
          }}
          content="WTF?  Who is Ray?  Why she is Skywalker?  Luke...?"
          image={RAY_IMAGE}
          date={" 26 лютого."}
        />
        <Post
          author={{
            name: "Anakin Skywalker ✔️",
            photo: ANAKIN_IMAGE,
            nickname: "@dart_vader",
          }}
          content="WTF?  Who is Ray?  Why she is Skywalker?  Luke...?"
          image={RAY_IMAGE}
          date={" 26 лютого."}
        />
        <Post
          author={{
            name: "Anakin Skywalker ✔️",
            photo: ANAKIN_IMAGE,
            nickname: "@dart_vader",
          }}
          content="WTF?  Who is Ray?  Why she is Skywalker?  Luke...?"
          image={RAY_IMAGE}
          date={" 26 лютого."}
        />
      </div>
    );
}
export default PublicationsPage