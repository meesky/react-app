import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    }

    setInterval(() => {
        this.setState({
          time: this.state.time + 1
        })
    }, 1000)
  }

  render() {
    let { time } = this.state;
    let { onSaveTime } = this.props;

    return (
      <div>
        <p> Timer : { time }</p>
        <div>
          <button className="btn btn-primary" onClick={ () => onSaveTime(time) }>Save</button>
        </div>
      </div>
    )
  }
}

export default Timer;
