import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './favoritos.css';
import { toast } from 'react-toastify';



export default function Favoritos() {

    const [favoritos, setFavoritos] = useState([]);

 
    useEffect(() => {

        const minhaLista = localStorage.getItem('filmes');

    

        setFavoritos(JSON.parse(minhaLista) || []);

    }, []);

    function handleDelete (id) {

        let filtroFilmes = favoritos.filter((favorito) => {
            return (favorito.id !== id)
  
        });

        setFavoritos(filtroFilmes);

        localStorage.setItem('filmes', JSON.stringify(filtroFilmes));
        toast.success('Filme excluído com sucesso');
  
        
    };


    
    return(
        <div className='pagina-favoritos'>
            
            <h1>Meus Filmes</h1>

            {favoritos.length === 0 && <span>Você não possui nenhum filme salvo 😢 </span>}



            <ul>
               {favoritos.map((favorito) => {
                   return(
                       <li key={favorito.id}>
                           <span>{favorito.nome}</span>

                           <div>
                            <Link to={`/filmes/${favorito.id}`}>Ver detalhes</Link>
                            <button onClick={() => handleDelete(favorito.id)}>Excluir</button>
                        
                           </div>
                           
                        </li>
                   )
               })} 
            </ul>
        </div>

    )
};




