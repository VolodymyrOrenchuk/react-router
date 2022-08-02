import "./Post.css";
import {FaRegComment} from "react-icons/fa";
import {BiRepost} from "react-icons/bi";
import {FcLike} from "react-icons/fc";
import {FiUpload} from "react-icons/fi";

const Post = ({author, content, image, date}) => {
    return (<div className="container">
        <header className="head">
            <div className="header-container">
                <img className="mini-img" src={author.photo} alt=""/>
                <div className="wrapper">
                    <div>
                        <span id="author-name">{author.name}</span>
                        <span id="author-nickname">{author.nickname}</span>
                        <span id="date">{date}</span>
                    </div>
                    <span id="content">{content}</span>
                </div>
            </div>
        </header>
        <main className="main-img">
            <img src={image} alt=""/>
        </main>
        <footer className="footer-icons">
        <span>
          <FaRegComment/>
          <span className="icons">482</span>
        </span>
            <span>
          <BiRepost/>
          <span className="icons">146</span>
        </span>
            <span>
          <FcLike/> <span className="icons">887</span>
        </span>
            <FiUpload/>
        </footer>
    </div>);
};

export default Post;
