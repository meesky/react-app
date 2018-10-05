import React, { Component } from 'react';
import Header from './component/header.js';
import Footer from './component/footer.js';
import Body from './component/body';
import Timer from './component/time.js';
import Todo from './component/todolist';

import './App.css';

import { Container, Row, Col, Button } from 'reactstrap'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: 'Meesky',
      show: false,
      saveTime: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSaveTime = this.handleSaveTime.bind(this);
  }

  handleClick() {
    this.setState({
      show: true
    });
  }

  handleSaveTime(time) {
    this.setState({
      saveTime : time
    });
  }

  render() {
    let { show, saveTime, name } = this.state;

    return (
      <Container>
        <Row className="App">
          <Col>
            <div className="App-header">
              <Header />
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="App">
            <Body currentUser={ name } isLoggedIn={ show }/>
            <Button color="warning" onClick={ this.handleClick }>Log in</Button>
            <Timer onSaveTime= { this.handleSaveTime }/>
            <p> Time Saved : { saveTime }</p>
          </Col>
          <Col>
            <Todo colors='info'/>
            <Todo colors='danger'/>
          </Col>
        </Row>

        <Row className="App-footer">
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
