package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Employee;
import com.example.demo.Respository.EmployeeRespository;

@Service
public class EmployeeService {

	@Autowired
	EmployeeRespository employeeRespository;
	
	
	public void saveEmployee(Employee emp) {
		employeeRespository.save(emp);
	}
	
	public List<Employee> getEmployees() {
		return employeeRespository.findAll();
	}
	
	public Employee getEmployeeById(int id) {
		return employeeRespository.findById(id).orElse(null);
	}
	
	public Employee getEmployeeByName(String name) {
		return employeeRespository.findByName(name);
	}
	
	public void deleteEmployeeById(int id) {
		employeeRespository.deleteById(id);
	}
	
	public void deleteEmployeeByName(String name) {
		employeeRespository.deleteByName(name);
	}
	
	public Employee updateEmployee(Employee emp) {
		Employee e = employeeRespository.saveAndFlush(emp);
		return e;
		
	}
	
}
