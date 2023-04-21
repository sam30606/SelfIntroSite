import MainStyle from "../assets/wrapper/MainStyle";
import { Card } from "../components/Card";
const AboutPage = () => {
  return (
    <MainStyle>
      <main className="main">
        <div className="main-left"></div>
        <div className="main-mid">
          <div className="card-center">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
        <div className="main-right"></div>
      </main>
    </MainStyle>
  );
};

export default AboutPage;
