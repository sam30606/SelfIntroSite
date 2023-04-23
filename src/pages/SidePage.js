import MainStyle from "../assets/wrapper/MainStyle";
import { CardCenter } from "../components/CardCenter";
export const SidePage = () => {
  return (
    <MainStyle>
      <main className="main">
        <div className="main-left"></div>
        <div className="main-mid">
          <CardCenter></CardCenter>
        </div>
        <div className="main-right"></div>
      </main>
    </MainStyle>
  );
};
