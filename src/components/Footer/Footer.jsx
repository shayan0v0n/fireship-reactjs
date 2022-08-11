import './Footer.scss'
import useDarkMode from '../../hooks/useDarkMode'
import { useEffect, useState } from 'react'

const Footer = props => {
    const [theme, taggleTheme] = useDarkMode()

    return (
        <footer className={theme ? 'footer-dark' : 'footer-light'}>
            <div className='footer-texts'>
                <span>Find an issue with this page? <a href="#">Fix it on GitHub</a></span>
                <hr className='w-25 mx-auto' />
                <span>Copyright © 2022 Fireship LLC</span>
                <br />
                <span>Created with REACTJS by Shayan Vosoughi</span>
                <hr className='w-25 mx-auto' />
                <div className='footer-links'>
                    <a href="#">Contributors</a>
                    <a href="#">jobs</a>
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                </div>
                <hr className='w-25 mx-auto' />
                <div className='footer-brands'>
                    <a href="#"><i className='fa fa-youtube'></i></a>
                    <a href="#"><i className='fa fa-twitter'></i></a>
                    <a href="#"><i className='fa fa-github'></i></a>
                </div>
            </div>
        </footer>   
    )
}

export default Footer