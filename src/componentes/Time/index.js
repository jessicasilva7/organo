import Colaborador from "../Colaborador";
import "./Time.css";

//  time é cada bloco
const Time = (props) => {
    const css = { background: props.corSecundaria }
  return (
  (props.colaboradores.length> 0) && <section className='time' style={css}>
    <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
    <div className="colaboradores">
    {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome}nome={colaborador.nome} cargo={colaborador.cargo}/>)}
    </div>
</section>
  );
};
export default Time;
 