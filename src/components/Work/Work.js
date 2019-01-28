import {
  compose,
  withProps
} from 'recompose';
import { get } from 'lodash';

import WorkStateless from './Work.view';

const getDetails = ({ children }) => {
  const items = children
    .find(({ tagName }) => tagName === 'ul').children
    .filter(({ tagName }) => tagName === 'li')
    .map(({ children }) => children[0].value.split(':'));
  
  return items;
};

const enhance = compose(
  withProps(({
    data: {
      frontmatter: {
        title,
        date
      },
      htmlAst
    },
  }) => {
    return {
      title,
      date,
      details: getDetails(htmlAst)
    }
  })
);

export default enhance(WorkStateless);
