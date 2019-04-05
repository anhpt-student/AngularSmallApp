package Angular.productapp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import Angular.productapp.Model.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

}