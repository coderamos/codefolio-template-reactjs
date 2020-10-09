import React from 'react';

import PropTypes from 'prop-types';

import * as s from './styles';

const Heading = ({ children }) => {
  return <s.Container>{children}</s.Container>;
};

Heading.propTypes = {
  children: PropTypes.string,
};

Heading.defaultProps = {
  children: '',
};

export default Heading;
