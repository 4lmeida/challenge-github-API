import "./styles.css";
import Button from "../Button";
import { useState } from "react";

export default function CardFind() {
  const [user, setUser] = useState({
    user: "",
  });

  function handleUserChange(event: any) {
    setUser({ ...user, user: event.target.value });
  }

  function handleFormSubmit(event : any) {
    event.preventDeafult();
    

  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="cgapi-container-card">
        <div className="cgapi-content-card">
          <div>
            <h2>Encontre um perfil Github</h2>
            <input
              name="user"
              value={user.user}
              type="text"
              placeholder="Usuário Github"
              onChange={handleUserChange}
            />
            <Button text="Encontrar" />
          </div>
        </div>
      </div>
    </form>
  );
}
