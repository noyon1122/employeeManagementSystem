package com.noyon.main.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.noyon.main.dto.EmployeeDto;
import com.noyon.main.entity.Employee;
import com.noyon.main.mapper.EmployeeMapper;
import com.noyon.main.repository.EmployeeRepo;
import com.noyon.main.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {
	
	@Autowired
	private EmployeeRepo employeeRepo;

	@Override
	public EmployeeDto createEmployee(EmployeeDto employeeDto) {
		// TODO Auto-generated method stub
		Employee employee=EmployeeMapper.mapToEmployee(employeeDto);
		Employee savEmployee=employeeRepo.save(employee);
		return EmployeeMapper.mapToEmployeeDto(savEmployee);
	}

}
