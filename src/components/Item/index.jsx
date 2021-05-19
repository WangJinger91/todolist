import React, { Component } from 'react'
import PropTypes from'prop-types'

export default class Item extends Component {

    state={
        mouse:false
    }

    static propTypes = {
        //todos:PropTypes.array.isRequired,
        handleItem:PropTypes.func.isRequired,
        deleteItem:PropTypes.func.isRequired
    }

    delete=(id)=>{
        return ()=>{   
            if(window.confirm('确定删除?')){
                this.props.deleteItem(id);
            }
        }
    }

    handleMouse =(flag)=>{
        return ()=>{
            this.setState({mouse:flag})
            // console.log(flag);
        }
    }

    handleChecked=(id)=>{
        return (e)=>{
            //console.log(id,e.target.checked);
            this.props.handleItem(id,e.target.checked)
        }
    }

    render() {
        const {name,id,done}=this.props;
        const {mouse}=this.state;
        return (
            <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" value={name} checked={done} onChange={this.handleChecked(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={this.delete(id)} style={{display:mouse?'block':'none'}}>删除</button>
            </li>
        )
    }
}
