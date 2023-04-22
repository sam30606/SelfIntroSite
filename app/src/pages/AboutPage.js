import MainStyle from "../assets/wrapper/MainStyle";
import { VerticalBox } from "../components/VerticalBox";

const AboutPage = () => {
  return (
    <MainStyle>
      <main className="main">
        <div className="main-left"></div>
        <div className="main-mid">
          <VerticalBox></VerticalBox>
        </div>
        <div className="main-right"></div>
      </main>
    </MainStyle>
  );
};

export default AboutPage;
