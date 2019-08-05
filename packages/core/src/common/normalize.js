import objectify from './objectify';

const defaultOptions = {
  handleKeys: k => k,
};

export default function normalize(obj, options) {
  const { handleKeys } = Object.assign(defaultOptions, options);
  return Object
    .entries(obj)
    .reduce((memo, pair) => objectify(memo, pair, handleKeys), {});
}
