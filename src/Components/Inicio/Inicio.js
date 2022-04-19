import React from 'react'

function Inicio() {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{width : '800px', margin : '25px 50px', position: 'absolute'}}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://i.ibb.co/tzBnJjf/FAUSTINA.png" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://www.doquier.com.ar/index.php/fundacion-ecla-celebro-el-dia-mundial-del-corazon-con-su-septima-caminata/viamo-zapatos-1/" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://i.ibb.co/BCV5fvW/TEMPORADA.png" className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <h2 style={{width: '300px', margin: '25px 1400px', position: 'absolute'}}>Nuevo Centro Shopping, Córdoba, Argentina: </h2>
      <p style={{position: 'absolute', margin: '150px 1400px', width: '300px'}}>No te olvides de visitar nuestro local en Córdoba Capital, local nº 55 </p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19260.827016598694!2d-64.187531013471!3d-31.41783575781951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943298830933ad09%3A0xb72fd713f4c77c4e!2sNuevocentro%20Shopping!5e0!3m2!1ses!2sar!4v1650377070039!5m2!1ses!2sar"  width="400" height="300" style={{border:'0', margin: '25px 950px', position: 'absolute'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Inicio