import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import Avatar from "../../assets/avatar"
import Logodev from "../../assets/logodev.png";
import Arrow from "../../assets/arrow.jpeg";


import { 
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
} from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser(){
    const { data: newUser } = await axios.post("http://localhost:3000/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
   });

   setUsers([...users, newUser]);
  }

  return (
    <Container>
      <Image alt="logo-image" src={Logodev}/>
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome"/>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade"/>

        <Button onClick={addNewUser}>
          <img alt="seta" src={Arrow}/> Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default App;