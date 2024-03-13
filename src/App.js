import React from 'react';

import Logodev from './assets/logodev.png';
import Arrow from './assets/arrow.jpeg'


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
  return (
    <Container>
      <Image alt="logo-image" src={Logodev}/>
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome"/>

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade"/>

        <Button>Cadastrar<img alt="seta" src={Arrow}/></Button>

      </ContainerItens>
    </Container>
  );
}

export default App;