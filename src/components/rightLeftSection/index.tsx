import * as C from "./styles";

export const RightLefttSection = () => {
  return (
    <C.Container>
      <C.leftContent />
      <C.rightContent>
        <div className="leftMain">
          <h1>Stand out to the right audience</h1>
          <p>
            Using a collaborative formula of designers, researchers,
            photograhers, videographers, and copywriters, we'll build and extend
            your brand in digital places.
          </p>
          <button>
            Learn More
            <div className="lineUnder" />
          </button>
        </div>
      </C.rightContent>
    </C.Container>
  );
};
