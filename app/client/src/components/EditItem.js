import React, { Component } from 'react';
import axios from 'axios';
import ItemService from './ItemService';
class EditItem extends Component {
    constructor(props) {
        super(props);
        this.addItemService = new ItemService();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.uuu=this.uuu.bind(this);
        this.pas=this.pas.bind(this);
        this.passw=this.passw.bind(this);
        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            phone: ""
            ,
            password:"",
            password1:""

        };
    }

    componentDidMount(){
        axios.get('http://localhost:8000/items/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState( response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    handleChange(event) {
        let name= event.target.name;
        this.setState({[name]: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        this.addItemService.updateData(this.state,this.props.match.params.id);
        this.state.aaa=false;
        // setTimeout(function(){ return  uuu();}, 2000);
        this.uuu();
    }
    uuu(){
        this.props.history.push('/user');
    }
    pas(event){
        let name= event.target.name;
        this.setState({[name]: event.target.value});

    }
    passw(){
        if(this.state.password===this.state.password1){

           let data=this.state.password1;
                        axios.post('http://localhost:8000/items/pass/', {
                item: data
            })
                .then(res => console.log("ok"))
                .catch(err => console.log(err));
            this.uuu()

        }

        }





    render() {
        return (
            <div className="container">
                <div className={this.state.aaa? " hide" :"show"  }>
                    <i className="fa fa-spinner fa-spin "/>
                </div>
                <form onSubmit={this.handleSubmit}  >
                    <label>
                        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}  className="form-control"/>
                        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}  className="form-control"/>
                        <input type="text" name="username" value={this.state.username} onChange={this.handleChange}  className="form-control"/>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange}  className="form-control"/>
                        <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange}  className="form-control"/>
                    </label><br/>
                    <input type="submit" value="Update" className="btn btn-primary"/>
                </form>
                <form onSubmit={this.passw}>
                    <input type="password" name="password" value={this.state.password} onChange={this.pas} className="form-control"/>
                    <input type="password" name="password1" value={this.state.password1} onChange={this.pas} className="form-control"/>
                    <input type="submit" />
                </form>


            </div>
        );
    }
}
export default EditItem;