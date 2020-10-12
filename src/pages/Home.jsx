import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {Categories, SortPopup, Index,LoadingBlock} from "../components";

import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchOysters} from "../redux/actions/oysters";

const categoryNames =['Япония', 'Африка','Америка', 'Ближний восток','Сеты'];
const sortItems=[
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавит', type: 'name', order: 'asc' },
];
function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({ oysters }) => oysters.items);
    const isLoaded = useSelector(({ oysters }) => oysters.isLoaded);
    const {category, sortBy} = useSelector(({ filters }) => filters);


    React.useEffect(()=>{
        dispatch(fetchOysters(sortBy,category));
    },[category, sortBy]);

    const  onSelectCategory = React.useCallback((index)=>{
        dispatch(setCategory(index));
    }, []);

    const  onSelectSortType= React.useCallback((type)=>{
        dispatch(setSortBy(type));
    }, []);
    return(
    <div className="container">
        <div className="content__top ">
            <Categories
                activeCategory={category}
                onClickCategory ={onSelectCategory}
                items = {categoryNames}
            />
            <SortPopup
                activeSortType={sortBy.type}
                items ={sortItems}
                onClickSortType = {onSelectSortType}
            />
        </div>
        <h2 className="content__title">Все морепродукты</h2>
        <div className="content__items">
                {isLoaded
                ? items.map((obj) =>
                        <Index
                            key={obj.id}
                            isLoading={true} {...obj}/>)
                :Array(12)
                        .fill(0)
                        .map((_,index) => <LoadingBlock key ={index}/>)}
        </div>
    </div>
);
}
export default Home;