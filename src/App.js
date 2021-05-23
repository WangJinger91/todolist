import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Lists from './components/Lists';

class App extends React.Component { 
  state={
    todos:[{name:'吃饭',id:1,done:false},
          {name:'睡觉',id:2,done:false},
          {name:'工作',id:3,done:true},
  ]
  }

  addTodo=(todo)=>{
    const {todos}=this.state;
    this.setState({todos:[todo,...todos]})
  }

  selectAll=(flag)=>{
    const {todos}=this.state;
    // for(let todo of todos){
    //   todo.done=flag
    // }
    const todolist=todos.map((todo)=>{
      return {...todo,done:flag}
    })
    this.setState({todos:todolist})
  }

  handleItem=(id,done)=>{
    const {todos}=this.state;
    for(let todo of todos){
      if(todo.id===id)
        todo.done=done;
    }
    this.setState({todos:todos})
  }

  deleteItem=(id)=>{
    const {todos}=this.state;
    const todolist = todos.filter(item=>item.id !== id)
    this.setState({
      todos:todolist
    })
  }

  deleteChecked=()=>{
    const {todos}=this.state;
    const todolist = todos.filter(item=>item.done !== true)
    this.setState({
      todos:todolist
    })
  }

  render(){
    const {todos}=this.state;
    return (
      <div className="appcontainer">
        <Header addtodo={this.addTodo}></Header>
        <Lists todos={todos} handleItem={this.handleItem} deleteItem={this.deleteItem}></Lists>
        <Footer todos={todos} selectall={this.selectAll} deleteChecked={this.deleteChecked}></Footer>
      </div>
    );
  
  }
}

export default App;
