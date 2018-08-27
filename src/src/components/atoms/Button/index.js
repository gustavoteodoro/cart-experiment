import React, { Component } from 'react';
import { string, bool } from 'prop-types';

import {
  ButtonContainer, ButtonLabel,
} from './styles';

class Button extends Component {
  render() {
    const {
      label,
      disabled,
    } = this.props;

    return (
      <ButtonContainer disabled={disabled}>
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
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
