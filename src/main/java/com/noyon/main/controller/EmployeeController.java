package com.noyon.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.noyon.main.dto.EmployeeDto;
import com.noyon.main.service.EmployeeService;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;
	
	@PostMapping("")
	public ResponseEntity<EmployeeDto> saveEmployee(EmployeeDto employeeDto)
	{
		EmployeeDto saveEmployee=employeeService.createEmployee(employeeDto);
		return new ResponseEntity<EmployeeDto>(saveEmployee,HttpStatus.CREATED);
	    
	}
}
