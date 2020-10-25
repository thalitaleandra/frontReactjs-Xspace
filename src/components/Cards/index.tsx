import React from 'react';
import { CardContainer, Card } from './styles';
import { Link } from 'react-router-dom';


const Cards: React.FC = () => {
  return (
    <CardContainer>
      <Card>
        <header>
          <strong >Crie na SpaceX agora!</strong>
        </header>
      </Card>
      <Link to="/news">
        <Card>
          <header>
            <strong >Crie noticias clicando aqui!</strong>
          </header>
        </Card>
      </Link>
      <Card>
        <header>
          <strong >Notícias em primeira mão!</strong>
        </header>
      </Card>
    </CardContainer>
  )
}

export default Cards;
