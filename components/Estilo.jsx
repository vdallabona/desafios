export default function Estilo(props) {
    const classeAplicada = props.numero >= 0 ? "azul" : "vermelho"  //são classes CSS globais
    return (
        <div>
            <h1 style={{
                backgroundColor: props.numero >= 0 ? "#2D2" : "#D22",
                color: "#fff",
            }}>
                Texto
            </h1>
            <h2 className={classeAplicada}>Texto #02</h2>
        </div>
    )
}