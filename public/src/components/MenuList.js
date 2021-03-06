import React from 'react';
import { browserHistory } from 'react-router';

class MenuList extends React.Component {
    handleClick(id){
        browserHistory.push(`/recipe/${id}`);
    }

    render() {
        return <div>
            {this.props.menuPro.map((item, index)=> {
                return <div key={index} className="menu-div" onClick={this.handleClick.bind(this, item.id)}>
                    <img className="recipe-img" src={item.url}/>
                    <center>{item.name}</center>
                </div>
            })}
        </div>
    }
}

export default MenuList;
