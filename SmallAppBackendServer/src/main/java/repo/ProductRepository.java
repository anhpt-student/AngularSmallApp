package repo;
import org.springframework.data.repository.CrudRepository;

import model.Product;
public interface ProductRepository extends CrudRepository<Product, Long>{
	 @Override
	 Iterable<Product> findAll();
}
