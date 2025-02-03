import { Monster } from "../../config/types/monsterTypes";
import NoIcon from "../../assets/images/unknown-icon.png";

interface CardProps{
  key: number;
  item: Monster;
}

export default function Card({ item }: CardProps){
    return(
    <div>
      <h1>{item.name}</h1> 
      <img src={item.img}/>
      <img src={item.icon === "unknown" ? NoIcon : item.icon}/>
    </div>
  );
}