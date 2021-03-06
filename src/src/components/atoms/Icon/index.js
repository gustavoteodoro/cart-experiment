import React, { Component } from 'react';
import { string, number } from 'prop-types';
import iconPaths from './selection.json';

function getPath(iconName) {
  const icon = iconPaths.icons.find(i => i.properties.name === iconName);

  if (icon) {
    return icon.icon.paths.join(' ');
  }

  return '';
}

class Icon extends Component {
  render() {
    const {
      icon,
      size,
      color,
    } = this.props;
    return (
      <svg width={size} height={size} viewBox="0 0 1024 1024">
        <path style={{ fill: color, transition: 'fill .2s ease' }} d={getPath(icon)} />
      </svg>
    );
  }
}

Icon.propTypes = {
  icon: string.isRequired,
  size: number,
  color: string,
};

Icon.defaultProps = {
  size: 16,
  color: 'currentColor',
};

export default Icon;
