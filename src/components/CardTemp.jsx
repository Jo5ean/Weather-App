import Styles from '../Styles/CardTemp.module.css';

function CardTemp ({label, value}){
    return ( <div className={Styles.cardTemp}>
    <label>{label}</label>
    <span>{value}</span>
  </div>
    );
  }

  export default CardTemp;