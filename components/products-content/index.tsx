import { useState } from 'react';
import List from './list';

const ProductsContent = () => {
  const [orderProductsOpen, setOrderProductsOpen] = useState(false);
  
  return (
    <section className="products-content">
      <div className="products-content__intro">
        <h2>Adoquines <span>(10)</span></h2>
        <button type="button" onClick={() => setOrderProductsOpen(!orderProductsOpen)} className="products-filter-btn"><i className="icon-filters"></i></button>
        <form className={`products-content__filter ${orderProductsOpen ? 'products-order-open' : ''}`}>
          <div className="products__filter__select">
            <h4>Mostrar productos: </h4>
            <div className="select-wrapper">
              <select>
                <option>Popular</option>
                <option>Adoquines</option>
              </select>
            </div>
          </div>
          <div className="products__filter__select">
            <h4>Ordenar por: </h4>
            <div className="select-wrapper">
              <select>
                <option>Popular</option>
                <option>Mas vendidos</option>
                <option>Mayor Precio</option>
                <option>Menor Precio</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      <List />
    </section>
  );
};
  
export default ProductsContent
  