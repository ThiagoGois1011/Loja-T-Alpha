import { useContext, useEffect, useState } from "react";
import { LojaContext } from "../components/LojaProvider";
import ItemProduto from "../components/ItemProduto";
import "./paginas css/PainelCentral.css"
import logo from "../assets/images/logo.png"
import { IoReload } from "react-icons/io5";
import FormProduto from "../components/FormProduto";
import FormProdutoAtualiza from "../components/FormProdutoAtualiza";

function Painel() {
    const { token } = useContext(LojaContext);
    const [produtos, setProdutos] = useState([]);
    const [dialog, setDialog] = useState(false);
    const [dialogAtualiza, setDialogAtualiza] = useState([false, {nome: "", descricao: "" , preco: 0, estoque: 0}]);

   useEffect(()=>{
        buscarProdutos(token, setProdutos);

        const reload = document.querySelector(".icon-reload");

        reload.addEventListener("click" , ()=>{
            buscarProdutos(token, setProdutos);
        })
        
   }, []);

    return (
        <div>
            <header className="header ">
                <div className="container">
                    <img src={logo} alt="logo da empresa"/>
                </div>
            </header>
            <main className="container main-container p-5 ">
                <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        <h1>Todos os produtos</h1>
                        <div className="icon-reload h3">
                            <IoReload />
                        </div>
                    </div>
                    <button className="btn button" onClick={()=>{setDialog(true)}}>Criar produto</button>
                </div>

                <table className=" table table-bordered table-responsible container mt-5">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                            <th>Estoque</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {produtos.length > 0 && produtos.map((produto) =>
                            (<ItemProduto key={produto.id} id={produto.id} nome={produto.name} setDialog={setDialogAtualiza} descricao={produto.description} preco={produto.price} estoque={produto.stock} setProduto={setProdutos} />)
                        )}
                    </tbody>

                </table>
            </main>

            <FormProduto state={dialog} setProdutos={setProdutos} setState={setDialog}/>
            {dialogAtualiza[0]?<FormProdutoAtualiza state={dialogAtualiza} setProdutos={setProdutos} setState={setDialogAtualiza}/>:<></>}
            
        </div>
    );
    
}

export function buscarProdutos(token, setProdutos) {
    fetch('https://interview.t-alpha.com.br/api/products/get-all-products', {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    ).then(data => data.json())
        .then(dados => {
            if (dados.success) {
                setProdutos(dados.data.products);
            } else {
                if(dados.message && dados.message.includes("Unauthorized")){
                    window.location.href = 'https://thiagogois1011.github.io/Loja-T-Alpha/';
                }
            }
        });
}

export default Painel;