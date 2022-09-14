import React from 'react'
import { Link } from 'react-router-dom'
import '../styling/card.css';

// A card is a functional component with an image, a link, a title, and some descriptive text
function Card(props){
   
    return <div>
        
        <div className = "card">
            <div className = "image-data">
                <div className ="background-image" style={{backgroundImage: `url("/img/${props.specs.imgName}")`, backgroundRepeat: "no-repeat", backgroundPosition: "center"}} ></div>
                <div className="publication-details">


                
                <Link to = {"abouthtml"} className="author"> 
                    <span className = "fas fa-user" style={{verticalAlign: "middle", lineHeight: "29px"}} > </span>  &nbsp; Amro Abdrabo 
                </Link>
                <div className = "date"><i className ="fas fa-calendar-alt" style = {{ color: "rgba(255, 255, 255, 0.75)"}}></i>  &nbsp; JAN 31, 2021</div>



            </div>
            </div>
                <div className="post-data">
                <h1 className = "title"> {props.specs.title} </h1>
                <h2 className ="subtitle"> A guide for ETHZ students</h2>
                <p className ="description"> fsaf fe ewf fdgdsg adg dag gda  ffsf feqf  dfa f adf fad fad fadf fdf affdf adfadf dsSVMs hjad dahj dsahj adhj dajh adhajd ensembles, deep learning, non-parametric Bayesian methods, PAC learning
                </p>
                <div className ="cta"> 
                <Link to={`${props.specs.linkto}`}> Read more </Link>                 
                </div>
            </div>
        </div>


    </div>
 
}
export default Card;