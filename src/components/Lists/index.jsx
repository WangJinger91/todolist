import React, { Component } from 'react'
import Item from '../Item'
import PropTypes from'prop-types'

export default class Lists extends Component {

    static propTypes = {
        todos:PropTypes.array.isRequired,
        handleItem:PropTypes.func.isRequired,
        deleteItem:PropTypes.func.isRequired
    }
   
    render() {
        const {todos,handleItem,deleteItem}=this.props;
        return (
            <div>
                {todos.map((todo)=>{
                    return <Item {...todo} key={todo.id} handleItem={handleItem} deleteItem={deleteItem}/>
                })}
            </div>
        )
    }
}
