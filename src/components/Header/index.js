import React from 'react';
import styled from 'styled-components';

import {
  fontFamily
} from '../../constants';
import Section from '../Section';

const HeaderContentContainer = styled.div`
  box-sizing: border-box;
  max-width: 657px;
  background: #FFFFFF;
  border: 10px solid rgba(6, 121, 227, 0.1);
  overflow: visible;
  padding-left: 90px;
  padding-top: 90px;
`;

const HeaderTitle = styled.h1`
  font-family: ${fontFamily};
  font-style: normal;
  font-weight: bold;
  line-height: 1;
  font-size: 68px;
  margin: 0;
  margin-bottom: 16px;
  word-wrap: nowrap;
`;

const HeaderDescription = styled.span`
  display: block;
  font-family: ${fontFamily};
  font-weight: 400;
  line-height: 1.2;
  font-size: 22px;
  color: #0679E3;
  margin-bottom: 60px;
`;

const Header = () => (
  <Section>
    <HeaderContentContainer>
      <HeaderTitle>
        CVPageofNickCherny Developer
      </HeaderTitle>
      <HeaderDescription>
        Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.
      </HeaderDescription>
    </HeaderContentContainer>
  </Section>
);

export default Header;
