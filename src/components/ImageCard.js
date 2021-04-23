import React from 'react';
import './ImageCard.css';



class ImageCard extends React.Component { 

    render () {

    
        

            return (
                <div className="col-lg-4 col-sm-6 mb-4">
                <div className="portfolio-item">
                    <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                        <div className="portfolio-hover" style={{background:theme.hover}}>
                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={imageURL} alt="" />
                    </a>
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-heading">{title}</div>
                        <div className="portfolio-caption-subheading text-muted">{}</div>
                    </div>
                </div>
                </div>
            );
        }}

        

export default ImageCard;
