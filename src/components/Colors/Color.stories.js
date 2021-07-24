import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import Color from './Color';
import * as styled from './styled';

export default {
  component: Color,
  title: 'Theme/Colors',
}


export const Pallete = ()=>(
  <styled.PaletteContainer>
  <Color variant="dark"/>
  <Color variant="primary"/>
  <Color variant="secondary"/>
  <Color variant="tertiary"/>
  <Color variant="danger"/>
  <Color variant="success"/>
  <Color variant="warning"/>
</styled.PaletteContainer>
)


 