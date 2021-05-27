import React from 'react';

import { Container, 
         Title, 
         LocationIcon, 
         ReputationCard, 
         ReputationThermometer,
         ReputationRow, 
         SupportIcon, 
         CLockIcon,  
         More,
         LocationCard
          } from './styles';

const SellerInfo: React.FC = () => {
  return (
    <Container>
        <Title>Informações sobre o vendedor</Title>
        
        <LocationCard>
          <LocationIcon/>
            <div>
              <p>Localização</p>
              <a>João Pessoa, Paraíba</a>
            </div>
        </LocationCard>

        <ReputationCard>
          <ReputationThermometer>
            <li />
            <li />
            <li />
            <li />
            <li className="active"/>
          </ReputationThermometer>
        
        
          <ReputationRow>
            <div>
              <strong>561</strong>
              <span>Vendas nos últimos 4 meses</span>
            </div>

            <div>
              <strong>
                <SupportIcon />
              </strong>
              <span>Presta um bom atendimento</span>
            </div>

            <div>
              <strong>
                <CLockIcon />
              </strong>
              <span>Entrega os produtos dentro do prazo</span>
            </div>

          </ReputationRow>

        </ReputationCard >

        <More href="/">Saiba mais sobre o vendedor</More>
    </Container>
  );
};

export default SellerInfo;