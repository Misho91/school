import React, { Component } from 'react';
import axios from 'axios';


class Lava extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''

    };

    }
    componentWillMount(){
        axios.get('http://localhost:8000/items')
            .then(response => {
                this.setState({ value: response.data[0] });
                this.setState({ value: response.data[0] });

                console.log(this.state.value);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

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

                    <tr>
                        <td>
                            {this.state.value._id}
                        </td>
                        <td>
                            {this.state.value.firstName}
                        </td>
                        <td>
                            {this.state.value.lastName}
                        </td>
                        <td>
                            {this.state.value.username}
                        </td>
                        <td>
                            {this.state.value.email}
                        </td>
                        <td>
                            {this.state.value.phone}
                        </td>
                        <td>
                            {this.state.value.password}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Lava;
