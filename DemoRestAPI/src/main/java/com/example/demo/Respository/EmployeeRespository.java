package com.example.demo.Respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Employee;

@Repository
public interface EmployeeRespository extends JpaRepository<Employee, Integer>{

	Employee findByName(String name);
	Employee deleteByName(String name);

}
