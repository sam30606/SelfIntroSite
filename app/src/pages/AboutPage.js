import MainStyle from "../assets/wrapper/MainStyle";
import { VerticalBox } from "../components/VerticalBox";
import { HorizontalBox } from "../components/HorizontalBox";

const AboutPage = () => {
  return (
    <MainStyle>
      <main className="main">
        <div className="main-left"></div>
        <div className="main-mid">
          <VerticalBox></VerticalBox>
          <div className="hl"></div>
          <HorizontalBox></HorizontalBox>
          <HorizontalBox></HorizontalBox>
          <HorizontalBox></HorizontalBox>
        </div>
        <div className="main-right"></div>
      </main>
    </MainStyle>
  );
};

export default AboutPage;
