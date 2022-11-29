import "./styles.css";
import { useEffect, useState } from "react";
import * as objectService from "../../services/object-service";
import CardBriefing from "../CardBriefing";
import { ObjectDTO } from "../../models/object";

export default function CardFind() {
  const [user, setUser] = useState("");
  const [test, setTest] = useState(' ');

  function handleUserChange(event: any) {
    setUser(event.target.value);
  }

  function handleBtnOnClick(event: any) {
    event.preventDefault();
    console.log(user)
    setTest(user);
  }

  const [obj, setObj] = useState<ObjectDTO>();

  useEffect(() => {
    objectService
      .findyByUser(test)
      .then((response) => {
        console.log(response.data);
        setObj(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, [test]);

  return (
    <>
      <form onClick={handleBtnOnClick}>
        <div className="cgapi-container-card">
          <div className="cgapi-content-card">
            <div>
              <h2>Encontre um perfil Github</h2>
              <input
                name="user"
                value={user}
                type="text"
                placeholder="Usuário Github"
                onChange={handleUserChange}
              />
              <button type="submit">Encontrar</button>
            </div>
          </div>
        </div>
      </form>

      {obj ? <CardBriefing object={obj} /> : <h2>Erro ao buscar o usuário</h2>}
    </>
  );
}
