import React from 'react'
import * as styled from './styled';
import propTypes from 'prop-types';
import sharedPropTypes from '../../shared/propTypes';
import theme from '../../theme';

const ChipsInput = ({
    borderColor
})=>{

    return (
        <styled.InputContainer borderColor={borderColor}>
            <styled.ChipsInput />
        </styled.InputContainer>
    )
}

ChipsInput.propTypes = {
    borderColor: propTypes.string,
}

ChipsInput.defaultProps = {
    borderColor: theme.colors.primary,
}

export default ChipsInput;