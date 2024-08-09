package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Product;
import com.example.demo.repositories.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository productRepository;
	
	public List<Product> findAllProducts(){
		return productRepository.findAll();
	}
	
	public List<Product> findByCategoryId(int id){
		return productRepository.findByCategoryId(id);
	}
	
	public Optional<Product> findById(int id){
		return productRepository.findById(id);
	}
	
	public Product addProduct(Product product) {
		return productRepository.save(product);
	}

	public Product updateProduct(int id, Product product) {
		if (productRepository.existsById(id)) {
			product.setId(id);
			return productRepository.save(product);
		} else {
			return null; // Or handle it as needed, e.g., throw an exception
		}
	}

	public void deleteProduct(int id) {
		productRepository.deleteById(id);
	}
}
