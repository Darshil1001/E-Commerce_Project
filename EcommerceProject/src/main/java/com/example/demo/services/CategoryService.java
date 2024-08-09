package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.models.Category;
import com.example.demo.repositories.CategoryRepository;

@CrossOrigin(origins = "http://localhost:4200")
@Service
public class CategoryService {
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	public List<Category> findAll(){
		return categoryRepository.findAll();
	}
	
	public Category addCategory(Category c) {
		return categoryRepository.save(c);
	}
	
	public Category getCategory(int id) {
        return categoryRepository.findById(id).orElseThrow();
    }

    public Category updateCategory(int id, Category category) {
        Category existingCategory = getCategory(id);
        existingCategory.setName(category.getName());
        return categoryRepository.save(existingCategory);
    }

    public void deleteCategory(int id) {
        categoryRepository.deleteById(id);
    }

}
