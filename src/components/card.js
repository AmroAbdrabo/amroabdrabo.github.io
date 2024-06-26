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
                    <div className = "date"><i className ="fas fa-calendar-alt" style = {{ color: "rgba(255, 255, 255, 0.75)"}}></i>  &nbsp; {props.specs.date}</div>
                </div>
            </div>
            <div className="post-data">
                <p className = "title"> {props.specs.title} </p>
                <h2 className ="subtitle" style ={{marginBottom: '0%', marginTop: '2%'}}>  {props.specs.sub} </h2>
                <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: "5rem" }}>
                    <div className="description">
                        {props.specs.description}
                    </div>
                    <div className="cta">
                        <a href={`${props.specs.linkto}`}> Read more </a>
                    </div>
                </div>
            </div>
        </div>


    </div>
 
}
export default Card;