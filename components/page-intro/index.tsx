import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation} from 'swiper';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {

  return (
    <section className="page-intro">  
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/bg.jpeg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>PISOS Y PAVIMENTOS DE ADOQUINES DE HORMIGÓN</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>Nuestros productos</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/bg1.jpeg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>GRANDES EMPRESAS NOS ELIGEN!</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>Shop now</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="shop-data" >
        <div className="container">
          <ul className="shop-data__items" >
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Envios gratis</h4>
                <p>Exclusivo para Mendoza</p>
              </div>
            </li>
            
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>99% Clientes satisfechos</h4>
                <p>Nuestros clientes resuelven sus problemas</p>
              </div>
            </li>
            
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Calidad Garantizada</h4>
                <p>30 días de garantía para cada producto de nuestra tienda.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default PageIntro