import { useEffect, useState } from "react";
import "./components css/inputForm.css"

function InputForm({type, customClass, placeholder, label, Icon, password}) {
    const IconPassword = password.icon;
    let maxLengthValue = "";
    const [typeInput, setTypeInput] = useState(type);

    switch (type) {
        case "email":{
            maxLengthValue = "60"
            break;
        }
        case "password":{
            maxLengthValue = "20"
            break;
        }
        case "tel":{
            maxLengthValue = "15"
            break;
        }
        default: 
        break;
        
    }
    const [hide, setHide] = useState(true);
    useEffect(()=>{
        if(password.tem){
            const eyeIcon = document.querySelector(".input-main-icon-content--eye");

            const handleClick = ()=>{
                if(hide){
                    setTypeInput("text");
                }else{
                    
                    setTypeInput("password");
                }

                setHide((state)=>{              
                    return !state;
                });
        
            }

            eyeIcon.addEventListener("click", handleClick);

            return ()=>{
                eyeIcon.removeEventListener("click", handleClick)
            };
        }

    }, [hide]);
    return(
        <div className="input-main">
            <div className="input-main-icon-container">
                <Icon className="input-main-icon-content"></Icon>
            </div>
            <div className="input-container">
                <label className="input-container-label" htmlFor={type}>{label}</label>
                <input maxLength={maxLengthValue.length > 0?maxLengthValue:null} id={type} autoComplete={password.tem?"off":"on"} name={type} className={customClass != null? `input-container-input input-container-input--${customClass}`:"input-container-input"} type={typeInput} required placeholder={placeholder}/>
            </div>
            {password.tem?
            <div className="input-main-icon-container">
                <IconPassword className={`input-main-icon-content input-main-icon-content--eye`} hide={hide}></IconPassword>
            </div>
            :<></>}
        </div>
    );
    
}

export default InputForm;