import styled from 'styled-components';
import { shade } from 'polished'

export const Form = styled.form`
 margin-top: 40px;
 max-width: 700px;
 display: flex;

 input {
     flex: 1;
     height: 70px;
     padding: 0 24px;
     border: 0;
     border-radius: 5px 0 0 5px;
     color: #3a3a3a;
     border: 2px solid #fff;
     border-right: 0;


 }
 button {
     width: 210px;
     height: 70px;
     background: #FF1493;
     border-radius: 0px 5px 5px 0px;
     border: 0;
     color: #fff;
     font-weight: bold;
     transition: background-color 0.2s;

     &:hover {
         background: ${shade(0.2, '#C71585')}
     }
 }

`

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
   h3{
     margin-left: 45px;
     margin-top: 60px;
   }

`;
export const TableContainer = styled.section`
  margin-top: 64px;

  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }


    td {
      padding: 20px 32px;
      border: 0;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;

      button  {
      color: #e83f5b;
      margin-top: 5px;
    }
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;



