import React from 'react';
import BannerImg from '../../images/banner-img.png';
import {Link} from 'react-router-dom';
import './Banner.css';
const Banner = () => {
    return (
        <section className="banner-section">
            <div className="container">
                <div className="row align-items-center" style={{height:"100vh"}}>
                    <div className="col-md-4">
                        <h1>Your New Smile <br/> Starts Here</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the</p>
                        <Link className="btn btn-primary" to="/appointment">Get appointment</Link>
                    </div>
                    <div className="col-md-6 d-none d-md-block offset-2">
                        <img className="img-fluid" src={BannerImg} alt=""/>
                    </div>
                </div>
            </div>
           
        </section>
    );
};

export default Banner;