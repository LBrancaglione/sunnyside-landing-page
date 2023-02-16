import * as C from "./styles";
import FirstImage from '../../images/desktop/image-gallery-milkbottles.jpg'
import SecondImage from '../../images/desktop/image-gallery-orange.jpg'
import ThirdImage from '../../images/desktop/image-gallery-cone.jpg'
import FourthImage from '../../images/desktop/image-gallery-sugarcubes.jpg'


export const ImageGallery = () => {
    return(
        <C.Container>
            <img src={FirstImage} alt="Milk bottle" />
            <img src={SecondImage} alt="Orange" />
            <img src={ThirdImage} alt="Ice Cone" />
            <img src={FourthImage} alt="Sugarcubes" />
        </C.Container>
    )
}