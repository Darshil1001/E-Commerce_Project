package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Product;
import com.example.demo.repositories.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository productRepository;
	
	public List<Product> findByCategoryId(int id){
		return productRepository.findByCategoryId(id);
	}
	
	public Product addProduct(Product product) {
		return productRepository.save(product);
	}
	

}
