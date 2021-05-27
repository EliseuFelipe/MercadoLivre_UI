import styled from "styled-components";

import {GrMapLocation} from "react-icons/gr";
import {GiUnlitBomb} from "react-icons/gi";
import {BsSearch} from "react-icons/bs";

export const Container = styled.div`
  background: var(--color-header);
  border-bottom: 1px solid var(--color-border);

  display: flex;
  flex-direction: column;

  justify-content: space-between;

`;

export const SuperiorBar = styled.div`
  display: flex;
  justify-content: space-between;
  
`;

export const InferiorBar = styled.div`
  margin-top: 30px;
  display: flex;
`;

export const ShopIcon = styled.div`
  //margin: 40px ;
  >img{
    margin-left: 50px;
    width: 93px;
    height: 75px;
    vertical-align: middle;
  }
`;



export const SearchIcon = styled(BsSearch)``;

export const PromotionCard = styled.div`
  display: flex;
`;

export const PromotionIcon = styled(GiUnlitBomb)`
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 5px;
  height: 28px;
  width: 28px;
`;

export const PromotionMessage = styled.div`
  margin-right: 35px;
  margin-top: auto;
  margin-bottom: auto;
  font-weight: 300;
`;

export const CepCard = styled.div`
  display: flex;
  cursor: pointer;

  justify-content: space-between;
  margin-left: 50px;
`;

export const CepIcon = styled(GrMapLocation)``;

export const CepMessage = styled.div`
  margin-left: 10px;
  font-weight: 300;

`;

export const ColumnCard = styled.div`
  justify-content: space-between;

  margin-left: 200px;
  padding-bottom: 15px;

  >a{

    text-decoration: none;

    & + a{
      padding-left: 10px;
      border-left: 1px solid var(--color-border);
      margin-left: 10px;
    }

  }

  
`;

export const InputWrapper = styled.div`
    width: 60%;

    padding-top: 15px;
    
    >input{


      margin-left: 20px;
      margin-right: 40px;

      width: 100%;
      height: 44px;

      padding: 0 10px 0 57px;
      border-radius: 7px;

      color: var(--white);
      background-color: white;
      

      //icone
      ~ svg{
          cursor: pointer;
          position: relative;
          top: -50%;
          left: 34px;
      }
    }

`;
