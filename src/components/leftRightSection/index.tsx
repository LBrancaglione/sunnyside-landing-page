import * as C from "./styles";

export const LeftRightSection = () => {
  return (
    <C.Container>
      <C.leftContent>
        <div className="leftMain">
          <h1>Transform Your Brand</h1>
          <p>
            We are a full-service creative agency specializing in helping
            brandings grow fast. Engage your Clients trough compealling visuals
            that do most of the market for you.
          </p>
          <button>Learn More
          <div className="lineUnder"/>
          </button>
        </div>
      </C.leftContent>
      <C.rightContent />
    </C.Container>
  );
};
