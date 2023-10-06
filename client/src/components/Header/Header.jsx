import style from './style.module.scss'
import { Link } from 'react-router-dom'

export default function Hedaer() {
    return (
        <>
            <div className={style.container}>
                <h1 className={style.label}>CoursesRUD.</h1>
                <div className={style.nav}>
                    <p>
                        <Link to={'/admin'}>administration</Link></p>
                    <p>
                        <Link to={'/'}>viewing</Link>
                    </p>
                </div>
                

            </div>
        </>
    )
}