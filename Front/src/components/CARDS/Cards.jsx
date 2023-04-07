import Card from "../CARD/Card";
import style from "./Cards.module.css";
import { useSelector } from "react-redux";



function Cards({ characters, onClose }) {
  //  const allCharacters = useSelector(state => state.allCharacters)
  //  console.log(allCharacters);
  //  const favorites = useSelector(state => state.myFavorites);
  //  console.log(favorites);
  return (
    <div className={style.Cards}>
      {characters.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={() => onClose(id)}
          />
        );
      })}
    </div>
  );
}
export default Cards;