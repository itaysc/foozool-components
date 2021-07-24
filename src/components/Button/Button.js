import React from 'react'
import * as styled from './styled';
import propTypes from 'prop-types';
import sharedPropTypes from '../../shared/propTypes';


const Button = ({
  onClick,
  size,
  variant,
  type,
  className,
  children,
  disabled,
}) => (
  <styled.Button 
  onClick={onClick}
  className={className}
  type={type}
  size={size}
  variant={variant}
  disabled={disabled}
  >
    {children}
  </styled.Button>
)

Button.propTypes = {
  /**
    function that will be called when clicking the button
  */
  onClick: propTypes.func,
  /**
   The size of the button
  */
  size: sharedPropTypes.size,
  /**
   The variant of the button
  */
  variant: sharedPropTypes.variant,
  /**
   Type oof the button 
  */
  type: propTypes.oneOf(['button', 'submit']),
  /**
   className to apply additional css custimizations
  */
  className: propTypes.string,
  /**
    if the button is disabled or not
  */
  disabled: propTypes.bool,
  /**
   The content to be displayed inside the button
  */
  children: propTypes.node.isRequired,
}

Button.defaultProps={
  onClick: ()=>false,
  size: 'medium',
  variant: 'primary',
  trpe: 'button',
  className: '',
  disabled: false,
}

export default Button;