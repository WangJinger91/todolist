import React, { Component } from 'react'

export default class Footer extends Component {

    state={
        finishedCount:0,
        mouse:false
    }

    finieshd=(todos)=>{
        var count=0;
        for(let todo of todos){
            if(todo.done===true){
                count++;
            }
        }
        return count;
       // this.setState({finishedCount:count})
        
    }

    editChecked=(e)=>{
        //console.log('select');
        this.props.selectall(e.target.checked);
    }

    handleMouse =(flag)=>{
        return ()=>{
            this.setState({mouse:flag})
            // console.log(flag);
        }
    }
    deleteChecked =()=>{
        if(window.confirm('确定删除?')){
            this.props.deleteChecked();
        }
    }
    // componentDidMount(){
    //     this.finished(this.props.todos)
    // }

    // shouldComponentUpdate(){
    //     this.finished(this.props.todos)
    //     return true;
    // }

    render() {
        const {mouse}=this.state;
        const count=this.finieshd(this.props.todos)
        return (
            <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" onChange={this.editChecked}></input>
                    <span>已完成{count}/全部{this.props.todos.length}</span>
                    <button onClick={this.deleteChecked} style={{display:mouse?'block':'none'}}>删除所有已完成</button>
                </label>
            </li>
        )
    }
}
