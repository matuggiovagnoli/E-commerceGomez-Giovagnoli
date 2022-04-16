import React from 'react';
import './footer.css';
import { GrFacebook } from 'react-icons/gr';
import { ImInstagram } from 'react-icons/im';
import { FaTwitterSquare } from 'react-icons/fa';

function Footer() {
  return (
    <div className='w-100 position-absolute bottom-0 start-0'  style={{background: "#6b8e23"}}>
        <div className='d-inline brand fs-2'>FAUSTINA</div>
        <div className='d-inline redes'>
            <p className='d-inline'>Seguinos en:</p>
            <GrFacebook className='footer-icon'/>
            <ImInstagram className='footer-icon'/>
            <FaTwitterSquare className='footer-icon'/>
        </div>
    </div>
  )
}

export default Footer