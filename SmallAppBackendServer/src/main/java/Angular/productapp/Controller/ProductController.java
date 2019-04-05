package Angular.productapp.Controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Angular.productapp.Model.Product;
import Angular.productapp.Repository.ProductRepository;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class ProductController {
	@Autowired
	ProductRepository repository;
	
	@GetMapping("/products")
	public List<Product> getAllProducts(){
		return repository.findAll();
	}
	@PostMapping("/products")
	public Product createProduct(@Valid @RequestBody Product product) {
		return repository.save(product);
	}

	@DeleteMapping("/products/{id}")
	public ResponseEntity<String> deleteProduct(@PathVariable("nid") long nid){
		repository.deleteById(nid);
		return new ResponseEntity<>("Product has been deleted!", HttpStatus.OK);
	}
}

