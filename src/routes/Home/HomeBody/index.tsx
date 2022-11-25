import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import "./styles.css";

export default function HomeBody() {
  return (
    <main>
      <section className="pdside40">
        <div className=" cgapi-title">
          <h2>Desafio Github API</h2>
          <h3>DevSuperior - Escola de programação</h3>
        </div>
        <Link to="/search">
          <Button text="Começar" />
        </Link>
      </section>
    </main>
  );
}
