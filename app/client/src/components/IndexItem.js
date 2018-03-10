import React, { Component } from 'react';
import ItemService from './ItemService';
import axios from 'axios';
import TableRow from './TableRow';

class IndexItem extends Component {

  constructor(props) {
      super(props);
      this.state = {value: '', items: '',
      error:''
      };
      this.addItemService = new ItemService();
      //this.login = this.login.bind(this);
    }
    componentWillMount(){
      axios.get('http://localhost:8000/items')
      .then(response => {
        this.setState({ items: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    }
    tabRow(){
      if(this.state.items instanceof Array){
        return this.state.items.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        })
      }
    }


    // login(data) {
    //
    //     axios.post('http://localhost:8000/items/login', {
    //         item: data
    //     })
    //         .then(res => this.setState({ error: res.data }))
    //         .catch(err => console.log(err));
    //     console.log(this.state.error);    }


    render() {
      return (
        <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                    <td>No.</td>
                    <td>firstName</td>
                    <td>lastName</td>
                    <td>username</td>
                    <td>email</td>
                    <td>phone</td>
                    <td>password</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
                <tbody>
                {this.state.error}
                </tbody>
            </table>
        </div>
      );
    }
  }

export default IndexItem;
