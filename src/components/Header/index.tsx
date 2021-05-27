import React from "react";

import logoImage from '../../assets/logo.png';

import { 
  Container,
  ShopIcon,
  PromotionCard,
  PromotionIcon,
  PromotionMessage,
  CepCard,
  CepIcon,
  CepMessage,
  ColumnCard,
  SuperiorBar,
  InferiorBar,
  SearchIcon,
  InputWrapper
  } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      
      {/*Primeira Linha*/}
      <SuperiorBar>

          <ShopIcon>
            <img alt="Logo" src={logoImage} />
          </ShopIcon>

          <InputWrapper>
                <input type="text" placeholder="Roupas, Eletrônicos, Acessórios"/>
                <SearchIcon />
            </InputWrapper>
          
          <PromotionCard>
            <PromotionIcon />
            <PromotionMessage>As melhores ofertas até R$ 100</PromotionMessage>
          </PromotionCard>

      </SuperiorBar>

      {/*Segunda Linha*/}
      <InferiorBar>
        <CepCard>
          <CepIcon/>
          <CepMessage>Infome seu CEP</CepMessage>
        </CepCard>

        <ColumnCard>
          <a href="/">   Categorias   </a>
          <a href="/">   Oferta do dia   </a>
          <a href="/">   Histórico   </a>
          <a href="/">   Supermecado   </a>
          <a href="/">   Moda   </a>
          <a href="/">   Vender   </a>
          <a href="/">    Contato   </a>
        </ColumnCard> 
      </InferiorBar>



    </Container>
  );
};

export default Header;
