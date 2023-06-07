import { Link } from "react-router-dom";
import HeaderStyle from "../assets/wrapper/HeaderStyle";
export const Header = () => {
  return (
    <HeaderStyle>
      <header className="header">
        <div className="header-left">
          <div className="logo"></div>
        </div>
        <div className="header-mid">
          <Link to="/about">About</Link>
          <Link to="/sideprojects">Side Projects</Link>
          <Link to="#">CV</Link>
        </div>
        <div className="header-right">
          <span></span>
        </div>
      </header>
    </HeaderStyle>
  );
};
