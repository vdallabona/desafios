'use client'
import React, { useState } from 'react'
import sortearNumeros from '../../../components/megasena'
import './EstiloMegasena.css'
export default function Apresentar() {
    const [numeros, setNumeros] = useState([]);
    const[valor, setValor] = useState(6)

    function alterarInput(){
      setValor(valor)
  }

    const sortear = () => {
      const numerosSorteados = sortearNumeros(0, 60, valor);
      setNumeros(numerosSorteados);
    };
    return (
      <div style={{textAlign: "center",}}>
        <h1>Mega Sena</h1>
        <div className='divcentral'>{numeros.join(', ')}</div>
        <button onClick={sortear} className="botao">Sortear</button>
        <input type="number" min={6} max={60} value={valor}
        onChange={e => setValor(e.target.value)}/>
        <span>números</span>
      </div>
    );
  }