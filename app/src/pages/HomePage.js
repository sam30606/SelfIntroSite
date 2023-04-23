import { Link } from "react-router-dom";
import { HomePageStyle } from "../assets/wrapper/HomePageStyle";

export const HomePage = () => {
  return (
    <HomePageStyle>
      <div className="home">
        <div className="content animate__animated animate__shakeY">
          <div className="title">楊詠勝</div>
          <p>記録自己的網站</p>
          <Link to="/about" class="nes-btn is-success enter">
            進入
          </Link>
        </div>
      </div>
    </HomePageStyle>
  );
};
