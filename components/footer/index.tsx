import Logo from '../../assets/icons/logo';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
          
  <a><img src="/images/novemnewblack.png" alt="E-Shop Logo" className="site-logo" style={{ width: '250px', height: 'auto' }} /></a>

            <ul className="site-footer__social-networks">
              <li><a href="#"><i className="icon-facebook"></i></a></li>
              <li><a href="#"><i className="icon-twitter"></i></a></li>
              <li><a href="#"><i className="icon-linkedin"></i></a></li>
              <li><a href="#"><i className="icon-instagram"></i></a></li>
              <li><a href="#"><i className="icon-youtube-play"></i></a></li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Compra en línea</li>
              <li><a href="#">Estado del pedido</a></li>
              <li><a href="#">Envío y entrega</a></li>
              <li><a href="#">Devoluciones</a></li>
              <li><a href="#">Opciones de pago</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
            <ul>
              <li>Información</li>
              <li><a href="#">Tiendas</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Comentario del Sitio Web</a></li>
            </ul>
            <ul>
              <li>Contacto</li>
              <li><a href="#">contacto@novemsrl.com</a></li>
              <li><a href="#">Celular: +59 2604609798</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="site-footer__bottom">
        <div className="container">
          <p> DESARROLLADO POR DESWEBY - © NOVEM SRL 2024. TODOS LOS DERECHOS RESERVADOS.</p>
        </div>
      </div>
    </footer>
  )
};


export default Footer