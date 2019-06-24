import React, {Component} from 'react';
import TodoItems from './TodoItems';
import Header from './Header'

class Todo extends Component{
    state={
        todoItems:['study','sleep','eat'],
        newTodo:''

    };
    handleChange=e =>{
        this.setState({newTodo:e.target.value})
        console.log(e.target.value,"valueeeeee");
    };
    handleSubmit = (e)=>{
        e. preventDefault()
        console.log(this.state.newTodo)
    }
    render(){
        return(
            <div>
                <Header title="MY TODO TITLE"/>
                <h1>welcome to my todo App</h1>
                
                    {
                        this.state.todoItems.map(item=>(<TodoItems individualItem={item}/>))
                    }
                <form onSubmit={this.handleSubmit}>
           <label htmlFor="">Todo Items</label><br />
           <input type =
           "text" name="new-Todo-item"
            value={this.state.newtodo}
            onChange={this.handleChange}/><br />
           <button>Submit</button>
                </form>
                
            </div>
           
        )
    }
}

export default Todo;
