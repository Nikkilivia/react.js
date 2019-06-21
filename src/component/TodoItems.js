import React, {Component} from 'react'
import { directive } from '@babel/types';
const TodoItems=(props)=>{
    return(
    <div>
        {props.individualItem}
        <h2>i cook</h2>
    </div>
    )
}
export default TodoItems;