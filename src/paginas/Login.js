import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LojaContext } from "../components/LojaProvider";
import { IoMdAlert } from "react-icons/io";
import FormButton from "../components/formButton";
import "./paginas css/Login.css"
import InputForm from "../components/inputForm";
import EyeIcon from "../assets/svg/eye";
import LockIcon from "../assets/svg/lock";
import { IoDocument } from "react-icons/io5";
import ativaBalao from "../components/AtivaBalao";

function Login(){

    const navigate = useNavigate();
    const {setToken} = useContext(LojaContext);
    
    useEffect(()=>{
        const form = document.querySelector(".form-login");
        

        form.addEventListener("submit" , (event)=>{
            event.preventDefault();

            const cpf = document.querySelector(".input-container-input--cpf");
            const senha = document.querySelector(".input-container-input--senha");

            /*
                taxNumber: '12345678900',
                password: '123456'
            */ 

            const body = JSON.stringify({
                taxNumber: cpf.value,
                password: senha.value
            });

            fetch('https://interview.t-alpha.com.br/api/auth/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: body
              }).then(data =>data.json())
              .then(data =>{
                if(data.success){
                    setToken(data.data.token);
                    navigate("/Loja-T-Alpha/painel");
                }else{
                    ativaBalao("Email ou senha errada", ".form-login-message");
                }
              });

        });
    }, []);

    return(
        <form className="form-login">
            <InputForm type={"number"} customClass={"cpf"} placeholder={"Digite o seu CPF"} 
            label={"CPF"} Icon={IoDocument} password={false}></InputForm>
            
            <InputForm type={"password"} customClass={"senha"} placeholder={"Digite a sua senha"} 
            label={"Senha"} Icon={LockIcon} password={{tem: true, icon: EyeIcon}}></InputForm>
            <div className="form-login-message-container">
                <span className="form-login-message"><IoMdAlert className="form-login-message-icon"></IoMdAlert></span>
            </div>
            <FormButton conteudo={"Login"} classNameComplement="form-login"></FormButton>

            <a target="_blank" href="https://www.google.com/" className="form-login-link">Forgot Password</a>
        </form>
    );

}


export default Login;