import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import Button from './Button';  
import * as styled from './styled';
export default {
  component: Button,
  title: 'Components/Button',
}


export const Default = ()=>(
  <styled.ButtonGroupContainer>
    <Button  onClick={action('clicked')} >Default</Button>
  </styled.ButtonGroupContainer>
)

export const Variants = () => (
  <>
  <styled.ButtonGroupContainer>
      <Button variant="primary" onClick={action('clicked')} >Primary</Button>
      <Button variant="secondary" onClick={action('clicked')} >Secondary</Button>
      <Button variant="tertiary" onClick={action('clicked')} >Tertiary</Button>
      <Button variant="dark" onClick={action('clicked')} >Dark</Button>
      <Button variant="danger" onClick={action('clicked')} >Danger</Button>
      <Button variant="success" onClick={action('clicked')} >Success</Button>
      <Button variant="warning" onClick={action('clicked')} >Warning</Button>
  </styled.ButtonGroupContainer>
    <styled.ButtonGroupContainer>
      <Button variant="outline-primary" onClick={action('clicked')} >Outline Primary</Button>
      <Button variant="outline-secondary" onClick={action('clicked')} >Outline Secondary</Button>
      <Button variant="outline-tertiary" onClick={action('clicked')} >Outline Tertiary</Button>
      <Button variant="outline-dark" onClick={action('clicked')} >Outline Dark</Button>
      <Button variant="outline-danger" onClick={action('clicked')} >Outline Danger</Button>
      <Button variant="outline-success" onClick={action('clicked')} >Outline Success</Button>
      <Button variant="outline-warning" onClick={action('clicked')} >Outline Warning</Button>
  </styled.ButtonGroupContainer>
  </>
)


export const Sizes = () => (
    <styled.ButtonGroupContainer> 
       <Button size="small" onClick={action('clicked')} >SMALL</Button>
       <Button size="medium" onClick={action('clicked')} >MEDIUM</Button>
       <Button size="large" onClick={action('clicked')} >LARGE</Button>
     </styled.ButtonGroupContainer>
)

export const Disabled = ()=>(
    <styled.ButtonGroupContainer>
      <Button disabled={true} onClick={action('clicked')} >DISABLED</Button>
    </styled.ButtonGroupContainer>
)

