import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import {
  colorPrimary
} from '../../constants';

const FooterLayout = styled.footer`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;
  background: ${colorPrimary};
  min-height: 30vh;
  padding: 60px 16px;
  margin-top: 60px;
`;

const FooterTitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  color: #fff;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30%;
  margin: 0 16px;
`;

const FooterText = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 100;
  color: #fff;
`;

const Footer = () => (
  <FooterLayout>
    <FooterSection>
      <FooterTitle>EDUCATION AND TRAINING</FooterTitle>
      <FooterText>
      Institution: Belarusian State University of Informatics and Radioelectronics, Minsk (Belarus) <br/>
      Dates: 01/04/2015–30/10/2016 <br/>
      Qualification: Web Designer / Web Developer <br/>
      <br/>
      Institution: Institute of Modern Knowledge, Minsk (Belarus) <br/>
      Dates: 01/09/2007–01/06/2012 <br/>
      Qualification: Sound Engineer <br/>

      </FooterText>
    </FooterSection>
    <FooterSection>
      <FooterTitle>PERSONAL SKILLS</FooterTitle>
      <FooterText>
        Mother tongue: Russian <br/>
        Other language: English (pre-intermediate)
      </FooterText>
    </FooterSection>
  </FooterLayout>
);


export default Footer;
