import React from 'react'
import './HomePage.styles.scss'
import Directory from '../../components/directory/Directory'

export const HomePage = () => {
    return (
        <div className='homepage'>
           <Directory /> 
        </div>
    );
}