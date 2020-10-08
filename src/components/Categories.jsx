import React from "react";

/*----------классовый компонент------------------------------------:
class Categories extends React.Component{
    state = {
        activeItem:0,
        test:123,
    };
    onSelectItem = index =>{
        this.setState({
            activeItem:index,
        });
    };
  render() {
      const  {items, onClickItem} = this.props;
      console.log(this.state);
      return (
          <div>
              <div className="categories">
                  <ul>
                      <li>Все</li>
                      {items.map((name, index) => (
                      <li
                          className={this.state.activeItem === index ? 'active' : ''}
                          onClick={() => this.onSelectItem(index)}
                          key={`${name}_${index}`}>{name}</li>
                      ))}
                  </ul>
              </div>
          </div>
      )}}*/

/*-----------функциональный компонент:----------------------------------*/
function Categories({ items }) {
    const [activeItem,setActiveItem] = React.useState(null);
   /* возвращает состояние и функцию. которая будет это состояние менять
    const activeItem = state[0];
    const setActiveItem = state[1];*/

    const onSelectItem = (index) => {
        setActiveItem(index);

    }
    return (
        <div>
            <div className="categories">
                <ul>
                    <li className={activeItem === null ? 'active' : ''}
                        onClick={() => onSelectItem(null)}>Все
                    </li>
                    {items && /*если items хранит положительное значение , то выполняется, если отрицательная. то не выаолняется - проверка на undefined*/
                        items.map((name, index) => (
                        <li
                            className={activeItem === index ? 'active' : ''}
                            onClick={() => onSelectItem(index)}
                            key={`${name}_${index}`}>
                            {name}
                        </li>
                    ))} 
                </ul>
            </div>
        </div>
    )}
export default Categories;