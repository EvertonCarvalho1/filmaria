import React, {useEffect, useState, useCallback}from 'react';
import './home.css';
import api from '../../services/api';
import {Link} from 'react-router-dom';

function App() {

  const [filmes, setFilmes] = useState([]);



  useEffect(() => {


    async function loadFilmes(){

      const response = await api.get('/r-api/?api=filmes');
      

      setFilmes(response.data);
  
    };

    loadFilmes();


  }, []);





  return (

    <div className='container'>

      <div className='lista-filmes'>

        {filmes.map((filme) =>{ 

          return (
            <article key={filme.id}>
              <strong>{filme.nome}</strong>
              <img src={filme.foto} alt={filme.nome} />
              <Link to={`/filmes/${filme.id}`}>Acessar</Link>
            </article>
          )


        })}
      </div>
    </div>
  );
}

export default App;
