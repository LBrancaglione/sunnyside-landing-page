import * as C from "./styles";

export const TextImageSection = () => {
  return (
    <C.Container>
      <div className="leftContent">
        <div className="leftText">
          <h1>Graphic Design</h1>
          <p>
            Great designs make you memorable. We deliver artwork that
            underscores your brand messages and captures potential clients'
            attention.
          </p>
        </div>
      </div>
      <div className="rightContent">
        <div className="rightText">
          <h1>Photograph</h1>
          <p>
            Increasy your credibility by getting the most stunning, high-quality
            photos that improves your business image.
          </p>
        </div>
      </div>
    </C.Container>
  );
};
