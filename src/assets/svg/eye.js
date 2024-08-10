import eyeImage from "../images/eye.png"
import eyeBlockImage from "../images/eye_block.png"

function EyeIcon({className, hide}) {

    const src = hide?eyeImage:eyeBlockImage
    return(
        <img className={className} src={src} alt="imagem de um olho para representar se a senha ta escondida ou não"/>
    );
}

export default EyeIcon;