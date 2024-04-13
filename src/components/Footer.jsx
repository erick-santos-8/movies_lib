import React from 'react'
import { BiLogoInstagram, BiLogoFacebook, BiLogoTwitter, BiRegistered, BiCameraMovie } from 'react-icons/bi'
import "./Footer.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div id="footer">
        <ul>
            <li><Link><BiLogoFacebook/></Link></li>
            <li><Link><BiLogoInstagram/></Link></li>
            <li><Link><BiLogoTwitter/></Link></li>
        </ul>
        <h2><BiCameraMovie/><h3>Movies Lib</h3><span><BiRegistered/></span></h2>
    </div>
  )
}

export default Footer