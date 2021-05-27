import React from 'react';

import tshirtImage from '../../assets/tshirt.png';
import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';

import { Container, Row, Panel, Column, Gallery, Section, Description} from './styles';

function Product() {
  return (
    <Container>
        <Row>
          <a href="#">Compartilhar</a>
          <a href="#">Vender um igual</a>
        </Row>

        <Panel>

          {/* Coluna da esquerda */}
          <Column>
            <Gallery>
              <img alt="T-Shirt" src={tshirtImage} />
            </Gallery>

            <Info />
          </Column>

          {/* Coluna da direita */}
          <Column>
            <ProductAction/>
            <SellerInfo/>

            <WarrantSection />

          </Column>
        </Panel>
    </Container>
  );
};

const WarrantSection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida</p>
        <p className="description">
          Receba o produto ou receba o dinheiro de volta
        </p>
      </span>

      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">
          Sem garantia
        </p>
      </span>
    </div>

    <a href="/">Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descriçãoo</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Pellentesque luctus pharetra tortor. Sed ultrices a massa et vulputate.
      In hac habitasse platea dictumst. Etiam vel leo elementum, ornare lorem 
      vitae, tristique elit. Cras ligula neque, egestas et eleifend quis, 
      egestas non nisi. Cras eget metus urna. Nullam iaculis, quam eu commodo 
      sollicitudin, risus est posuere metus, sit amet posuere magna massa ac est.
      <br/>
      <br/>

    </p>
  </Description>

)

export default Product;