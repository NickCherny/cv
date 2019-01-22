import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;


const ListContainer = styled.ul``;

const List = ({ data }) => (
  <ListContainer>
    {data.map((item, i) => (
      <ListItem key={`${item}${i}`}>{item}</ListItem>
    ))}
  </ListContainer>
);

export default List;
