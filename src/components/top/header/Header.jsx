import s from './Header.module.sass'
import logo from '../../../images/top_logo.svg'
import lens from '../../../images/top_search.svg'
import {useEffect, useState} from "react";

const getWindowWidth = () => window.innerWidth

const Header = () => {

    const [windowWidth, setWindowWidth] = useState(getWindowWidth())

    useEffect(() => {
        window.addEventListener('resize', () => setWindowWidth(getWindowWidth()))
    }, [])

    return (
        <div className={s.wrapper}>
            <span className={s.logotype}>
                <img className={s.logotype__image} src={logo} alt="logo"/>
                <span className={s.logotype__text}>Funiro</span>
            </span>
            <nav className={s.navbar}>
                <span className={s.navbar__item}>Products</span>
                <span className={s.navbar__item}>Rooms</span>
                <span className={s.navbar__item}>Inspirations</span>
            </nav>
            <span className={s.search}>
                <img className={s.search__lens}
                     src={lens} alt="lens"/>
                <input className={s.search__input}
                       type="text"
                       placeholder={windowWidth > 540 ? "Search for minimalist chair" : "Search"}/>
            </span>
        </div>
    )
}

export default Header