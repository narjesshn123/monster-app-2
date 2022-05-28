import React from "react"
import { Container } from "react-bootstrap"
import './FooterStyles.css'
const Footer = () => {
	return(
		<>
		
<footer id="footer">
  <div className="foot-col-1">
    
    <p>Lorem ipsum dolor sit amet, feugiat delicat liberavisse id cum no quo. Lorem ipsum dolor sit amet, feugiat delicat liberavisse id cum no quo. Lorem ipsum dolor sit amet, feugiat delicat liberavisse id cum no quo.</p>
  </div>


    <div className="foot-col-2">
      <h4>Navigation</h4>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Overview</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Buying Options</a></li>
        <li><a href="#">Support</a></li>
      </ul>
    </div>

    <div className="foot-col-3">
      <h4>Extended Navigation</h4>
      <ul>
        <li><a href="#">More</a></li>
        <li><a href="#">More</a></li>
        <li><a href="#">More</a></li>
        <li><a href="#">More</a></li>
        <li><a href="#">More</a></li>
      </ul>
    </div>


  <div className="foot-col-4">
    <h4>Info</h4>
    <p>Wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex commodo consequat. Autem vel hendrerit iriure dolor in hendrerit.</p>
  </div>


</footer>
</>
	)
}

export default Footer