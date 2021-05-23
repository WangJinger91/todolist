import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {
    
    onKeyDownchange = (e)=>{
        const {keyCode,target} = e;
        if( keyCode !== 13) return;
        if( target.value.trim() === '')  {
            alert('输入不能为空！！！');
            return;
        };
        var l={name:target.value,id:nanoid(),done:false};
        this.props.addtodo(l)
        target.value=''
        
    }

    render() {
        return (
            <div className="1">
                <input className="inputclass" type="text" onKeyDown={e=> this.onKeyDownchange(e)} placeholder="请输入内容"/>
            </div>
        )
    }
}
