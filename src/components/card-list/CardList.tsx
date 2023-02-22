import "./card-list.styles.css";
import Card from "../card/Card";
import { Monster } from "../../App";

type CardListProps = {
  monsters: Monster[],
};

const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card monster={monster} key={monster.id} />
      ))}
    </div>
  );
};

export default CardList;
