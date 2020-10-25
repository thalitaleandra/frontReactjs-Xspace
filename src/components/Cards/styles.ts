import styled from 'styled-components';

interface CardProps {
  card?: boolean;
}



export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  grid-gap: 32px;
  margin-top: -150px;
  a {

        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
`;

export const Card = styled.div`
  background: ${({ card }: CardProps): string => (card ? '#FF872C' : '#fff')};
  padding: 22px 32px;
  margin-bottom: 20px;
  border-radius: 5px;
  color: ${({ card }: CardProps): string => (card ? '#fff' : '#363F5F')};
  transition: transform 0.2s;
      &:hover {
          transform: translateX(10px)
      }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 16px;
    }
  }

  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }
`;

