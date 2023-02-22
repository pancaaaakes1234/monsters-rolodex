import "./card.styles.css";
import { Monster } from "../../App";

type CardProps = {
  monster: Monster;
};

const Card = (props: CardProps) => {
  const { id, name, email } = props.monster;

  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};
export default Card;
