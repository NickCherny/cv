import React from 'react';
import styled from 'styled-components';

import {
  colorPrimary
} from '../../constants';

const FooterLayout = styled.footer`
  background: ${colorPrimary};
  height: 30vh;
`;

const Footer = () => (
  <FooterLayout>
    some content
  </FooterLayout>
);

export default Footer;
