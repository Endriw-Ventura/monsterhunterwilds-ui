import { Link } from "react-router-dom";

export default function NotFound(){
    return(<div>
        <h1>
            Poxa, parece que você se perdeu!
        </h1>
        <Link to="/">voltar para a página inicial.</Link>
    </div>);
}