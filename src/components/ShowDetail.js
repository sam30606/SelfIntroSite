import ShowDetailStyle from "../assets/wrapper/ShowDetailStyle";

export const ShowDetail = (props) => {
  return props.trigger ? (
    <ShowDetailStyle>
      <div className="shadow">
        <div className="showDetail">
          <i
            className="nes-pointer nes-icon close is-small"
            onClick={() => props.setButtonPop(false)}
          ></i>
          <div className="title">My Popup</div>
          <p>This is my time triggered popup.</p>
          <a className="nes-btn" href="https://www.google.com">
            前往頁面
          </a>
        </div>
      </div>
    </ShowDetailStyle>
  ) : (
    ""
  );
};
