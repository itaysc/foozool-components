import styled from 'styled-components';
import theme from '../../theme';
export const Button = styled.button`${p=>{
    const s = p.variant.split('-');
    const isOutline = p.variant.indexOf('outline') > -1;
    const variantColorName = s.length > 1? s[1]: p.variant;
    const color = s.length > 1? theme.colors[s[1]]: p.variant? theme.colors[p.variant]: theme.colors.primary;
    const rgbaColor = theme.colors[`${variantColorName}Rgba`](isOutline?0.3: 0.8);
    return `
    background-color: ${isOutline? 'inherit' :color};
    background-position: center;
    transition: background 0.8s;
    font-size: 18px;
    cursor: ${p.disabled? 'auto': 'pointer'};
    color: ${isOutline? color: variantColorName==='tertiary'? theme.colors.dark:theme.colors.white};
    border: ${isOutline? `1px solid ${color}`: 'none'};
    padding: 0px 16px 0px 16px;
    height: ${p.size === 'small'? '32px': p.size === 'large'? '48px': '40px'};
    opacity: ${p.disabled? 0.5: 1};
    border-radius: 5px;
    //min-width: 80px;
    &:hover{
         background: ${p.disabled? isOutline? 'inherit' :color  : `${rgbaColor} radial-gradient(circle, transparent 1%, ${isOutline? theme.colors.white: 'rgba(255, 255, 255, 0.3)'} 1%) center/15000%`};
    }
    &:active{
        &:not(disabled){
            //opacity: 0.8;
            background-size: 100%;
            transition: background 0s;
            color: ${color};
        }
    }
`}
}`;

export const ButtonGroupContainer = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;    
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    & > button{
        margin: 20px;
    }
`;