export const inc = () => ({ type: 'INC' });
export const dec = () => ({ type: 'DEC' });
export const reset = () => ({ type: 'RESET' });
export const load = (value) => ({type: "LOAD", value});
export const upload = () => ({type: 'UPLOAD'});