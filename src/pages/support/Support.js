import React, { Component } from 'react'
import './support.scss' 

/* Import Components */
import CheckBox from './CheckBox';  
import Input from './Input';  
import TextArea from './TextArea';  
import Select from './Select';
import Button from './Button'

class Support extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        age: '',
        gender: '',
        skills: [],
        about: ''
      },

      genderOptions: ['Male', 'Female', 'Others'],
      skillOptions: ['Shopping', 'Transaction', 'Return', 'Other']
    }
  }

  /* This lifecycle hook gets executed when the component mounts */
  
  handleFullName = (e) => {
   let value = e.target.value;
   this.setState( prevState => ({ newUser : 
        {...prevState.newUser, name: value
        }
      }), () => console.log(this.state.newUser))
  }

  handleAge = (e) => {
       let value = e.target.value;
   this.setState( prevState => ({ newUser : 
        {...prevState.newUser, age: value
        }
      }), () => console.log(this.state.newUser))
  }

  handleInput = (e) => {
       let value = e.target.value;
       let name = e.target.name;
   this.setState( prevState => ({ newUser : 
        {...prevState.newUser, [name]: value
        }
      }), () => console.log(this.state.newUser))
  }

  handleTextArea = (e) => {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser, about: value
      }
      }), ()=>console.log(this.state.newUser))
  }


  handleCheckBox = (e) => {

    const newSelection = e.target.value;
    let newSelectionArray;

    if(this.state.newUser.skills.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.skills.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [...this.state.newUser.skills, newSelection];
    }

      this.setState( prevState => ({ newUser:
        {...prevState.newUser, skills: newSelectionArray }
      })
      )
}

  handleFormSubmit = (e) => {
    e.preventDefault();
    let userData = this.state.newUser;
    this.setState(prevState => ({ newUser: userData
    }))
    console.log(userData)
  }

  handleClearForm = (e) => {
  
      e.preventDefault();
      this.setState({ 
        newUser: {
          name: '',
          email: '',
          age: '',
          gender: '',
          skills: [],
          about: ''
        },
      })
  }

  render() {
    return (
        <form className="container-fluid" onSubmit={this.handleFormSubmit}>
          <Input 
            inputType={'text'}
            title= {'Full Name'} 
            name= {'name'}
            value={this.state.newUser.name} 
            placeholder = {'Enter your name'}
            handleChange = {this.handleInput}
          /> {/* Name of the user Name */}
          
          <Input 
            inputType={'email'}
            title= {'Email'} 
            name= {'email'}
            value={this.state.newUser.email} 
            placeholder = {'Enter your email'}
            handleChange = {this.handleInput}
          /> {/* Name of the user Email */}

          <Input 
            inputType={'number'} 
            name={'age'}
            title= {'Age'} 
            value={this.state.newUser.age} 
            placeholder = {'Enter your age'}
            handleChange={this.handleAge} 
          /> {/* Age */} 

          <Select 
            title={'Gender'}
            name={'gender'}
            options = {this.state.genderOptions} 
            value = {this.state.newUser.gender}
            placeholder = {'Select Gender'}
            handleChange = {this.handleInput}
          /> {/* Age Selection */}

          <CheckBox  
            title={'Select a issue section'}
            name={'Select a issue section'}
            options={this.state.skillOptions}
            selectedOptions = { this.state.newUser.skills}
            handleChange={this.handleCheckBox}
          /> {/* Skill */}
          
          <TextArea
            title={'Tell us more about your issue'}
            rows={5}
            value={this.state.newUser.about}
            name={'currentShopInfo'}
            handleChange={this.handleTextArea}
            placeholder={'Describe your past experience related to your issue'}  />{/* About you */}

          <Button 
            action = {this.handleFormSubmit}
            type = {'primary'} 
            title = {'Submit'} 
            style={buttonStyle}
          /> { /*Submit */ }
          
          <Button 
            action = {this.handleClearForm}
            type = {'secondary'}
            title = {'Clear'}
            style={buttonStyle}
          /> {/* Clear the form */}

        </form>
    );
  }
}

const buttonStyle = {
  margin : '10px 20% 10px 20%'
}

export default Support;

