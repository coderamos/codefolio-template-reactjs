import React from 'react';

import PropTypes from 'prop-types';

import { ExampleContainer } from '~/components/exampleComponent/styles';

const Example = ({ children }) => {
  return <ExampleContainer>{children}</ExampleContainer>;
};

Example.propTypes = {
  children: PropTypes.string,
};

Example.defaultProps = {
  children: '',
};

export default Example;
