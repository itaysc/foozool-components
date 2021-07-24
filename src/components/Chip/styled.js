import styled from 'styled-components';
import theme from '../../theme';
export const Chip = styled.div` ${p=>{
    const s = p.variant.split('-');
    const isOutline = p.variant.indexOf('outline') > -1;
    const variantColorName = s.length > 1? s[1]: p.variant;
    const color = s.length > 1? theme.colors[s[1]]: p.variant? theme.colors[p.variant]: theme.colors.primary;
    const rgbaColor = theme.colors[`${variantColorName}Rgba`](isOutline?0.3: 0.8);
    return `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 25px;
    cursor: pointer;
    border: ${isOutline? `1px solid ${color}`: 'none'};
    color: ${isOutline? color: variantColorName==='tertiary'? theme.colors.dark:theme.colors.white};
    height: ${p.size === 'small'? '32px': p.size === 'large'? '48px': '40px'};
    font-size: 16px;
    line-height: 50px;
    opacity: ${p.disabled? 0.5: 1};
    border-radius: 25px;
    background-color: ${isOutline? theme.colors.white: color}; 
    &:hover{
        background: ${p.disabled? isOutline? 'inherit' :color  : `${rgbaColor} radial-gradient(circle, transparent 1%, ${isOutline? theme.colors.white: 'rgba(255, 255, 255, 0.3)'} 1%) center/15000%`};
   }


   &:active{
           //opacity: 0.8;
           background-size: 100%;
           transition: ${p.disabled? 'none':  'background 0s'};
           color: ${p.disabled? variantColorName==='tertiary'? theme.colors.dark:theme.colors.white:  color};
   } 
    `;
}}
`;


export const CloseBtn = styled.div` ${p=>{
    const s = p.variant.split('-');
    const isOutline = p.variant.indexOf('outline') > -1;
    const variantColorName = s.length > 1? s[1]: p.variant;
    const color = s.length > 1? theme.colors[s[1]]: p.variant? theme.colors[p.variant]: theme.colors.primary;
    const rgbaColor = theme.colors[`${variantColorName}Rgba`](isOutline?0.3: 1)
    return `
        margin-left: 10px;
        color: ${isOutline? color: variantColorName==='tertiary'? theme.colors.dark:theme.colors.white};
        font-weight: bold;
        float: right;
        display: flex;
        padding: 2px;
        width: 15px;
        height: 15px;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        cursor: pointer;
        border-radius:50%;
        &:hover{
            background-color: ${rgbaColor};
        }
    `;
}}
`;

export const ChipImage = styled.img`
    float: left;
    margin: 0 10px 0 -25px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
`;


export const ChipGroupContainer = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;    
    margin: 20px auto;
    justify-content: center;
    align-items: center;
    & > div{
        margin: 20px;
    }
`;