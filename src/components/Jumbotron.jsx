import React from 'react'
import Iphone from '../assets/images/iphone-14.jpg'
import HoldingIphone from '../assets/images/iphone-hand.png'

function Jumbotron() {
    const handleLearnMore = () =>() => {
        const element = document.querySelector('.sound-section');
        console.log(element);
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className="jumbotron-section wrapper">
            <h2 className="title">新</h2>
            <img src={Iphone} alt="iphone 14 pro" className="logo" />
            <p className="text">
                越来越好
            </p>
            <span className=''>每月5999元其，以旧换新4599起</span>
            <ul className="links">
                <li>
                    <button className="button">购买</button>
                </li>
                <li>
                    <a className='link' onClick={handleLearnMore()}>了解更多</a>
                </li>
            </ul>
            <img src={HoldingIphone} alt="iPhone" className="iphone-img" />
        </div>
    )
}

export default Jumbotron