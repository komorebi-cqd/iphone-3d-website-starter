import React from 'react'

function DisplaySection() {

    const goTop =() => () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    }


    return (
        <div className="display-section wrapper">
            <h2 className="title">新</h2>
            <p className="text">杰出的</p>
            <span className="description">
                显示屏在阳光下亮度最高可达 2 倍
            </span>
            <button className="button">试试我！</button>
            <button className="back-button" onClick={goTop()}>回到顶部</button>
        </div>
    )
}

export default DisplaySection
