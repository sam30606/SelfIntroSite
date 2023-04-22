import FooterStyle from "../assets/wrapper/FooterStyle";
const Footer = () => {
  return (
    <FooterStyle>
      <footer className="footer">
        <div className="footer-left">
          © All Rights Reserved.
          <br /> Designed by Yong-Sheng Yang
        </div>
        <div className="footer-mid"></div>
        <div className="footer-right">
          <div className="visit-total">本站瀏覽人數：</div>
          <div className="visit-today">今日瀏覽人數：</div>
        </div>
      </footer>
    </FooterStyle>
  );
};

export default Footer;
