import React from 'react'

function SoundSection() {

    const handleLearnMore = () => {
        const element = document.querySelector('.display-section');
        window.scrollTo({
            top: element?.getBoundingClientRect().bottom,
            left: 0,
            behavior: 'smooth'
        })
    }


    return (
        <div className="sound-section wrapper">
            <div className="body">
                <div className="sound-section-content content">
                    <h2 className="title">新的声音系统</h2>
                    <p className="text">更好的系统.</p>
                    <span className="description">
                        每月5699起
                    </span>
                    <ul className="links">
                        <li>
                            <button className="button">购买</button>
                        </li>
                        <li>
                            <a className="link" onClick={handleLearnMore}>了解更多</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SoundSection
