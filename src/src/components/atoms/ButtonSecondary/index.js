import React, { Component } from 'react';
import { string, bool, func } from 'prop-types';
import Icon from '../Icon';

import {
  ButtonSecondaryContainer, ButtonSecondaryLabel,
} from './styles';

class ButtonSecondary extends Component {
  handleClick() {
    const {
      onClick,
      disabled,
    } = this.props;

    if (!disabled) {
      onClick();
    }
  }

  render() {
    const {
      icon,
      disabled,
      side,
    } = this.props;

    return (
      <ButtonSecondaryContainer side={side} onClick={() => this.handleClick()} disabled={disabled}>
        <ButtonSecondaryLabel>
          <Icon icon={icon} size={20} />
        </ButtonSecondaryLabel>
      </ButtonSecondaryContainer>
    );
  }
}

ButtonSecondary.propTypes = {
  icon: string.isRequired,
  disabled: bool,
  onClick: func,
  side: string.isRequired,
};

ButtonSecondary.defaultProps = {
  disabled: false,
  onClick: null,
};

export default ButtonSecondary;
