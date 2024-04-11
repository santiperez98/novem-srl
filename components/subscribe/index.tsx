const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div style={{backgroundImage: 'url(https://www.bloquesdecemento.com.ar/wp-content/uploads/2020/12/Captura-de-Pantalla-2020-12-16-a-las-13.39.35.png)'}} className="subscribe__content">
          <h4>Suscríbete a nuestra newsletter y recibe ofertas exclusivas cada semana</h4>

          <form className="subscribe__form">
            <input type="email" placeholder="Email address" />
            <button type="submit" className="btn btn--rounded btn--yellow">Suscribir</button>
          </form>
        </div>
      </div>
    </section>
  )
};


export default Subscribe