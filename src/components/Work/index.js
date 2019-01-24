import React from 'react';
import styled from 'styled-components';
import {
  fontFamily,
  colorTextDark,
  colorTextDarkSecond,
  colorPrimary,
} from '../../constants';

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

const Work = ({
  title,
  date,
  description
}) => (
  <WorkContainer>
    <WorkTitle>{title}</WorkTitle>
    <WorkDateArticle>{date}</WorkDateArticle>
    <WorkDescriptionList>
      {description.map(item => {
        const [article, label] = item.split(':');
        return (
          <WorkDescriptionItem key={item}>
            <b>{article}: </b>
            <span>{label}</span>
          </WorkDescriptionItem>
        );
      })}
    </WorkDescriptionList>
  </WorkContainer>
);

export default Work;
