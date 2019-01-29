import {
  compose,
  withProps
} from 'recompose';
import { get } from 'lodash';

import WorkStateless from './Work.view';

const makeTagNameFilter = tag => ({ tagName }) => tagName === tag;
const filterUl = makeTagNameFilter('ul');
const filterLi = makeTagNameFilter('li');
const getValue = ({ children }) => children[0].value;

const parseContent = ({ children }) => {
  const [
    details,
    tasks
  ] = children.filter(filterUl);
  return {
    details: details.children.filter(filterLi).map(item => getValue(item).split(':')),
    tasks: tasks.children.filter(filterLi).map(getValue)
  };
}

const enhance = compose(
  withProps(({
    data: {
      frontmatter: {
        title,
        date
      },
      htmlAst
    },
  }) => ({
    title,
    date,
    ...parseContent(htmlAst)
  }))
);

export default enhance(WorkStateless);
