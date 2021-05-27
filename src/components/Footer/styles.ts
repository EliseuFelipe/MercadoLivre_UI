import styled from "styled-components";

import { AiFillFacebook } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

export const Container = styled.div`
  width: 100%;
  height: 180px;
  background: var(--color-footer);
  border-top: 1px solid var(--color-border);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin-top: 30px;

  >a{
    font-size: 30px;
    font-weight: 300;
  }
`;

export const FacebookIcon = styled(AiFillFacebook)`
  height: 58px;
  width: 58px;
  cursor: pointer;
`;

export const WhatsappIcon = styled(IoLogoWhatsapp)`
  height: 58px;
  width: 58px;
  cursor: pointer;
`;