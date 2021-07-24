import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import Chip from './Chip';  
import * as styled from './styled';
export default {
  component: Chip,
  title: 'Components/Chip',
}


export const Default = ()=>(
  <styled.ChipGroupContainer>
    <Chip>Default</Chip>
  </styled.ChipGroupContainer>
)

export const Variants = () => (
  <>
  <styled.ChipGroupContainer>
      <Chip variant="primary" >Primary</Chip>
      <Chip variant="secondary" >Secondary</Chip>
      <Chip variant="tertiary" >Tertiary</Chip>
      <Chip variant="danger" >Danger</Chip>
      <Chip variant="warning" >Warning</Chip>
      <Chip variant="success" >Success</Chip>
      <Chip variant="dark" >Dark</Chip>
  </styled.ChipGroupContainer>
  <styled.ChipGroupContainer>
      <Chip variant="outline-primary" >Outline Primary</Chip>
      <Chip variant="outline-secondary" >Outline Secondary</Chip>
      <Chip variant="outline-tertiary" >Outline Tertiary</Chip>
      <Chip variant="outline-danger" >Outline Danger</Chip>
      <Chip variant="outline-warning" >Outline Warning</Chip>
      <Chip variant="outline-success" >Outline Success</Chip>
      <Chip variant="outline-dark" >Outline Dark</Chip>
  </styled.ChipGroupContainer>
  </>
)

export const Sizes = ()=>(
    <styled.ChipGroupContainer>
      <Chip size='small'>Small</Chip>
      <Chip size='medium'>Medium</Chip>
      <Chip size='large'>Large</Chip>
    </styled.ChipGroupContainer>
)

export const Disabled = ()=>(
    <styled.ChipGroupContainer>
      <Chip disabled>Disabled</Chip>
    </styled.ChipGroupContainer>
)
