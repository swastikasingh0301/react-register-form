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
            errors: {
                emailErrMsg: " ",
                passwordErrMsg: "",
                userNameErrMsg: "",
                firstNameErrMsg: "",
                lastNameErrMsg: "",
                confirmPasswordErrMsg: ""
            },
            errClass :{
                emailClassStyle : "",
                passwordClassStyle : "",
                confirmClassStyle : "",
                firstNameClassStyle : "",
                lastNameClassStyle : "",
                userNameClassStyle : ""
            },
            invalidData: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({ [name]: value},
            () => { this.validateField(name, value) });
    }

    componentWillUpdate(nextProps, nextState) {
        var emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var nameRegEx = /^[A-z]+$/;
        nextState.invalidData = !(nextState.email.match(emailRegEx) && nextState.password.length > 5 && nextState.confirmPassword == nextState.password && nextState.userName.match(nameRegEx) && nextState.firstName.match(nameRegEx) && nextState.lastName.match(nameRegEx) );
    }

    validateField(fieldName,value){
        var emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var pass1 = /[0-9]/;
        var nameRegEx = /^[A-z]+$/;
        let emailMsg = this.state.errors.emailErrMsg;
        let passwordMsg = this.state.errors.passwordErrMsg;
        let userNameMsg = this.state.errors.userNameErrMsg;
        let firstNameMsg = this.state.errors.firstNameErrMsg;
        let lastNameMsg = this.state.errors.lastNameErrMsg;
        let confirmPasswordMsg = this.state.errors.confirmPasswordErrMsg;
        let emailClassStyle = this.state.errClass.emailClassStyle;
        let passwordClassStyle = this.state.errClass.passwordClassStyle;
        let confirmClassStyle = this.state.errClass.confirmClassStyle;
        let userNameClassStyle = this.state.errClass.userNameClassStyle;
        let lastNameClassStyle = this.state.errClass.lastNameClassStyle;
        let firstNameClassStyle = this.state.errClass.firstNameClassStyle;

        if(fieldName == 'email'){
            if(!value.match(emailRegEx)){
                emailMsg = 'Email is invalid';
                emailClassStyle = "invalidStyle";
            }
            else{
                emailMsg = ' ';
                emailClassStyle = "validStyle";
            }
        }
        else if (fieldName == 'password'){
            if(value.length < 6){
                passwordMsg = `Password must contain 6 characters`;
                passwordClassStyle = "invalidStyle";
            }
            else{
                passwordMsg = '';
                passwordClassStyle = "validStyle";
            }
        }
        else if (fieldName == 'confirmPassword'){
            if(value !== this.refs.password.value){
                confirmPasswordMsg = `Confirm password and Password do not match`;
                confirmClassStyle = "invalidStyle";
            }
            else{
                confirmPasswordMsg = '';
                confirmClassStyle = "validStyle";
            }
        }
        else if (fieldName == 'userName'){
            if(!value.match(nameRegEx)){
                userNameMsg = `Username is invalid`;
                userNameClassStyle = "invalidStyle";
            }
            else{
                userNameMsg = '';
                userNameClassStyle = "validStyle";
            }
        }
        else if (fieldName == 'firstName'){
            if(!value.match(nameRegEx)){
                firstNameMsg = `First name is invalid`;
                firstNameClassStyle = "invalidStyle";
            }
            else{
                firstNameMsg = '';
                firstNameClassStyle = "validStyle";
            }
        }
        else if ( fieldName == 'lastName'){
            if(!value.match(nameRegEx)){
                lastNameMsg = `Last Name is invalid`;
                lastNameClassStyle = "invalidStyle";
            }
            else{
                lastNameMsg = '';
                lastNameClassStyle = "validStyle";
            }
        }
        this.setState({errors: {
                emailErrMsg:emailMsg,
                passwordErrMsg:passwordMsg,
                userNameErrMsg:userNameMsg,
                firstNameErrMsg: firstNameMsg,
                lastNameErrMsg: lastNameMsg,
                confirmPasswordErrMsg: confirmPasswordMsg
            },
            errClass : {
                firstNameClassStyle : firstNameClassStyle,
                lastNameClassStyle : lastNameClassStyle,
                userNameClassStyle : userNameClassStyle,
                passwordClassStyle : passwordClassStyle,
                confirmClassStyle : confirmClassStyle,
                emailClassStyle : emailClassStyle
            }
        });
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
                        <article>Join the community and improve your game with <strong>Angular</strong> </article>
                    </section> 
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <span>
                            <input type="text" className = {this.state.errClass.firstNameClassStyle} onChange={this.handleChange} value={this.state.firstName} id="firstName" ref="firstName" name="firstName" placeholder="First Name" />
                            <i id="icon" className="fa fa-user"></i>
                        </span>
                        <span>
                            <input type="text" className = {this.state.errClass.lastNameClassStyle} onChange={this.handleChange} value={this.state.lastName} id="lastName" ref="lastName" name="lastName"  placeholder="Last Name" />
                            <i id="icon" className="fa fa-user"></i>
                        </span>
                        <span>    
                            <input type="email" className = {this.state.errClass.emailClassStyle} onChange={this.handleChange} value={this.state.email} id="email" ref="email" name="email"  placeholder="Email" />
                            <i id="icon" className="fa fa-envelope-o"></i>
                        </span>
                        <span>
                            <input type="text" className = {this.state.errClass.userNameClassStyle} onChange={this.handleChange} value={this.state.userName} id="userName" ref="userName" name="userName"  placeholder="Username" />
                            <i id="icon" className="fa fa-user"></i>
                        </span>
                        <span>
                            <input type="password" className = {this.state.errClass.passwordClassStyle} onChange={this.handleChange} value={this.state.password} id="password" ref="password"  name="password"  placeholder="Password" />
                            <i id="icon" className="fa fa-unlock-alt"></i>
                        </span>
                        <span>
                            <input type="password" className = {this.state.errClass.confirmClassStyle} onChange={this.handleChange} value={this.state.confirmPassword} id="confirmPassword" ref="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />
                            <i id="icon" className="fa fa-lock"></i>
                        </span>
                        <span>
                            <p className="body-div-signin">By registering you agree to our <strong>Terms</strong> and <strong>Privacy Policy</strong></p>
                        </span>
                        <div className="errorMsg">
                            {Object.keys(this.state.errors).map((key,value)=>{
                                if(this.state.errors[key].length) {
                                    return (
                                        <div className="error" key={key}>
                                        {this.state.errors[key]}
                                        </div>
                                    )
                                }
                            })}
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