import React from 'react'
import './Singlepage.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Singlepost from '../../components/Singlepost/Singlepost'

export default function Singlepage() {
    return (
        <div className='single'>
            {/* post */}
            <Singlepost></Singlepost>
            {/* sidebar component */}
            <Sidebar></Sidebar>
        </div>
    )
}
