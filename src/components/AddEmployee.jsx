import { useState } from "react"
import { createEmployee } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";


const AddEmployee = () => {
 const [employee,setEmployee]=useState('')
  const nagivate =useNavigate()
 

 const handleAddEmployee=e=>{
    e.preventDefault();
    const form=e.target;
    const firstName=form.firstName.value;
    const lastName=form.lastName.value;
    const email=form.email.value;

    const newEmployee={firstName,lastName,email};
    setEmployee(newEmployee);

    createEmployee(newEmployee).then(respose=>{
      console.log(respose.data);
      nagivate("/");
    })
 }
 console.log(employee);
  return (
    <div className="container mb-5">
      <br /><br />
       <div className="row">
       
      <div className="card col-md-6 offset-md-3 offset-md-md-3">

      <h1 className="text-center mt-3">Add Employee</h1>

      <div className="card-body ">

<form className="" onSubmit={handleAddEmployee}>
  <div className="form-row">

<div className=" mb-3">
<label htmlFor="validationTooltip01">First name</label>
<input 
type="text" 
className="form-control" 
name="firstName"
placeholder="First name"
required/>
<div className="valid-tooltip">
Looks good!
</div>
</div>

<div className="mb-3">
<label htmlFor="validationTooltip02">Last name</label>
<input 
type="text" 
name="lastName"
className="form-control"
placeholder="Last name"

required/>
<div className="valid-tooltip">
Looks good!
</div>
</div>


<div className="mb-3">
<label htmlFor="validationTooltipUsername">Email</label>
<div className="input-group">
<input 
type="email"
name="email"
className="form-control" 
placeholder="Email" required/>
<div className="invalid-tooltip">
 Please choose a unique and valid username.
</div>
</div>
</div>
</div>
<button className="btn btn-primary" type="submit">Add Employee</button>
</form>
</div>
      </div>
       </div>
       
    </div>
  )
}

export default AddEmployee