import React from 'react';
import { InputGroup, Input, InputGroupAddon, Button, ListGroup, ListGroupItem } from 'reactstrap';
import Todoitem from './todoitem.js';

class Todo extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      list: [],
      item: '',
    }
    this.addNewItem = this.addNewItem.bind(this);
  }

  newItem(e) {
    this.setState({
      item: e.target.value
    });
  }

  addNewItem() {
    this.setState({
      list: this.state.list.concat([this.state.item]),
      item: ''
    });
  }

  render(){
    let { item, list, done } = this.state;
    let { colors } = this.props;
    let style = {
      list: {
        border: 0,
        paddingBottom: 0
      }
    }

    return(
      <div>
        <h4> Todo list </h4>
        <InputGroup>
          <Input value={ item } onChange={ (e) => this.newItem(e) }/>
          <InputGroupAddon addonType="append">
            <Button color={ colors } col onClick={ this.addNewItem }>ADD</Button>
          </InputGroupAddon>
        </InputGroup>

        <div>
          <ListGroup >
            {
              list.map( (todo, i) =>
              <ListGroupItem key={ i } style={style.list}>
                <Todoitem text={ todo }/>
              </ListGroupItem>)
            }
          </ListGroup>
        </div>
      </div>
    )
  }
}

export default Todo;
