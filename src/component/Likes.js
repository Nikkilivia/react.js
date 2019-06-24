import React, {Component} from 'react'
class Likes extends Component {
    state={
    likes: 0
    }
    increaseLikes =() =>{
        this.setState((prevState) =>{
return{
    likes:prevState.likes +1
    

}
        }
        )
    }

    decreaseLikes=()=>{
        this.setState((prevState)=>{
            return{

            
            likes:prevState.likes-1
            }
        }
        )
    

    }
    resetLikes=()=>{
        this.setState({likes:0});
    }
    render(){
        return(

            <div>
            <h1>welcome to my Likes app</h1>
            <h3>likes:{this.state.likes}</h3>
            <button onClick={this.increaseLikes}>like</button>
            <button onClick={this.decreaseLikes}>unlikes</button>
            <button onClick={this.resetLikes}>reset</button>
            </div>
        );
    }
}
export default Likes;