import {Categories, SortPopup, OystersBlock} from "../components";
import React from "react";

function Home({ items }) {
return(
    <div className="container">
        <div className="content__top ">
            <Categories
                onClickItem ={(name) => console.log(name)}
                items = {['Япония', 'Африка','Америка', 'Ближний восток','Сеты']}/>
            <SortPopup
                items ={[
                    {name:'популярности',type:'popular'},
                    {name:'цене',type:'price'},
                    {name:'алфавиту',type: 'alphabet'},
                    ]}/>
        </div>
        <h2 className="content__title">Все морепродукты</h2>
        <div className="content__items">

                {items.map((obj) => (
                    <OystersBlock key={obj.id}
                        {...obj}/>
                    )
            ) }

        </div>
    </div>


);
}
export default Home;