import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  colorTextLight,
  colorPrimary,
  fontFamily
} from '../../constants';

const TaskListLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colorPrimary};
  padding: 54px;
`;

const TaskListContainer = styled.ul`
  margin: 0;
`;

const ItemTask = styled.li`
  font-family: ${fontFamily};
  font-style: normal;
  font-weight: normal;
  line-height: 28px;
  font-size: 16px;
  color: ${colorTextLight};
`;

const TaskList = ({ items }) => (
  <TaskListLayout>
    <TaskListContainer>
      {items.map(task => (
        <ItemTask>{task}</ItemTask>
      ))}
    </TaskListContainer>
  </TaskListLayout>
);

TaskList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TaskList;
