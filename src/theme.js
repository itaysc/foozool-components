import {hexToRgb, hexToRgba} from './utils/colorManipulation';
import defaultTheme from './utils/defaultTheme';

function createPallete(theme=defaultTheme){
    return  {
        white: 'rgb(255, 255, 255)',
        dark : hexToRgb(theme.dark),
        primary: hexToRgb(theme.primary),
        secondary: hexToRgb(theme.secondary),
        tertiary: hexToRgb(theme.tertiary),
        danger: hexToRgb(theme.danger),
        warning: hexToRgb(theme.warning),
        success: hexToRgb(theme.success),
        whiteRgba: (opacity)=>`rgba(255, 255, 255, ${opacity})`,
        darkRgba :(opacity)=>hexToRgba(theme.dark, opacity),
        primaryRgba: (opacity)=>hexToRgba(theme.primary, opacity),
        secondaryRgba: (opacity)=>hexToRgba(theme.secondary, opacity),
        tertiaryRgba: (opacity)=>hexToRgba(theme.tertiary, opacity),
        dangerRgba: (opacity)=>hexToRgba(theme.danger, opacity),
        warningRgba: (opacity)=>hexToRgba(theme.warning, opacity),
        successRgba: (opacity)=>hexToRgba(theme.success, opacity),
    }
}
export default {
    colors: createPallete()
}


