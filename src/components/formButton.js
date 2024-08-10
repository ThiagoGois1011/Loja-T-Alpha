import "./components css/formButton.css";


function FormButton({conteudo, classNameComplement}) {
    return(
        <button className={`${classNameComplement}__button`} type="submit">{conteudo}</button>
    );
}

export default FormButton;

