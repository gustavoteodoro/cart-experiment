import React, { Component } from 'react';
import { string, bool, func } from 'prop-types';

import {
  ButtonContainer, ButtonLabel,
} from './styles';

class Button extends Component {
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
      label,
      disabled,
    } = this.props;

    return (
      <ButtonContainer onClick={() => this.handleClick()} disabled={disabled}>
        <ButtonLabel>
          {label}
        </ButtonLabel>
      </ButtonContainer>
    );
  }
}

Button.propTypes = {
  label: string.isRequired,
  disabled: bool,
  onClick: func,
};

Button.defaultProps = {
  disabled: false,
  onClick: null,
};

export default Button;
