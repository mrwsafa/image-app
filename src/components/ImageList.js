import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';



class BookList extends React.Component {


    render() {
   
                    return (
                        <section className="page-section" style={{background: theme.bg, color:theme.txt}} id="portfolio">
                        <div className="container">
                            <div className="text-center">
                                <h2 className="section-heading text-uppercase">BookFolio</h2>
                                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                                <button type="button" className="btn btn-sm btn-info" style={{marginTop: '-70px'}}
                                onClick={changeTheme}>Change Theme</button>
                            </div>
                            <div className="row">
                                <ImageCard/>
                               
        
                            </div>
                        </div>
                    </section>
                    )
                }}
           


    

export default ImageList;
