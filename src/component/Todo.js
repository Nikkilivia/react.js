import React, {Component} from 'react';
import TodoItems from './TodoItems';
import Header from './Header'

class Todo extends Component{
    render(){
        const todoItems = ['study','sleep','eat']
        return(
            <div>
                <Header title="MY TODO TITLE"/>
                <h1>welcome to my todo App</h1>
                <ul>
                    {
                        todoItems.map(item=>(<TodoItems individualItem={item}/>))
                    }
                </ul>
                
            </div>
           
        )
    }
}

export default Todo;
