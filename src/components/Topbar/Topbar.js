import React from 'react'
import './Topbar.css'

export default function topbar() {
    return (
        <div className='top'>
            <div className="topleft">
                <i className="myIcon fa-brands fa-facebook-square"></i>
                <i className="myIcon fa-brands fa-linkedin-in"></i>
                <i className="myIcon fa-brands fa-github-square"></i>
                <i className="myIcon fa-brands fa-twitter-square"></i>
            </div>
            <div className="topcenter">
                <ul className='topList'>
                    <li className='topListItem'>HOME</li>
                    <li className='topListItem'>ABOUT</li>
                    <li className='topListItem'>CONTACT</li>
                    <li className='topListItem'>WRITE</li>
                    <li className='topListItem'>LOGOUT</li>
                </ul>
            </div>
            <div className="topright">
                <img className='topImg' src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" srcset="" />
                <i class="myIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
