import React from 'react';
import { Link } from 'react-router-dom';
import xSpace from '../../assets/xspace2.gif'
import { Container } from './styles';
import { FiChevronsRight } from 'react-icons/fi'

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={xSpace} alt="Hygia" />
      <h1>Xspace, esse é o seu espaço!</h1>
      <nav>
        <Link to="/news">
          News
          <FiChevronsRight size={20} />
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
