import "./components css/Banner.css";
import banner1 from "../assets/images/banner-01.png";


function Banner() {
    return(
        <div className="main-banner">
            <div className="main-banner-overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                        <div className="header-text">
                            <h6>T - Alpha</h6>
                            <h2>Traga sua loja para o mundo virtual</h2>
                            <p>T -Alpha oferece um serviço de excelência para a criação da sua loja no meio virtual, facilitando todo o processo e auxiliando a sua loja a faturar mais com menos despesas.</p>
                        </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 mt-5 mt-lg-0">
                        <div className="container-image">
                            <div className="item">
                            <img src={banner1} alt="foto de um homem com óculos de realidade virtual virado para a esquerda"/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner