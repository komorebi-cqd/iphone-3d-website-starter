import React, { useState } from 'react';
import Logo from '../assets/images/logo.svg';
import Search from '../assets/images/search.svg'
import Store from '../assets/images/store.svg'


function Nav() {
    const [navList,] = useState(['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'Entertainment', 'Accessories', 'Support'])
    return (
        <nav className="nav-wrapper">
            <div className="nav-content">
                <ul className='list-styled'>
                    <li>
                        <img src={Logo} alt="苹果" />
                    </li>
                    {navList.map(nav => (
                        <li key={nav}>
                            <a className="link-styled" >{nav}</a>
                        </li>
                    ))}

                    <li>
                        <img src={Search} alt="搜索" />
                    </li>
                    <li>
                        <img src={Store} alt="搜索" />
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Nav
