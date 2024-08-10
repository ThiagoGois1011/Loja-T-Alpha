import "./paginas css/FormularioComponent.css";
import Seta from "../assets/svg/seta";
import GoogleIcon from "../assets/svg/googleIcon";
import AppleIcon from "../assets/svg/appleIcon";
import TwitterIcon from "../assets/svg/twitterIcon";
import { RiFacebookCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function FormularioContainer({titulo, subtitulo, subtitulo2, subtitulo3, textoDoLink, Form, home}) {  
    return(
        <main className="root-principal">
          <div className="root-principal-overlay"></div>
          <div className="form-container">
            <Seta className="form-container-botao-voltar"></Seta>

            <h1 className="form-container-titulo"> {titulo}</h1>
            <p className="form-container-paragrafo">
                {subtitulo.subtitulo1}
                {subtitulo.pulaLinha && <><br/>{subtitulo.subtitulo2}</>}
            </p>

            <Form></Form>
            <p className="form-container-paragrafo form-container-paragrafo--centralizado">{subtitulo2}</p>

            <div className="plataforma-alternativa">
                <div className="plataforma-alternativa-item">
                    <a className="plataforma-alternativa-link" target="_blank" href="https://www.google.com/"><GoogleIcon className="plataforma-alternativa-icon"></GoogleIcon></a>
                </div>
                <div className="plataforma-alternativa-item">
                    <a className="plataforma-alternativa-link" target="_blank" href="https://www.facebook.com/"><RiFacebookCircleFill className="plataforma-alternativa-icon plataforma-alternativa-icon--facebook"></RiFacebookCircleFill></a>
                </div>
                <div className="plataforma-alternativa-item">
                    <a className="plataforma-alternativa-link" target="_blank" href="https://www.apple.com/"><AppleIcon className="plataforma-alternativa-icon"></AppleIcon></a>
                </div>
                <div className="plataforma-alternativa-item">
                    <a className="plataforma-alternativa-link" target="_blank" href="https://www.twitter.com/"><TwitterIcon className="plataforma-alternativa-icon plataforma-alternativa-icon--twitter"></TwitterIcon></a>
                </div>
            </div>

            <p className="form-container-paragrafo form-container-paragrafo--centralizado">{subtitulo3}<Link className="form-container-link--hightlight" to={home?"/Loja-T-Alpha/register":"/Loja-T-Alpha/login"}>{textoDoLink}</Link></p>
        </div>
        </main>
    );
}

export default FormularioContainer;