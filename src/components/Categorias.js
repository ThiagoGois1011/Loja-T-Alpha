import "./components css/Categorias.css";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineBell } from "react-icons/ai";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { GrSend } from "react-icons/gr";

function Categorias() {
    return (
        <div className="categories-collections">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="categories">
                            <div className="row container-itens">
                                <div className="col-lg-12">
                                    <div className="section-heading">
                                        <div className="line-dec"></div>
                                        <h2>Principais <em>Funcionalidades</em> de serviço</h2>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="item">
                                        <div className="icon">
                                            <BsFillPeopleFill/>
                                        </div>
                                        
                                        <h4>Contas por vendedor</h4>
                                        <div className="icon-button">
                                            <a href="#"><IoIosArrowForward/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="item">
                                        <div className="icon">
                                            <AiOutlineBell/>
                                        </div>
                                        <h4>Anuncios Automáticos</h4>
                                        <div className="icon-button">
                                            <a href="#"><IoIosArrowForward/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="item">
                                        <div className="icon">
                                            <MdOutlineAddShoppingCart/>
                                        </div>
                                        <h4>Gestão de Produtos</h4>
                                        <div className="icon-button">
                                            <a href="#"><IoIosArrowForward/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="item">
                                        <div className="icon">
                                            <GrSend/>
                                        </div>
                                        <h4>Frete Grátis</h4>
                                        <div className="icon-button">
                                            <a href="#"><IoIosArrowForward/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categorias;