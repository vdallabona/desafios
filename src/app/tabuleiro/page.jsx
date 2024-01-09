import styles from "./tabuleiro.module.css"

export function integracao2 (){
    return (
        <div id={styles.integracao2}/>
    )
}

function gerarTabuleiro(final = 10) {
  const lista = [];

  for (let i = 1; i <= final; i++) {
    const corInicial = i % 2 === 0 ? "black" : "white";
    const row = [];

    for (let coluna = 1; coluna <= final; coluna++) {
      const cor = (coluna % 2 === 0 && corInicial === "black") || (coluna % 2 !== 0 && corInicial === "white")
        ? styles.white
        : styles.black;

      row.push(<div key={coluna} className={cor} />);
    }

    lista.push(<div key={i} style={{ display: 'flex' }}>{row}</div>);
  }

  return lista;
}
  
export default function lista() {
    return (
      <div id={styles.quadrado}>
        {gerarTabuleiro(8)}
      </div>
    )
  }
