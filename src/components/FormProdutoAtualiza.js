import { useContext, useEffect, useReducer, useRef } from "react";
import { LojaContext } from "./LojaProvider";
import "./components css/FormProdutoAtualiza.css"
import { buscarProdutos } from "../paginas/PainelCentral";

function FormProdutoAtualiza({ state, setState, setProdutos }) {

    const { token } = useContext(LojaContext);
    const stateRef = useRef(state);
    

    useEffect(() => {
        const form = document.querySelector(".dialog-form-atualiza");
        const nome = document.querySelector("#nomeAtualiza");
        const descricao = document.querySelector("#descricaoAtualiza");
        const preco = document.querySelector("#precoAtualiza");
        const estoque = document.querySelector("#estoqueAtualiza");

        const produto = state[1];
        
        nome.value = produto.nome;
        descricao.value = produto.descricao;
        preco.value = produto.preco;
        estoque.value = produto.estoque;

    }, [state[0]]);

    useEffect(()=>{
        const form = document.querySelector(".dialog-form-atualiza");
        
        form.addEventListener("submit", (event)=>{
            const produto = stateRef.current[1];
            event.preventDefault();
            const nome = document.querySelector("#nomeAtualiza");
        const descricao = document.querySelector("#descricaoAtualiza");
        const preco = document.querySelector("#precoAtualiza");
        const estoque = document.querySelector("#estoqueAtualiza");

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
        

        fetch(`https://interview.t-alpha.com.br/api/products/update-product/${produto.id}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: body
        }).then(data => {
           
            
            if (data.ok) {
               
                buscarProdutos(token, setProdutos);
                setState([false, {}]);
                nome.value = "";
                descricao.value = "";
                preco.value = 0;
                estoque.value = 0;
            }
        })
        });
    }, [])

    return (
        <div className="dialog" style={state[0] ? { display: "flex" } : { display: "none" }}>
            <div className="dialog-overlay"></div>
            <form className="form dialog-form-atualiza">
                <div className="d-flex flex-column">
                    <label htmlFor="nome">Nome</label>
                    <input className="w-75 mt-3" name="nome" id="nomeAtualiza" type="text" />
                </div>
                <div className="d-flex flex-column">
                    <label htmlFor="descricao">Descrição</label>
                    <input className="w-75 mt-3" name="descricao" id="descricaoAtualiza" type="text" />
                </div>
                <div className="d-flex flex-column">
                    <label htmlFor="preco">Preço</label>
                    <input className="w-75 mt-3" name="preco" id="precoAtualiza" type="number" />
                </div>
                <div className="d-flex flex-column">
                    <label htmlFor="estoque">Estoque</label>
                    <input className="w-75 mt-3" name="estoque" id="estoqueAtualiza" type="number" />
                </div>

                <button type="button" className="btn button-cancelar mt-4" onClick={() => setState([false, {}])}>Cancelar</button>
                <button type="submit" className="btn button mt-4">Atualizar</button>
            </form>

        </div>
    );
}


export default FormProdutoAtualiza;