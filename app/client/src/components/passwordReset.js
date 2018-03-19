
import React, {Component} from 'react';
import axios from 'axios';



class PasswordReset extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: ''


        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUserInput(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value})
        // () => {
        //     this.validateField(name, value)
        // });
    };


    handleSubmit() {

        let data=this.state.email;
        axios.post('http://localhost:8000/items/passwordReset/', {
            item: data
        })
            .then(res => console.log("ok"))
            .catch(err => console.log(err));
        this.props.history.push('/login');

    }

    render() {
        // var  dialogStyles  = {
        //     backgroundColor : '#e6e8eb',
        //     height:'auto',
        //     top:'35%'
        // } ;

        return (
            <div>






                <form className="signUp" onSubmit={this.handleSubmit}>





                        <label htmlFor="email">Email address</label>
                        <input type="email" required className="form-control" name="email"
                               placeholder="Email"
                               value={this.state.email}
                               onChange={this.handleUserInput}/>



                    <button type="submit" value="Submit" className="btn  submit-btn">submit
                    </button>


                </form>


            </div>
        );
    }
}


export default PasswordReset;
