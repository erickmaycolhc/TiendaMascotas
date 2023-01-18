import TaskLayout from "../components/layout/TaskLayouts";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from 'axios';
import { functions } from "../utils";

export default function Home() {
  // const router = useRouter();
  const [task, setTask] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const urlApi = process.env.API_URL || 'http://localhost:3000/api/mascota';
      const { data } = await axios.get(urlApi);
      
      console.log("data ==> ", data)

      setTask(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TaskLayout>
        <div className="center">
          <h1>JURASSIC DOGE</h1>
          <div className="encapsulado">
            {task !== undefined ? (
              task.map((element) => {
                const { id, imagen, name, description, precio, descuento } = element;
                return (
                  <div className="succes-dino" key={id}>
                    <Link href={"/dog/" + id} className="click">
                      {/* (element + 1) */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 48 48"
                        xmlSpace="preserve"
                        height="48"
                        width="48"
                      >
                        <path d="M10 13.5q1.458 0 2.479-1.021Q13.5 11.458 13.5 10q0-1.458-1.021-2.479Q11.458 6.5 10 6.5q-1.458 0-2.479 1.021Q6.5 8.542 6.5 10q0 1.458 1.021 2.479Q8.542 13.5 10 13.5Zm0-1.5q-.833 0-1.417-.583Q8 10.833 8 10q0-.833.583-1.417Q9.167 8 10 8q.833 0 1.417.583Q12 9.167 12 10q0 .833-.583 1.417Q10.833 12 10 12Zm0 4q-2.979 0-5.417-1.635Q2.146 12.729 1 10q1.146-2.729 3.583-4.365Q7.021 4 10 4q2.979 0 5.417 1.635Q17.854 7.271 19 10q-1.146 2.729-3.583 4.365Q12.979 16 10 16Zm0-6Zm0 4.5q2.333 0 4.312-1.208 1.98-1.209 3.042-3.292-1.062-2.083-3.042-3.292Q12.333 5.5 10 5.5T5.688 6.708Q3.708 7.917 2.646 10q1.062 2.083 3.042 3.292Q7.667 14.5 10 14.5Z" />
                      </svg>
                      <div className="img-do1">
                        <img src={functions.pathImg(imagen)} alt="" className="dino-1" />

                        <div className="text-dino">
                          <h1>{name}</h1>
                          <p>{description}</p>
                        </div>

                        <div className="precio">
                          <div className="precio-1">
                            <sup>S/</sup>
                            <span>{precio}</span>
                            <sup>.90</sup>
                          </div>
                          <div className="discount-offer">{descuento}</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })
            ) : (
              <p>No se encontraron resultados</p>
            )}
          </div>
        </div>
      </TaskLayout>
    </>
  );
}
