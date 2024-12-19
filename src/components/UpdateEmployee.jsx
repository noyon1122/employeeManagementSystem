import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployee, updateEmployee } from "../services/EmployeeService";


const UpdateEmployee = () => {
    const [employee,setEmployee]=useState('')
  const nagivate =useNavigate()
 

 const {id}=useParams();
 
  useEffect(()=>{
    getEmployee(id).then(response=>{
        console.log(response.data);
        setEmployee(response.data);
    }).
    catch(error=>{
        console.log(error);
    })
  },[id])

 const handleUpdateEmployee=e=>{
    e.preventDefault();
    const form=e.target;
    const firstName=form.firstName.value;
    const lastName=form.lastName.value;
    const email=form.email.value;

    const newEmployee={firstName,lastName,email};
    setEmployee(newEmployee);

    updateEmployee(newEmployee,id).then(respose=>{
      console.log(respose.data);
      nagivate("/");
    }).catch(error=>{
        console.log(error);
    })
 }
  return (
    <div className="container mb-5">
      <br /><br />
       <div className="row">
       
      <div className="card col-md-6 offset-md-3 offset-md-md-3">

      <h1 className="text-center ">Update Employee</h1>

      <div className="card-body ">

<form className="" onSubmit={handleUpdateEmployee}>
  <div className="form-row">

<div className=" mb-3">
<label htmlFor="validationTooltip01">First name</label>
<input 
type="text" 
className="form-control" 
name="firstName"
defaultValue={employee.firstName}
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
defaultValue={employee.lastName}
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
defaultValue={employee.email}
placeholder="Email" required/>
<div className="invalid-tooltip">
 Please choose a unique and valid username.
</div>
</div>
</div>
</div>
<button className="btn btn-primary" type="submit">Update</button>
</form>
</div>
      </div>
       </div>
       
    </div>
  )
}

export default UpdateEmployee