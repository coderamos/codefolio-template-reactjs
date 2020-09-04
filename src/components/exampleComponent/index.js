import React from 'react';

import PropTypes from 'prop-types';

import * as s from './styles';

const Example = ({ children }) => {
  return <s.ExampleContainer>{children}</s.ExampleContainer>;
};

Example.propTypes = {
  children: PropTypes.string,
};

Example.defaultProps = {
  children: '',
};

export default Example;
