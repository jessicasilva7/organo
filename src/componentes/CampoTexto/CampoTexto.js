// criando o formulario, no react ja faz o input e o label juntos
// esse é o INDEX

//aqui faz a transformaçõa do label para printar na tela


import {useState} from 'react'
import "./CampoTexto.css"; // trazendo do css pra cá

const CampoTexto = (props) => {




  //  let valor = "Jessica silva";

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
    
    // paara pegar o valor digitado
  };

  return (
    <div className="campo-texto">

      <label>{props.label}</label>

          <input value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={props.placeholder}
      />
      {/* onChange={aoDigitado} para pegar as informações do formulario */}
    </div>
  );
};
export default CampoTexto;
