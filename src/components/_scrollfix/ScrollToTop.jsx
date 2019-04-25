import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import HeaderO from '@O/00-header/HeaderO';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

export default withRouter(ScrollToTop);

ScrollToTop.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }),
  children: PropTypes.oneOfType([
    PropTypes.element, // prettier-ignore
    PropTypes.arrayOf(PropTypes.element)
  ])
};
ScrollToTop.defaultProps = {
  location: { pathname: '/' },
  children: [<HeaderO />]
};
