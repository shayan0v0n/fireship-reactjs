import {useEffect, useState} from 'react'

const useDarkMode = props => {
    let [theme, setTheme] = useState(false)

    const taggleTheme = () => {
        if (!theme) {
            localStorage.setItem('theme', JSON.stringify(true))
            setTheme(true)
            window.location.reload()
        }else {
            localStorage.setItem('theme', JSON.stringify(false))
            setTheme(false)
            window.location.reload()
        }
    }

    useEffect(() => {
        const currentTheme = JSON.parse(localStorage.getItem('theme'))
        if (currentTheme) {
            setTheme(currentTheme)
        }
    }, [])
    
    return [theme, taggleTheme]
}

export default useDarkMode