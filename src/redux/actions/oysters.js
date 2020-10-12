import axios from "axios";

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});
export const fetchOysters = (sortBy, category) => (dispatch) =>{
    dispatch({
        type: 'SET_LOADED',
        payload:false,
    });
       axios.get(`http://localhost:3001/oysters?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
           sortBy.order
       }`,
       )
       .then(({data})=>{
        dispatch(setOysters(data));
    });
};
export const setOysters = (items) => ({
    type: 'SET_OYSTERS',
    payload: items,
});
