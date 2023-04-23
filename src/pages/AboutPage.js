import MainStyle from "../assets/wrapper/MainStyle";
import { VerticalBox } from "../components/VerticalBox";
import { HorizontalBox } from "../components/HorizontalBox";
import { useAboutContext } from "../context/AboutContext";

export const AboutPage = () => {
  const { datas } = useAboutContext();
  return (
    <MainStyle>
      <main className="main">
        <div className="main-left"></div>
        <div className="main-mid">
          {datas.map((item) => {
            datas.sort((a, b) => a.order_id - b.order_id);
            const { show_type } = item;
            if (show_type === "horizontal") {
              return (
                <>
                  <div className="hl"></div>
                  <HorizontalBox {...item} />
                </>
              );
            } else if (show_type === "vertical") {
              return (
                <>
                  <VerticalBox {...item} />
                </>
              );
            }
          })}
        </div>
        <div className="main-right"></div>
      </main>
    </MainStyle>
  );
};
