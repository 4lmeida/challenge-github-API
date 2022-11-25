import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardBriefing from "../../../components/CardBriefing";
import CardFind from "../../../components/CardFind";
import { ObjectDTO } from "../../../models/object";
import * as objectService from "../../../services/object-service";

export default function Search() {
  const params = useParams();

  const [obj, setObj] = useState<ObjectDTO>();

  useEffect(() => {
    objectService
      .findyByUser(String(params.users))
      .then((response) => {
        console.log(response.data);
        setObj(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  return (
    <main>
      <section className="pdside90">
        <CardFind />
        {obj ? 
          <CardBriefing object={obj} />
         : 
          <h2>Erro ao buscar o usuário</h2>
        }
      </section>
    </main>
  );
}
