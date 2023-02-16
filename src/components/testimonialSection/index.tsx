import * as C from "./styles";
import EmilyImage from "../../images/image-emily.jpg"
import JennieImage from "../../images/image-jennie.jpg"
import ThomasImage from "../../images/image-thomas.jpg"

export const TestimonialSection = () => {
  return (
    <C.Container>
      <h1>Client Testemunials</h1>
      <C.Testemunials>
        <div className="ClientTestemunialCard">
          <div className="cardHead">
            <img src={EmilyImage} alt="Emily R." />
            <p>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
          </div>
          <div className="cardFooter">
            <h1>Emily R.</h1>
            <p>Marketing Director</p>
          </div>
        </div>
        <div className="ClientTestemunialCard">
          <div className="cardHead">
            <img src={ThomasImage} alt="Thomas S." />
            <p>
              Sunnyside's enthusiasm coupled with their keen interest in our
              brand's success made it a satisfying and enjoyable experience.
            </p>
          </div>
          <div className="cardFooter">
            <h1>Thomas S.</h1>
            <p>Chief Oparating officer</p>
          </div>
        </div>
        <div className="ClientTestemunialCard">
          <div className="cardHead">
            <img src={JennieImage} alt="Jennie F." />
            <p>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
          </div>
          <div className="cardFooter">
            <h1>Jennie F.</h1>
            <p>Business Owner</p>
          </div>
        </div>
      </C.Testemunials>
    </C.Container>
  );
};
