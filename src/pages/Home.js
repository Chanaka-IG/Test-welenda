import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import logo from '../assets/images/logo.png';
import test1 from '../assets/images/register.png';
import test2 from '../assets/images/payments.png';
import test3 from '../assets/images/suspend.png';
import test4 from '../assets/images/search.png';


const cardItems = [
    {image: test1, title:"Registration"},
    {image: test2, title:"Payments"},
    {image: test3, title:"Complain"},
    {image: test4, title:"Search"},
];

const Home = () => {
    return(
        <div className='homeContainer'>
           
            <div className='homeContainerLogo'>
                <img src={logo} alt='' className='home_logo'/>
            </div>
            <div className='cardContainer'>
              {cardItems.map((card)=>(
                  <Card image={card.image} title={card.title}/>
              ))} 
            </div>
        </div>
    );
};

export default Home;