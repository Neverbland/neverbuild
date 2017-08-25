import React from 'react';
import PropTypes from 'prop-types';

class SVG extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    glyph: PropTypes.shape({
      id: PropTypes.string,
      viewBox: PropTypes.string,
      url: PropTypes.string,
      toString: PropTypes.func,
    }).isRequired,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { className, glyph } = this.props;
    return (
      <svg className={className} viewBox={glyph.viewbox}>
        <use xlinkHref={`#${glyph.id}`} />
      </svg>
    );
  }
}

export default SVG;
