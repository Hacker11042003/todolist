
import React, { Component } from "react";

class TodoAdd extends Component {
  state = {
    text: '',
  }
    setText=(event)=>{
      this.setState({text:event.target.value})
    }

  
  render() {
    return (
      <div className="add">
        <input
         type="text" 
         placeholder="Напиши задачи" 
         onChange={this.setText }
         value={this.state.text }/>
        <button onClick={()=>{
          if (this.state.text) {
            this.props.onAddTodo(this.state.text)
            
          }
          this.state.text = ''

          }}>Add</button>
      </div>
    );
  } 
}

export default TodoAdd;