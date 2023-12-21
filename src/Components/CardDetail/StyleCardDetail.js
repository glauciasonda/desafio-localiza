import styled from "styled-components";


export const ItemCard = styled.div`
    width: 65%;
    height: 40%;
    margin: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    background-color: white;
    border-radius: 15px;
    
`;

export const Info = styled.div`
    width: 80%;
    height: 70%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-self: start;
    align-items: center;
    line-height: 0px;
    `;

export const BoxData = styled.div`
    width: 100% ;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 30px;
`;    

export const BoxPagamento = styled.div`
    width: 100% ;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 30px;
`;

export const ImgShow = styled.img`
    width: 45%;
    height: 50%;
    border-radius: 10px;

`;

export const Pdata = styled.h4`
  color: #33A4F5;
`;

export const Ptitulo = styled.h3`
  color: black;
`;

export const Plocal = styled.h4`
  color: grey;
`;
