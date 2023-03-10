import React from "react";

export default function Letra(props) {
    const palavra = props.palavra;
    const [letraHabilitada, setLetraHabilitada] = React.useState(!props.habilitado);
    const [controle, setControle] = React.useState(true)
    if ((props.estadoJogo === "fim-perdido" || props.estadoJogo === "fim-ganho") && controle) {
        setLetraHabilitada(true);
        setControle(false);
    }
    if (props.estadoJogo === "jogando" && !controle) {
        setControle(true);
    }
    const imagem = props.imagem;


    let underline = props.underline;
    function alteraUnderline(letraClick) {
        underline = props.underline.map((letra, i) => palavra[i] === letraClick ? letra = letraClick : letra);
        if (underline.join("") !== props.underline.join("")) {
            props.setUnderline(underline);
        } else {
            if (props.imagem === 5) {
                props.setEstadoJogo("perdido");
            }
            props.setImagem(props.imagem + 1);

        }
    }
    return (
        < button data-test="letter" className={`${!props.habilitado ? "" : (letraHabilitada ? "habilitado" : "")}`
        } disabled={!props.habilitado ? true : !letraHabilitada} onClick={() => {
            setLetraHabilitada(false);
            alteraUnderline(props.letra);
            if (underline.join(" ") === palavra.join(" ")) {
                props.setEstadoJogo("ganho");
            }
        }}>
            <p>
                {props.letra.toUpperCase()}
            </p>
        </ button>
    )
}


