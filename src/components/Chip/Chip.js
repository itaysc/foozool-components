import React from 'react'
import * as styled from './styled';
import propTypes from 'prop-types';
import sharedPropTypes from '../../shared/propTypes';

const Chip = ({
    size, 
    variant,
    img,
    children,
    onRemove,
    className,
    disabled,
})=>{

    const _onRemove = (e)=>{
        if(!disabled){
            onRemove && onRemove();
        }
    }
    return (
        <styled.Chip 
            size={size}
            disabled={disabled}
            variant={variant}
            className={className}
        >
            {img && <styled.ChipImage src={img}/>}
            {children}
            <styled.CloseBtn variant={variant} onClick={_onRemove}>&times;</styled.CloseBtn>
        </styled.Chip>
    )
}

Chip.propTypes = {
    size: sharedPropTypes.sizes,
    variant: sharedPropTypes.variant,
    img: propTypes.string,
    children: propTypes.node.isRequired,
    onRemove: propTypes.func,
    className: propTypes.string,
    disabled: propTypes.bool,
}

Chip.defaultProps = {
    size: 'medium',
    variant: 'primary',
    img: null,
    onRemove: null,
    className: null,
    disabled: false,
}

export default Chip;