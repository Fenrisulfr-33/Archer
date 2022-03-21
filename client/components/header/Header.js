import style from './Header.module.css';
import Nav from '../nav/Nav.js';

export default function Header() {

    return (
        <div className={style.main}>
            <h1 className={style.h1}>
                Archer
            </h1>
            <Nav />
        </div>
    )
}