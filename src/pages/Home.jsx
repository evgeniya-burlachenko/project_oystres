import {Categories, SortPopup, Index,LoadingBlock} from "../components";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/actions/filters";
import {fetchOysters} from "../redux/actions/oysters";

const categoryNames =['Япония', 'Африка','Америка', 'Ближний восток','Сеты']
const sortItems=[
    {name:'популярности',type:'popular'},
    {name:'цене',type:'price'},
    {name:'алфавиту',type: 'alphabet'},
]
function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({ oysters }) => oysters.items);
    const isLoaded = useSelector(({ oysters }) => oysters.isLoaded);

    React.useEffect(()=>{
                 dispatch(fetchOysters());

    },[]);

    const  onSelectCategory = React.useCallback((index)=>{
        dispatch(setCategory(index));
    }, []);

    return(
    <div className="container">
        <div className="content__top ">
            <Categories
                onClickItem ={onSelectCategory}
                items = {categoryNames}
            />
            <SortPopup
                items ={sortItems}/>
        </div>
        <h2 className="content__title">Все морепродукты</h2>
        <div className="content__items">
                {isLoaded
                ? items.map((obj) => <Index key={obj.id} isLoading={true} {...obj}/>)

            :Array(12).fill(<LoadingBlock/>)}
        </div>
    </div>
);
}
export default Home;