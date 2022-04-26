import React from 'react'
import './SobreNosotros.css'

const SobreNosotros = () => {
  return (
    <div className='container'>
      <div className='row '>
        <div className='col img-col-izq'>
        <img className='img-izq' src='https://cdn-3.expansion.mx/dims4/default/725259e/2147483647/strip/true/crop/620x621+0+0/resize/1200x1202!/format/webp/quality/90/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2Fmedia%2F2016%2F03%2F08%2Fbelinsa-zapatos.jpg' alt='Diseñadoras'/>
        </div>
        <div className='col'>
          <h2 className='p-3'>Te contamos quienes somos:</h2>
          <p className='p-3'>Somos Mujeres conectadas por un mismo amor, el de los zapatos, en búsqueda de productos de moda, salimos al mundo con una nueva normalidad, donde nos conectamos primero con nosotras, luego con los afectos y así comenzamos a rearmar la vida que teníamos, dándole mayor valor a cada cosa, disfrutando más, queriendo y sintiendo más, aferradas a una misma realidad, buscando ¨bienestar¨ conectadas a Viamo.</p>
        </div>
        <div className='col'>
          <img className='img-der' src='https://www.eluniverso.com/resizer/Da8R0qx53QfhlJvvrjzsieIgyXI=/1003x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/KKPJR3UH5RBTBD7GRAECVHDHRY.jpg' alt='stand'/>
        </div>
      </div>
      <div className='row '>
        <div className='col img-col-izq'>
          <img className='img-izq' src='https://www.eluniverso.com/resizer/W6I2AuqjO3tBUO3hZbUMDHH4TGM=/1004x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/OLGKSUL2XJCIRKKUTONLUCBEPM.jpg' alt='Manofactura'/>
        </div>
        <div className='col'>
          <h2>Nuevo Centro Shopping, Córdoba, Argentina: </h2>
          <p>No te olvides de visitar nuestro local en Córdoba Capital, local nº 55 </p>
          <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19260.827016598694!2d-64.187531013471!3d-31.41783575781951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943298830933ad09%3A0xb72fd713f4c77c4e!2sNuevocentro%20Shopping!5e0!3m2!1ses!2sar!4v1650377070039!5m2!1ses!2sar"  width="400" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='col'>
          <img className='img-der' src='https://i.pinimg.com/736x/75/21/b6/7521b61247fd3835f8ac1a3d3ac414df--store-interior-design-retail-interior.jpg' alt='stand 2'/>
        </div>
      </div>
    </div>
  )
}

export default SobreNosotros