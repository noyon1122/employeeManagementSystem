package com.noyon.main.service;

import java.util.List;

import com.noyon.main.entity.Employee;



public interface EmployeeService {

	Employee createEmployee(Employee employee);
	
	Employee getEmployeeById(long employeeId);
	
	List<Employee> getAllEmployees();
	
	Employee updateEmployee(Employee employee, long employeeId);
	
	public void deleteEmployee(long employeeId);
}
