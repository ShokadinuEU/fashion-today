import React from 'react';


const Email = (props) => {
	return (  
  <div className="form-group">
    <label for={props.email} className="form-label">{props.title}</label>
    <input
      className="form-control"
      id={props.email}
      name={props.email}
      type={props.inputType}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder} 
      {...props} />
  </div>
)
}

export default Email