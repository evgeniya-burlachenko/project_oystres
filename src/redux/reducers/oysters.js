const initialState ={
    items: [],
    isLoaded: false,
};
const oysters = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_OYSTERS':
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            };
        case 'SET_LOADED':
                return {
                    ...state,
                    isLoaded: action.payload,
                };
        default:
            return state;
    }

};


export default oysters;