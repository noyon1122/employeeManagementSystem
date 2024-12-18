package com.noyon.main.service.impl;

import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.noyon.main.entity.Employee;
import com.noyon.main.exception.ResourceNotFoundException;

import com.noyon.main.repository.EmployeeRepo;
import com.noyon.main.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {
	
	@Autowired
	private EmployeeRepo employeeRepo;

	@Override
	public Employee createEmployee(Employee employee) {
		
		
		
		Employee savEmployee=employeeRepo.save(employee);
		return savEmployee;
	}

	@Override
	public Employee getEmployeeById(long employeeId) {
		
		Employee employee=employeeRepo.findById(employeeId).orElseThrow(
				()-> new ResourceNotFoundException("Employee is not exists with this id : " + employeeId));
		return employee;
	}

	@Override
	public List<Employee> getAllEmployees() {
	
		List<Employee> employees=employeeRepo.findAll();
		return employees;
	}

	@Override
	public Employee updateEmployee(Employee employee, long employeeId) {
		Employee existingEmployee=employeeRepo.findById(employeeId).orElseThrow(
				()-> new ResourceNotFoundException("Employee is not exists with this id : " + employeeId));
		existingEmployee.setFirstName(employee.getFirstName());
		existingEmployee.setLastName(employee.getLastName());
		existingEmployee.setEmail(employee.getEmail());
		employeeRepo.save(existingEmployee);
		return existingEmployee;
	}

	@Override
	public void deleteEmployee(long employeeId) {
		Employee employee=employeeRepo.findById(employeeId).orElseThrow(	
				()-> new ResourceNotFoundException("Employee is not exists with this id : " + employeeId));
		
		employeeRepo.deleteById(employeeId);
		
	}



}
