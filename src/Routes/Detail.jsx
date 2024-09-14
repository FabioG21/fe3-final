import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDentStates } from "../Components/utils/global.context";



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { state} = useDentStates();
  const [detail, setDetail] = useState({})
  const { id } = useParams();
  const url = 'https://jsonplaceholder.typicode.com/users/' + id;
  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data)
      setDetail(res.data)

    });
  }, []);

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
      <div className={state.theme === 'dark' ? 'detail dark' : 'detail'}>
        <img className="odontologo" src="/images/doctor.jpg" alt="Odontologo" />
        <h3>Detail Dentist id: {detail.id}</h3>
        <h3>Nombre: {detail.name}</h3>
        <h3>Correo: {detail.email}</h3>
        <h3>Telefono: {detail.phone}</h3>
        <h3>Web: {detail.website}</h3>
      </div>
  )
}

export default Detail