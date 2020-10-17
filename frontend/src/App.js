import React, { Component } from 'react';
import Stopwatch from './Stopwatch';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      logs: [],
      status: 'start',
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  
  componentDidMount() {
    this.refreshList();
  }

  refreshList(){
    axios.get(`api/logs`)
      .then(res => {
        const logs = res.data;
        this.setState({ logs });
      })
  }

  handleClick(e) {
    e.preventDefault();
    var status = 'start';

    if(this.state.status==='start'){
      status = 'stop';
    }
  
    this.setState({
      status: status
    })

    var timestamp = this.getFormattedTimestamp();

    axios.post(`api/logs/`, {
      timestamp: timestamp,
      log_type: this.state.status
    })
      .then(res => {
        this.refreshList();
      })
  }

  handleDelete(e, id){
    e.preventDefault();
    axios.delete(`api/logs/${id}`)
      .then(res => {
        this.refreshList();
      })
  }

  getFormattedTimestamp(){
    var today = new Date();
    var date = today.getFullYear() + "-" +(today.getMonth()+1) + "-" + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + " " + time;
    return dateTime;
  }

  render() {
    return (
      <div className="App">
        <Stopwatch></Stopwatch>
        <button onClick={this.handleClick} className="btn btn-log">{ this.state.status }</button>
        <div className="row mt-5">
          <div className="col-md-12">
            <h3>Logs</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <table className="table table-bprderless table-log">
              <tbody >
                { this.state.logs.map(log => (
                  <tr key={log.id}>
                    <td>{log.timestamp} - {log.log_type}</td>
                    <td className="text-left"><button onClick={(e) => this.handleDelete(e, log.id)} className="btn btn-danger btn-sm"><i className="fa fa-trash"></i></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
