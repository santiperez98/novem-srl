import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured" style={{backgroundImage: 'url(/images/svg.png)'}}>
        <div className="container">
          <article style={{backgroundImage: 'url(/images/1.png)'}} className="featured-item featured-item-large">
            <div className="featured-item__content">
              <h3>Obras Finalizadas!</h3>
              <a href="#" className="btn btn--rounded">Show Collection</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/2.jpg)'}} className="featured-item featured-item-small-first">
            <div className="featured-item__content">
              <h3>Adoquines</h3>
              <a href="#" className="btn btn--rounded">Show products</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/b3.jpg)'}} className="featured-item featured-item-small">
            <div className="featured-item__content">
              <h3>Esta temporada</h3>
              <a href="#" className="btn btn--rounded">View All</a>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Porque nos deberias elegir?</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Envío gratis</h4>
                <p>Todas las compras superiores a $199 son elegibles para envío gratuito</p>
              </div>
            </li>
            
            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
                <h4>Pagos fáciles</h4>
                <p>Todos los pagos se procesan instantáneamente a través de un protocolo de pago seguro.</p>
              </div>
            </li>
            
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>
Garantía de devolución del dinero</h4>
                <p>Si un artículo llegó dañado o cambió de opinión, puede devolverlo para obtener un reembolso completo.</p>
              </div>
            </li>
            
            <li>
              <i className="icon-materials"></i>
              <div className="data-item__content">
                <h4>Calidad Asegurada</h4>
                <p>Diseñados para durar, cada uno de nuestros productos ha sido elaborado con los mejores materiales.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  )
}


export default IndexPage