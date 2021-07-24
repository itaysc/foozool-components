import React from 'react'
import * as styled from './styled';
import propTypes from 'prop-types';


const Color = ({
  variant
}) => (
  <styled.Color variant={variant}>{variant}</styled.Color>
)

Color.propTypes = {
  variant: propTypes.oneOf([
    'dark', 
    'primary', 
    'secndary', 
    'tertiary', 
    'danger', 
    'warning', 
    'success', 
  ]),
}


export default Color;