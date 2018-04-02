import React, {Component} from 'react';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName:'',
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
            invalidData: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({ [event.target.name]: event.target.value},
            () => { this.validateField(name, value) });
    }

    componentWillUpdate(nextProps, nextState) {
        var emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        nextState.invalidData = !(nextState.email.match(emailRegEx) && nextState.password.length > 5 && nextState.confirmPassword == nextState.password && nextState.userName.length>1 && nextState.firstName.length>1 && nextState.lastName.length>1 );
    }

    validateField(fieldName,value){
        var emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var pass1 = /[0-9]/;
        var pass2 =  /[a-z]/;
        var errMsg = '';
        var passValue = '';
        const error = document.getElementById(`${fieldName}Error`);

        if(fieldName == 'email'){
            if(!value.match(emailRegEx)){
                error.textContent = `Email is invalid`;
                document.getElementById('email').style.borderColor = "red";
            }
            else{
                error.textContent = '';
                document.getElementById('email').style.borderColor = "lightblue";
            }
        }
        else if (fieldName == 'password'){
            passValue = value;
            if(value.length < 6){
                error.textContent = `Password must contain 6 characters`;
                document.getElementById('password').style.borderColor = "red";
            }
            else{
                error.textContent = '';
                document.getElementById('password').style.borderColor = "lightblue";
            }
        }
        else if (fieldName == 'confirmPassword'){
            if(value !== this.refs.password.value){
                error.textContent = `Confirm password and Password do not match`;
                document.getElementById('confirmPassword').style.borderColor = "red";
            }
            else{
                error.textContent = '';
                document.getElementById('confirmPassword').style.borderColor = "lightblue";
            }

        }
        else if (fieldName == 'userName'){
            if(value.length <=  1){
                error.textContent = `Username is invalid`;
                document.getElementById('userName').style.borderColor = "red";
            }
            else{
                error.textContent = '';
                document.getElementById('userName').style.borderColor = "lightblue";
            }
        }
        else if (fieldName == 'firstName'){
            if(value.length <= 1){
                error.textContent = `First name is invalid`;
                document.getElementById('firstName').style.borderColor = "red";
            }
            else{
                error.textContent = '';
                document.getElementById('firstName').style.borderColor = "lightblue";
            }
        }
        else if ( fieldName == 'lastName'){
            if(value.length <= 1){
                error.textContent = `Last Name is invalid`;
                document.getElementById('lastName').style.borderColor = "red";
            }
            else{
                error.textContent = '';
                document.getElementById('lastName').style.borderColor = "lightblue";
            }
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        alert("Your form is submitted successfully!!!");
    }
    
    render(){
        return(
            <main className="body-main">
                <div className="body-form">
                    <h3>Register</h3>
                    <section>
                        <p>Join the community and improve your game with <strong>Angular</strong> </p>
                    </section> 
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <span>
                            <input type="text" onChange={this.handleChange} value={this.state.firstName} id="firstName" ref="firstName" name="firstName" placeholder="First Name" />
                            <i id="icon" className="fa fa-user"></i>
                        </span>
                        <span>
                            <input type="text" onChange={this.handleChange} value={this.state.lastName} id="lastName" ref="lastName" name="lastName"  placeholder="Last Name" />
                            <i id="icon" className="fa fa-user"></i>
                        </span>
                        <span>    
                            <input type="email" onChange={this.handleChange} value={this.state.email} id="email" ref="email" name="email"  placeholder="Email" />
                            <i id="icon" className="fa fa-envelope-o"></i>
                        </span>
                        <span>
                            <input type="text" onChange={this.handleChange} value={this.state.userName} id="userName" ref="userName" name="userName"  placeholder="Username" />
                            <i id="icon" className="fa fa-user"></i>
                        </span>
                        <span>
                            <input type="password" onChange={this.handleChange} value={this.state.password} id="password" ref="password"  name="password"  placeholder="Password" />
                            <i id="icon" className="fa fa-unlock-alt"></i>
                        </span>
                        <span>
                            <input type="password" onChange={this.handleChange} value={this.state.confirmPassword} id="confirmPassword" ref="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />
                            <i id="icon" className="fa fa-lock"></i>
                        </span>
                        <span>
                            <p className="body-div-signin">By registering you agree to our <strong>Terms</strong> and <strong>Privacy Policy</strong></p>
                        </span>
                        <div className="errorMsg">
                            <div className="error" id="firstNameError"></div>
                            <div className="error" id="lastNameError"></div>
                            <div className="error" id="userNameError"></div>
                            <div className="error" id="emailError"></div>
                            <div className="error" id="passwordError"></div>
                            <div className="error" id="confirmPasswordError"></div> 
                        </div>
                        <span>
                            <button disabled={this.state.invalidData} type="submit" value="Register" className="button">Register</button>
                        </span>
                        <hr />
                        <p className="body-div-signin">Already a member? <strong>SIGN IN</strong> </p>
                    </form>
                </div>
            </main>
        )
    }
}

export default Main;