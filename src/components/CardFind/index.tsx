import "./styles.css";
import Button from "../Button";

export default function CardFind() {
  return (
    <div className="cgapi-container-card">
      <div className="cgapi-content-card">
        <div>
          <h2>Encontre um perfil Github</h2>
          <input type="text" placeholder="Usuário Github" />
          <Button text="Encontrar" />
        </div>
      </div>
    </div>
  );
}
