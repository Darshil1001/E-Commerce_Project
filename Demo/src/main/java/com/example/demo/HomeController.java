package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.models.EmpModel;

@Controller
public class HomeController {
	
	@GetMapping("/")
	public String home() {
		System.out.println("Home Page Called ...");
		return "home";
	}
	
	@PostMapping("/add")
	public String addEmp(EmpModel e, Model m) {
		
		
		m.addAttribute("empName",e.getEmpName());
		m.addAttribute("empEmail",e.getEmpEmail());
		System.out.println("Add Page Called");
		return "showData";
	}
}
