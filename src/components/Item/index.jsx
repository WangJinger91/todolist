import React, { Component } from 'react'
import PropTypes from'prop-types'
import './index.css'

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
            <div className="liclass" style={{backgroundColor:mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label className="iteminput">
                    <input  type="checkbox" value={name} checked={done} onChange={this.handleChecked(id)}/>
                    <span>{name}</span>
                </label>
                <button className="buttonclass" onClick={this.delete(id)} style={{display:mouse?'block':'none'}}>删除</button>
            </div>
        )
    }
}
