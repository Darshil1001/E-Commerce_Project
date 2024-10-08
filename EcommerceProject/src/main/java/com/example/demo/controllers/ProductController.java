package com.example.demo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Product;
import com.example.demo.services.ProductService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/categories")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@GetMapping("/{id}/products")
	public List<Product> findProductByCategory(@PathVariable int id){
		return productService.findByCategoryId(id);
	}
	
	@GetMapping("/{id}/productDetail")
	public Optional<Product> findProductById(@PathVariable int id){
		return productService.findById(id);
	}
	
	@PostMapping("/addProduct")
	public void addProducts(@RequestBody Product product){
		productService.addProduct(product);
	}

}
