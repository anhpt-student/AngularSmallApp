package Angular.productapp.Repository;

import org.springframework.data.repository.CrudRepository;

import Angular.productapp.Model.Product;


public interface ProductRepository extends CrudRepository<Product, Long>{
	 @Override
	 Iterable<Product> findAll();
}