import propTypes from 'prop-types';

export default {
    variant: propTypes.oneOf([
        'dark', 
        'primary', 
        'secndary', 
        'tertiary', 
        'danger', 
        'warning', 
        'success', 
        'outline-dark',
        'outline-primary',
        'outline-secndary',
        'outline-danger',
        'outline-warning',
        'outline-success',
        'ghost-dark',
        'ghost-primary',
        'ghost-secndary',
        'ghost-danger',
        'ghost-warning',
        'ghost-success',
      ]),
      size: propTypes.oneOf(['small', 'medium', 'large']),
}