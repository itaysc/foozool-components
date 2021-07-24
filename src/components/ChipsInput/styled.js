import styled from 'styled-components';
import theme from '../../theme';

export const InputContainer = styled.div` ${p=>{
    return `
        position: relative;
        overflow-y: auto;
        overflow-wrap: anywhere;
        min-height: 48px;
        max-height: 168px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        flex-grow: 1;
        border: 1px solid ${p.borderColor};
    `;
}}
`;


export const ChipsInput = styled.input` ${p=>{
    return `
        font-size: 1rem;
        line-height: 24px;
        letter-spacing: 0.44px;
        outline: none;
        border: none;
        width: 100%;
        flex-grow: 1;
        background-color: inherit;
    `;
}}`;


export const CloseBtn = styled.div` ${p=>{
    return `
        margin-left: 10px;
        color: ${theme.colors.dark}
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
            background-color: ${theme.colors.dark};
        }
    `;
}}
`;



