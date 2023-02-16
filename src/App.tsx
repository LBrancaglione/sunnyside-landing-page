import { NavBar } from "./components/navbar";
import { LeftRightSection } from "./components/leftRightSection";
import { Body, Header } from "./App.Styles";
import headerArrow from "./images/icon-arrow-down.svg"
import { RightLefttSection } from "./components/rightLeftSection";
import { TextImageSection } from "./components/textImageSection";
import { TestimonialSection } from "./components/testimonialSection";
import { ImageGallery } from "./components/imageGallery";
import { Footer } from "./components/footer";
const App = () => {
  return (
    <Body>
      <Header>
        <NavBar />
        <div className="bannerContent">
          <h1>We Are Creatives</h1>
          <img src={headerArrow} alt="Down Arrow" />
        </div>
      </Header>
      <LeftRightSection />
      <RightLefttSection />
      <TextImageSection />
      <TestimonialSection />
      <ImageGallery />
      <Footer />
    </Body>
  );
};

export default App;
