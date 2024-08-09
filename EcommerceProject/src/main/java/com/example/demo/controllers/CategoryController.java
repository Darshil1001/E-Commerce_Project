package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Category;
import com.example.demo.services.CategoryService;

@RestController
@RequestMapping("/categories")
@CrossOrigin(origins = "http://localhost:4200")
public class CategoryController {
	
	@Autowired
	private CategoryService categoryService;

	@GetMapping
	public List<Category> getAllCategories(){
		return categoryService.findAll();
	}
	
	@PostMapping("/addCategory")
	public void addCategory(@RequestBody Category c) {
		Category c1 = categoryService.addCategory(c);
		System.out.println(c1);
	}
	
	@GetMapping("/{id}")
    public Category getCategory(@PathVariable int id) {
        return categoryService.getCategory(id);
    }

    @PutMapping("/{id}")
    public Category updateCategory(@PathVariable int id, @RequestBody Category category) {
        return categoryService.updateCategory(id, category);
    }

    @DeleteMapping("/{id}")
    public void deleteCategory(@PathVariable int id) {
        categoryService.deleteCategory(id);
    }
	
}
