import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import ChipsInput from './ChipsInput';  
import * as styled from './styled';
export default {
  component: ChipsInput,
  title: 'Components/ChipsInput',
}


export const Default = ()=>(
    <ChipsInput>Default</ChipsInput>
)
