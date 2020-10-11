const initialState ={
    items: [],
    isLoaded: false,
};

const oysters = (state = initialState, action) => {
    if (action.type ==='SET_OYSTERS') {
        return {
            ...state,
            items: action.playload,
            isLoaded: true,
        };
    }
    return state;
};
export default oysters;