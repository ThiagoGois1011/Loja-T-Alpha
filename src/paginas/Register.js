import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormButton from "../components/formButton";
import "./paginas css/Register.css";
import InputForm from "../components/inputForm";
import EyeIcon from "../assets/svg/eye";
import LockIcon from "../assets/svg/lock";
import MailIcon from "../assets/svg/mail";
import MobileIcon from "../assets/svg/mobileIcon";
import { IoDocument } from "react-icons/io5";
import { MdPerson } from "react-icons/md";
import { IoMdAlert } from "react-icons/io";
import ativaBalao from "../components/AtivaBalao";


function Register() {

    const navigate = useNavigate();

    useEffect(() => {
        const form = document.querySelector(".form-register");


        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const nome = document.querySelector(".input-container-input--nome");
            const email = document.querySelector(".input-container-input--email");
            const tel = document.querySelector(".input-container-input--tel");
            const cpf = document.querySelector(".input-container-input--cpf");
            const senha = document.querySelector(".input-container-input--senha");


            /*
                name: 'João da Silva',
                taxNumber: '12345678900',
                mail: 'joao@gmail.com',
                phone: '11999999999',
                password: '123456'
            */

            const body = JSON.stringify({
                name: nome.value,
                taxNumber: cpf.value ,
                mail: email.value ,
                phone: tel.value,
                password: senha.value
            })


            fetch('https://interview.t-alpha.com.br/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            }).then(data => data.json())
                .then(data => {
                    if (data.success) {
                        navigate("/Loja-T-Alpha/painel");
                    } else {
                        
                        if(Array.isArray(data.message)){
                            ativaBalao(data.message[0], ".form-register-message");
                        }else{
                            ativaBalao(data.message, ".form-register-message");
                        }
                    }

                });

        });
    }, []);

    return (
        <form className="form-register" action="/validacao.php" method="post">

            <InputForm type={"text"} customClass={"nome"} placeholder={"Digite seu nome"}
                label={"Nome"} Icon={MdPerson} password={false}></InputForm>

            <InputForm type={"number"} customClass={"cpf"} placeholder={"Digite o seu CPF"}
                label={"CPF"} Icon={IoDocument} password={false}></InputForm>

            <InputForm type={"email"} customClass={"email"} placeholder={"Digite seu email"}
                label={"Email"} Icon={MailIcon} password={false}></InputForm>

            <InputForm type={"tel"} customClass={"tel"} placeholder={"Digite seu telefone"}
                label={"Telefone"} Icon={MobileIcon} password={{ tem: false, icon: null }}></InputForm>

            <InputForm type={"password"} customClass={"senha"} placeholder={"Digite sua senha"}
                label={"Senha"} Icon={LockIcon} password={{ tem: true, icon: EyeIcon }}></InputForm>

            <div className="form-register-message-container">
                <span className="form-register-message"><IoMdAlert className="form-register-message-icon"></IoMdAlert></span>
            </div>

            <FormButton conteudo={"Criar conta"} classNameComplement="form-register"></FormButton>
        </form>
    );

}

export default Register;