import { dark, light } from './themes';

import { get } from '.';

const getStyle = element => property => props => get(props.theme.components[element], property);

export {
  dark,
  getStyle,
  light,
};
