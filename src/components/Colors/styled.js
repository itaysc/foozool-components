import styled from 'styled-components';
import theme from '../../theme';

export const Color = styled.div`
    width: 200px;
    height: 150px;
    background-color: ${p=>theme.colors[p.variant]};
    color: ${theme.colors.white};
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    max-width: 200px;
    flex: 40%;
    margin: 10px;
`;

export const PaletteContainer = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;