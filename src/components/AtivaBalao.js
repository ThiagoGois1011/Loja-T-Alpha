function ativaBalao(mensagem, objectClass) {
    
    const mensagemContainer = document.querySelector(objectClass);
    mensagemContainer.innerText = mensagem;
    mensagemContainer.classList.remove("input-container-message--ativo");
    mensagemContainer.classList.remove("input-container-message--desativando");
    mensagemContainer.classList.remove("input-container-message--ativando");

    
    mensagemContainer.classList.add("input-container-message--ativando");

    const tempoAnimacao = 2000;

    setTimeout(() => {
        mensagemContainer.classList.add("input-container-message--ativo");
    }, 10);

    setTimeout(() => {
        mensagemContainer.classList.add("input-container-message--desativando");
        mensagemContainer.classList.remove("input-container-message--ativo");
    }, tempoAnimacao);

    setTimeout(() => {
        mensagemContainer.classList.remove("input-container-message--desativando");
        mensagemContainer.classList.remove("input-container-message--ativando");
        
    }, tempoAnimacao * 1.5);

}

export default ativaBalao;