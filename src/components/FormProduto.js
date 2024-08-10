import { useContext, useEffect } from "react";
import { LojaContext } from "./LojaProvider";
import "./components css/FormProduto.css"
import { buscarProdutos } from "../paginas/PainelCentral";

function FormProduto({ state, setState, setProdutos }) {

    const { token } = useContext(LojaContext);


    useEffect(() => {
        const form = document.querySelector(".form");
        
        
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            
            const nome = document.querySelector("#nome");
            const descricao = document.querySelector("#descricao");
            const preco = document.querySelector("#preco");
            const estoque = document.querySelector("#estoque");

            /*
                name: 'TV 55" 4K Full HD',
                description: 'Televisão com cores vibrantes',
                price: 2999.99,
                stock: 10
            */

            const body = JSON.stringify({
                name: nome.value,
                description: descricao.value,
                price: parseInt(preco.value),
                stock: parseInt(estoque.value)
            });

            
            fetch('https://interview.t-alpha.com.br/api/products/create-product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: body
            }).then(data => data.json())
                .then(dados => {

                    if (dados.success) {
                        buscarProdutos(token, setProdutos);
                        setState(false);
                        nome.value = "";
                        descricao.value = "";
                        preco.value = "";
                        estoque.value = "";
                    }
                });
        });
    }, []);

    return (
        <div className="dialog" style={state ? { display: "flex" } : { display: "none" }}>
            <div className="dialog-overlay"></div>
            <form className="form dialog-form">
                <div className="d-flex flex-column">
                    <label htmlFor="nome">Nome</label>
                    <input className="w-75 mt-3" name="nome" id="nome" type="text" />
                </div>
                <div className="d-flex flex-column">
                    <label htmlFor="descricao">Descrição</label>
                    <input className="w-75 mt-3" name="descricao" id="descricao" type="text" />
                </div>
                <div className="d-flex flex-column">
                    <label htmlFor="preco">Preço</label>
                    <input className="w-75 mt-3" name="preco" id="preco" type="number" />
                </div>
                <div className="d-flex flex-column">
                    <label htmlFor="estoque">Estoque</label>
                    <input className="w-75 mt-3" name="estoque" id="estoque" type="number" />
                </div>

                <button type="button" className="btn button-cancelar mt-4" onClick={() => setState(false)}>Cancelar</button>
                <button type="submit" className="btn button mt-4">Criar</button>
            </form>

        </div>
    );
}

export default FormProduto;