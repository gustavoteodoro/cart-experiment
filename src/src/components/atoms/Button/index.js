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
      full,
    } = this.props;

    return (
      <ButtonContainer onClick={() => this.handleClick()} disabled={disabled} full={full}>
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
  full: bool,
};

Button.defaultProps = {
  disabled: false,
  onClick: null,
  full: false,
};

export default Button;
