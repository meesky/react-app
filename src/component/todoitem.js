import React from 'react';

class Todoitem extends React.Component {
    constructor(props){
      super(props);
      this.state= {
        done: false
      }
      this.toggle = this.toggle.bind(this);
    }

    toggle() {
      this.setState({
        done: !this.state.done
      });
    }
  render(){
    let { text } = this.props;
    let { done } = this.state;

    return(
      <div>
        <input
          type='checkbox'
          onClick={ this.toggle }
          value={ done } />
        { done ? <del>{ text }</del> : text }
      </div>
    )
  }
}

export default Todoitem;
