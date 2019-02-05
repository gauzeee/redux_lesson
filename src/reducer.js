import Loader from "./loader";
const loader = new Loader();

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RESET':
            return 0;
        case 'LOAD':
            return action.value;
        case 'UPLOAD':
            loader.uploadConst(state);
            return state;
        default:
            return state;
    }
};

export default reducer;