import React from 'react'
import { createGlobalStyle } from 'styled-components';
import { graphql } from 'gatsby';

import Header from '../components/Header';
import Section from '../components/Section';
import { Work } from '../components/Work';
import Footer from '../components/Footer';
import { fontFamily } from '../constants';

const SUMMARY_DATA = [
  '3+ years of experience in Web-Development',
  'Strong knowledge of Browser/Node.js',
  'Good knowledge in web technologies HTML/CSS/JavaScript(es6/TypeScript)',
  'Strong knowledge of build web-application',
  'Experience in development web-interface',
];

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: ${fontFamily};
  }

  body {
    margin: 0;
  }
`;

const IndexPage = ({ data }) => (
  <>
    <GlobalStyles />
    <main>
      <Header />
      {data.allMarkdownRemark.edges.map(({ node: { id, ...props } }) => <Work key={id} data={props} />)}
      <Footer {... { data }} />
    </main>
  </>
);

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: fileAbsolutePath, order:DESC }) {
      edges {
        node {
          id
          htmlAst
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`;

export default IndexPage
