import React from 'react';
import styled from 'styled-components';
import {
  fontFamily,
  colorTextDark,
  colorTextDarkSecond,
  colorPrimary,
} from '../../constants';
import TasksList from '../TaskList';
import Section from '../Section';

const WorkTitle = styled.h2`
  font-family: ${fontFamily};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 32px;
  color: ${colorTextDark};
  margin: 0;
  margin-bottom: 16px;
`;

const WorkDateArticle = styled.h3`
  font-family: ${fontFamily};
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  font-size: 22px;
  color: ${colorTextDark};
  margin: 0;
  margin-bottom: 16px;
`;

const WorkDescriptionList = styled.ul`
  margin: 0;
  padding: 0;
  padding-right: 8px;
  padding-left: 8px;
`;

const WorkDescriptionItem = styled.li`
  font-family: ${fontFamily};
  font-style: normal;
  font-weight: normal;
  line-height: 27px;
  font-size: 16px;
  color: ${colorTextDarkSecond};
  list-style: none;
`;

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  border-right: 6px solid ${colorPrimary};
  height: 400px;
  flex-basis: 657px;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 16px;
`;

const WorkLayout = styled.article`
  width: 100%;
`;

const WorkCenterContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
`;

const WorkerSection = styled(Section)`
  background: #eee;
  margin-bottom: 128px;
`;

const Work = ({
  title,
  date,
  details,
  tasks
}) => (
  <WorkerSection>
    <WorkLayout>
      <WorkCenterContainer>
        <WorkContainer>
          <WorkTitle>{title}</WorkTitle>
          <WorkDateArticle>{date}</WorkDateArticle>
          <WorkDescriptionList>
            {details.map(([article, label]) => {
              return (
                <WorkDescriptionItem key={article}>
                  <b>{article}: </b>
                  <span>{label}</span>
                </WorkDescriptionItem>
              );
            })}
          </WorkDescriptionList>
        </WorkContainer>
        <TasksList items={tasks} />
      </WorkCenterContainer>
    </WorkLayout>
  </WorkerSection>
);

export default Work;
