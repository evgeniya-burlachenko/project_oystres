import axios from "axios";

export const fetchOysters = () => (dispatch) =>{
    axios.get('http://localhost:3001/oysters').then(({data})=>{
        dispatch(setOysters(data));
    });
};
export const setOysters = (items) => ({
    type: 'SET_OYSTERS',
    playload: items,
});
