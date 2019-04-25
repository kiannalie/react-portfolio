import React from 'react';
import About from '../../style/about';
import { noAuto } from '@fortawesome/fontawesome-svg-core';


export default function() {
    return(
        <div className="about">
            <div className="about-grid">
                <div className="about-photos">
                    <div id="slide2" className="slide">
                    <img src={require('../../../static/assets/images/ki-1.jpg')} />
                    <img src={require('../../../static/assets/images/ki-3.jpg')}/>
                    <img src={require('../../../static/assets/images/test-3.jpg')}/>
                    <img src={require('../../../static/assets/images/ki-2.jpg')}/>
                    </div>
                </div>
                <div className="about-content">
                    <h1> Hi! Here is a little bit about me: </h1>
                    <p> “Finding bugs is what I do in my pass-time!” I always get a strange look when I say that. However, if you are a fellow developer you might have smiled and thought “hey I do to”. </p>
                    <p> When I get asked the question “how long have you been an software engineer?” I don’t hesitate to say “my whole life!“. Since I was a kid i’ve always had the passion of an engineer to find problems and fix them! It wasn’t till a year ago I discovered how many more problems I could solve but with coding! This past year summer I took the opportunity dive head first into the world of coding through the Ken Garf Code To Success program. I spend every morning of my summer after my high-school graduation learning new things like div tags and ternary operators. Best part was when I could finally understand all the coding memes. I was so kindly given from a partnership of Axle41/Merkel and Ken Garf Keys to Success the “CTS top female graduate scholarship” for that year. That winter I was offered a job at programming school named Bottega as a mentor helping students here in the US and also across the world! I was not only able to help students learning multiple languages but also had the opportunity to continue my programming knowledge and take there full time course. This April marks my one year mark of learning and growing as I learn how to code and Ive loved every minute of it! </p>
                </div>
            </div>
            <div className="spacer">
                <p></p>
            </div>
        </div>
    )
}

