package com.noyon.main.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.noyon.main.entity.Employee;
import com.noyon.main.service.EmployeeService;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;
	
	//build add Employee Rest API
	@PostMapping("")
	public ResponseEntity<Employee> saveEmployee(@RequestBody Employee employee)
	{
		Employee saveEmployee=employeeService.createEmployee(employee);
		return new ResponseEntity<Employee>(saveEmployee,HttpStatus.CREATED);
	    
	}
	
	//build get Employee Rest API
	
	@GetMapping("{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") long employeeId)
	{
		Employee employee=employeeService.getEmployeeById(employeeId);
		
		return ResponseEntity.ok(employee);
	}
	
	//build get All Employees Rest API
	
	@GetMapping("")
	public ResponseEntity<List<Employee>> getAllEmployees()
	{
		List<Employee> employees=employeeService.getAllEmployees();
		return ResponseEntity.ok(employees);
	}
	
	//build update Employee Rest API
	
	@PutMapping("{id}")
	public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee,@PathVariable("id") long employeeId)
	{
		Employee  updateEmployee=employeeService.updateEmployee(employee, employeeId);
		return ResponseEntity.ok(updateEmployee);
	}
	
	//build delete Employee Rest API
	
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteEmployee(@PathVariable("id") long employeeId)
	{
		employeeService.deleteEmployee(employeeId);
		return ResponseEntity.ok("Employee Deleted Successfully!");
				
	}
	
	
	
}
