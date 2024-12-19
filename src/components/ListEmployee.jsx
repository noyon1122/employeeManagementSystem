import { useEffect } from "react"
import { useState } from "react"
import { deleteEmployee, listEmployees } from "../services/EmployeeService"
import { useNavigate } from "react-router-dom"

const ListEmployee = () => {

    const [employees,setEmployees]=useState([])
    const navigate =useNavigate()
    useEffect(()=>{
      getAllEmployee();
    },[])

    function getAllEmployee(){
      listEmployees().then((response)=>{
        setEmployees(response.data);
       }).catch(error =>{
        console.error(error);
       }
       )
    }
   function addEmployeeHandler  (){
        navigate("/add-employee"); 
    }

    function updateButtonHandle(id){
      navigate(`/update-employee/${id}`);
    }

    function DeleteButtonHandle(id){
      deleteEmployee(id).then(response=>{
        console.log(response.data)
        getAllEmployee();
      })
      .catch(error=>{
        console.log(error);
      })
    }
  return (
    <div className="container">

       <div>
          <h1 className="text-center">List of Employees</h1>

       </div>
       <div>
       <button type="button" className="btn btn-primary mb-2 ms-3" onClick={addEmployeeHandler}>Add Employee</button>
       </div>
         <div className="container">
         <table className="table table-striped table-bordered">
  <thead>
    <tr>
      <th scope="col">Employee Id</th>
      <th scope="col">Employee First Name</th>
      <th scope="col">Employee Last Name</th>
      <th scope="col">Employee Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {
        employees.map(employee => 
            <tr key={employee.id}>
            <th scope="row">{employee.id}</th>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.email}</td>
            <td className=""> 
              <button type="button" className="btn btn-info " onClick={()=> updateButtonHandle(employee.id)}>Update</button>
              <button type="button" className="btn btn-danger ms-3" onClick={()=> DeleteButtonHandle(employee.id)}>Delete</button>
            </td>
           
          </tr>
        )
    }
  </tbody>
</table>
            </div>  
    </div>

  
  )
}

export default ListEmployee