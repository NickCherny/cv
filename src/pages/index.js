import React from 'react'
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Header from '../components/Header';
import Section from '../components/Section';
import { Work } from '../components/Work';
import ContainerCenter from '../components/ContainerCenter';
import TaskList from '../components/TaskList';

const WorkSectionGrid = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SUMMARY_DATA = [
  '3+ years of experience in Web-Development',
  'Strong knowledge of Browser/Node.js',
  'Good knowledge in web technologies HTML/CSS/JavaScript(es6/TypeScript)',
  'Strong knowledge of build web-application',
  'Experience in development web-interface',
];

const IndexPage = ({ data }) => (
  <main>
    <Header />
    {data.allMarkdownRemark.edges.map(({
      node: { id, ...props }
    }) => (
      <Section key={id}>
        <ContainerCenter>
          <Work data={props} />
        </ContainerCenter>
      </Section>
    ))}
  </main>
);

export const query = graphql`
  query {
    allMarkdownRemark {
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
