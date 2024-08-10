import { useContext } from "react";
import { buscarProdutos } from "../paginas/PainelCentral";
import { LojaContext } from "./LojaProvider";


function ItemProduto({nome, descricao, preco, estoque, setProduto, id, setDialog}){

    const {token} = useContext(LojaContext);

    return(
        <tr>
            <td>{nome}</td>
            <td>{descricao}</td>
            <td>{preco}</td>
            <td>{estoque}</td>
            <td>
                <button className="btn btn-primary" onClick={()=>{
                   setDialog([true, {nome, descricao, preco, estoque, id}]);
                }}>Editar</button>
            </td>
            <td>
                <button className="btn btn-danger" onClick={()=>{
                   
                    fetch(`https://interview.t-alpha.com.br/api/products/delete-product/${id}`, {
                        method: 'DELETE',
                        headers: {
                            Authorization: `Bearer ${token}`,
                        }
                    }).then(data => {
    
                        if(!data.ok){
                            return data.json();
                        }else{
                            buscarProdutos(token, setProduto);
                        }
                    })
                    .then(dados => {
                        
                        if(dados){
                            alert(dados.message);
                        }
                    });

                }}>Deletar</button>
            </td>
        </tr>
    );


}

export default ItemProduto;