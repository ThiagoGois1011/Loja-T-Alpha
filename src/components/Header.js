import "./components css/Header.css"
import logo from "../assets/images/logo.png"
import { useEffect, useState } from "react";
import slideToggle from "./SlideToogle";
import { Link } from "react-router-dom";

function Header() {
    const [menuAtivado, setMenuAtivado] = useState(false);

    window.onresize = ()=>{
        const tamanho = window.innerWidth;
        const navegacao = document.querySelector(".header-area .nav");
        
        if(tamanho > 992){
          navegacao.style.display = "inline-flex";
          if(menuAtivado == true){
            setMenuAtivado(false);
          }
        }else{
            if(navegacao.style.display == "inline-flex"){
                navegacao.style.display = "none";
            }
          
        }
      };

    useEffect(()=>{
        const menu = document.querySelector(".menu-trigger");
        const login = document.querySelector(".button-login");
        const navegacao = document.querySelector(".header-area .nav");

        
        menu.addEventListener("click" , ()=>{
            setMenuAtivado(valor => !valor);
            slideToggle(navegacao, 200);
        });

        login.addEventListener("click" , ()=>{
            window.onresize = null;
            document.onscroll = null;
        });

    }, []);


    return(
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <Link to={"/"} className="logo">
                                <img src={logo} alt="logo da empresa"/>
                            </Link>
                                
                            <ul className="nav">
                                <li><Link to={"/"} className="active">Home</Link></li>
                                <li><Link to={"/login"} className="button-login">Login</Link></li>
                            </ul>   
                            {menuAtivado? <a className='menu-trigger active'><span>Menu</span></a>: <a className='menu-trigger'><span>Menu</span></a>}
                                
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header