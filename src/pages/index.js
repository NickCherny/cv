import React from 'react'
import styled from 'styled-components';

import Header from '../components/Header';
import Section from '../components/Section';
import Work from '../components/Work';
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

const IndexPage = () => (
  <main>
    <Header />
    <Section>
      <ContainerCenter>
        <WorkSectionGrid>
          <Work
            title="Web-Developer"
            date="05-March-2018 - Present"
            description={[
              'Company: Senesys',
              'Project: Fitstarter',
              `
              Technical stack and tools: JavaScript(ES6/7),  React.js, Redux.js,
              recompose, reselect, redux-saga, RxJS, lodash, jest, enzyme, next.js, SCSS, Worker(-workers, -socket), css-in-js, webpack/babel, npm/yarn, fetch, HTTP, HTML5, git-flow, EsLint.
              `
            ]}
          />
          <TaskList items={[
            'Performed SSR application with next.js and React/Redux',
            'Make Push Notification for CRM system',
            'Performed UI Components',
            'Moved common code to private npm packages',
            'Created script for published packages to private npm',
            ]}
          />
        </WorkSectionGrid>
      </ContainerCenter>
    </Section>
    <Section>
      <ContainerCenter>
        <WorkSectionGrid>
          <Work
            title="Frontend-developer"
            date="01-February-2017 - 01-February-2018"
            description={[
              'Company: Yondermusic',
              'Project: Yonder-music (web), Yonder-portal-tools',
              'Technical stack and tools: JavaScript(ES6/7), React.js, Redux.js, React-Router@4, SASS/SCSS, Gulp.js/Webpack.js/babel, npm/yarn, fetch, HTTP, HTML, RxJS, Git-flow, EsLint, lodash'
            ]}
          />
          <TaskList items={[
            'Architectural solutions design for SPA application (Flax/Components/Pure/Containers)',
            'Make smart and dumb Components (React.js)',
            'Architectural solutions client store (Redux store)',
            'Development - Router for Application (modal/permissions/auth)',
            'Fetching data from Rest API',
            'Make fence-design and css3 animation'
            ]}
          />
        </WorkSectionGrid>
      </ContainerCenter>
    </Section>
    <Section>
      <ContainerCenter>
        <WorkSectionGrid>
          <Work
            title="Web-Developer"
            date="01-November-2016 - 01-February-2017"
            description={[
              'Company: ООО “Белитсофт”/Smartmatic',
              'Project: Evote',
              'Technical stack and tools: JavaScript(es6), React.js, Flux, SCSS, React-Bootstrap, Gulp.js/Webpack.js, yarn, lodash'
            ]}
          />
          <TaskList items={[
            'Creating animated anchors with requestAnimationFrame',
            'Tuning and optimization of the project builder for server and client Application',
            'Migration project builder from grunt/browserify to webpack@2/gulp.js',
            'Create UI Components with React'
            ]}
          />
        </WorkSectionGrid>
      </ContainerCenter>
    </Section>
    <Section>
      <ContainerCenter>
        <WorkSectionGrid>
          <Work
            title="Frontend-developer"
            date="01-November-2015 - 20-October-2016"
            description={[
              'Company: ООО “Валикс-Вэб',
              'Project: zaochnik, Rmoney',
              'Technical stack and tools: JavaScript, Angular.js(1.6), SCSS/SASS, Foundation.css, Gulp.js, npm, node.js (express.js , request.js), Git'
            ]}
          />
          <TaskList items={[
            'Validate users forms with native js and angular.js',
            'Create directives for search articles, autocomplete',
            'Development application marketing pages',
            'Development of email templates'
            ]}
          />
        </WorkSectionGrid>
      </ContainerCenter>
    </Section>
  </main>
)

export default IndexPage
