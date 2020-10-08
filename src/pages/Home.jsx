import {Categories, SortPopup} from "../components";
import React from "react";

function Home() {
return(
    <div className="container">
        <div className="content__top row">
            <Categories
                onClickItem ={(name) => console.log(name)}
                items = {['Япония', 'Африка','Америка', 'Ближний восток','Сеты']}/>
            <SortPopup items ={['популярности','цене','алфавиту']}/>
        </div>
        <h2 className="content__title">Все морепродукты</h2>
        <div className="content__items">
            <div className="pizza-block">
                <img
                    className="pizza-block__image"
                    src="https://kartinkinaden.ru/uploads/posts/2015-10/1445430381_57.jpg"
                    alt="Pizza"
                />
                <h4 className="pizza-block__title">УСТРИЦА BLUE PEARL</h4>
                <div className="pizza-block__selector">
                    <ul>
                        <li className="active">опт</li>
                        <li>розница</li>
                    </ul>
                    <ul>
                        <li className="active">1 шт</li>
                        <li>от 5 шт.</li>
                        <li>от 20 шт.</li>
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">от 250 ₽</div>
                    <div className="button button--outline button--add">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        <i>2</i>
                    </div>
                </div>
            </div>
            <div className="pizza-block">
                <img
                    className="pizza-block__image"
                    src="https://kartinkinaden.ru/uploads/posts/2015-10/1445430381_57.jpg"
                    alt="oysters"
                />
                <h4 className="pizza-block__title">УСТРИЦА ВОСТОЧНАЯ</h4>
                <div className="pizza-block__selector">
                    <ul>
                        <li className="active">опт</li>
                        <li>розница</li>
                    </ul>
                    <ul>
                        <li className="active">от 1 шт. </li>
                        <li>от 5 шт.</li>
                        <li>от 20 шт.</li>
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">от 250 ₽</div>
                    <div className="button button--outline button--add">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        <i>2</i>
                    </div>
                </div>
            </div>
            <div className="pizza-block">
                <img
                    className="pizza-block__image"
                    src="https://kartinkinaden.ru/uploads/posts/2015-10/1445430381_57.jpg"
                    alt="Pizza"
                />
                <h4 className="pizza-block__title">МОРСКОЙ ЕЖ ЖИВОЙ</h4>
                <div className="pizza-block__selector">
                    <ul>
                        <li className="active">опт</li>
                        <li>розница</li>
                    </ul>
                    <ul>
                        <li className="active">от 1 шт. </li>
                        <li>от 5 шт.</li>
                        <li>от 20 шт.</li>
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">от 250 ₽</div>
                    <div className="button button--outline button--add">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        <i>2</i>
                    </div>
                </div>
            </div>
            <div className="pizza-block">
                <img
                    className="pizza-block__image"
                    src="https://kartinkinaden.ru/uploads/posts/2015-10/1445430381_57.jpg"
                    alt="Pizza"
                />
                <h4 className="pizza-block__title">УСТРИЦА РОЗОВАЯ</h4>
                <div className="pizza-block__selector">
                    <ul>
                        <li className="active">опт</li>
                        <li>розница</li>
                    </ul>
                    <ul>
                        <li className="active">от 1 шт.</li>
                        <li>от 5 шт.</li>
                        <li>от 20 шт.</li>
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">от 180 ₽</div>
                    <div className="button button--outline button--add">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        <i>2</i>
                    </div>
                </div>
            </div>
            <div className="pizza-block">
                <img
                    className="pizza-block__image"
                    src="https://kartinkinaden.ru/uploads/posts/2015-10/1445430381_57.jpg"
                    alt="Pizza"
                />
                <h4 className="pizza-block__title">УСТРИЦА КРУАЗЕ</h4>
                <div className="pizza-block__selector">
                    <ul>
                        <li className="active">опт</li>
                        <li>розница</li>
                    </ul>
                    <ul>
                        <li className="active">от 1 шт.</li>
                        <li>от 5 шт.</li>
                        <li>от 20 шт.</li>
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">от 220 ₽</div>
                    <div className="button button--outline button--add">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        <i>2</i>
                    </div>
                </div>
            </div>
            <div className="pizza-block">
                <img
                    className="pizza-block__image"
                    src="https://kartinkinaden.ru/uploads/posts/2015-10/1445430381_57.jpg"
                    alt="Pizza"
                />
                <h4 className="pizza-block__title">УСТРИЦА ОСАКА ЯПОНИЯ</h4>
                <div className="pizza-block__selector">
                    <ul>
                        <li className="active">опт</li>
                        <li>розница</li>
                    </ul>
                    <ul>
                        <li className="active">от 1 шт.</li>
                        <li>от 5 шт.</li>
                        <li>от 20 шт.</li>
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">от 220 ₽</div>
                    <div className="button button--outline button--add">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        <i>2</i>
                    </div>
                </div>
            </div>
            <div className="pizza-block">
                <img
                    className="pizza-block__image"
                    src="https://kartinkinaden.ru/uploads/posts/2015-10/1445430381_57.jpg"
                    alt="Pizza"
                />
                <h4 className="pizza-block__title">УСТРИЦА ХАСАНСКАЯ</h4>
                <div className="pizza-block__selector">
                    <ul>
                        <li className="active">опт</li>
                        <li>розница</li>
                    </ul>
                    <ul>
                        <li className="active">от 1 шт.</li>
                        <li>от 5 шт.</li>
                        <li>от 20 шт.</li>
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">от 220 ₽</div>
                    <div className="button button--outline button--add">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        <i>2</i>
                    </div>
                </div>
            </div>
            <div className="pizza-block">
                <img
                    className="pizza-block__image"
                    src="https://kartinkinaden.ru/uploads/posts/2015-10/1445430381_57.jpg"
                    alt="Pizza"
                />
                <h4 className="pizza-block__title">МОРСКОЙ ГРЕБЕШОК </h4>
                <div className="pizza-block__selector">
                    <ul>
                        <li className="active">опт</li>
                        <li>розница</li>
                    </ul>
                    <ul>
                        <li className="active">от 1 шт. </li>
                        <li>от 5 шт.</li>
                        <li>от 20 шт.</li>
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">от 220 ₽</div>
                    <div className="button button--outline button--add">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        <i>2</i>
                    </div>
                </div>
            </div>
            <div className="pizza-block">
                <img
                    className="pizza-block__image"
                    src="https://kartinkinaden.ru/uploads/posts/2015-10/1445430381_57.jpg"
                    alt="Pizza"
                />
                <h4 className="pizza-block__title">ВОНГОЛЕ ЖИВЫЕ</h4>
                <div className="pizza-block__selector">
                    <ul>
                        <li className="active">опт</li>
                        <li>розница</li>
                    </ul>
                    <ul>
                        <li className="active">от 1 шт.</li>
                        <li>от 5 шт.</li>
                        <li>от 20 шт.</li>
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">от 220 ₽</div>
                    <div className="button button--outline button--add">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        <i>2</i>
                    </div>
                </div>
            </div>
        </div>
    </div>


)
}
export default Home;