package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Employee;
import com.example.demo.Service.EmployeeService;

@RestController
@RequestMapping("/Employee")
public class EmployeeController {
	
	@Autowired
	EmployeeService employeeService;
	
	@PostMapping("/addEmployee")
	public void addEmployee(@RequestBody Employee employee) {
		employeeService.saveEmployee(employee);
	}
	
	@GetMapping("/getAllEmployees")
	public List<Employee> getAllEmployees() {
		return employeeService.getEmployees();
	}
	
	@GetMapping("/getEmployeeById/{id}")
	public Employee getEmployeeById(@PathVariable int id) {
		return employeeService.getEmployeeById(id);
	}
	
	@GetMapping("/getEmployeeByName/{name}")
	public Employee getEmployeeById(@PathVariable String name) {
		return employeeService.getEmployeeByName(name);
	}
	
	@DeleteMapping("/deleteEmployeeById/{id}")
	public void deleteEmployeeById(@PathVariable int id) {
		employeeService.deleteEmployeeById(id);
	}
	
	@DeleteMapping("/deleteEmployeeByName/{name}")
	public void deleteEmployeeById(@PathVariable String name) {
		employeeService.deleteEmployeeByName(name);
	}
	
	@PutMapping("/updateEmployee/{id}")
	public Employee updateEmployee(@PathVariable int id, @RequestBody Employee emp) {
		emp.setId(id);
		Employee e = employeeService.updateEmployee(emp);
		return e;
	}
	

	
	

}
