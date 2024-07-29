package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Category;
import com.example.demo.services.CategoryService;

@RestController
@RequestMapping("/categories")
public class CategoryController {
	
	@Autowired
	private CategoryService categoryService;

	@GetMapping
	public List<Category> getAllCategories(){
		return categoryService.findAll();
	}
	
	@PostMapping("/addCategory")
	public void addCategory(@RequestBody Category c) {
		System.out.println(c.getName());
		Category c1 = categoryService.addCategory(c);
		System.out.println(c1);
	}
	
	
}
