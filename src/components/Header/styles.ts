import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #FF69B4;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 48px;
      color: #3a3a3a;
      margin-right: 10%;
    }

    nav {
      a {
        display: flex;
     align-items: center;
     text-decoration: none;
     color: #a8a8b3;

     &:hover {
         color: #666;
     }
     svg {
         margin-right: 4px;
     }
      }
    }
    img {
      border-radius: 50%;
      width: 150px;
      height: 150px;
    }
  }
`;

