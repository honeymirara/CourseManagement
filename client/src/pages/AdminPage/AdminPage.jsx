import style from './style.module.scss';
import Header from '../../components/Header/Header'


export default function HomePage() {
    return (

        <div>
            <Header />
            <div className={style.wrapper}>
                <div className={style.options}>
                    <h2>Create</h2>
                    <h2>Update</h2>
                    <h2>Delete</h2>
                </div>
                <div className={style.inputs}>
                    <div>
                        <p>Course</p>
                        <input type="text" placeholder='Enter the name of course'/>
                    </div>
                    <div>
                        <p>Description</p>
                        <input type="text" placeholder='Enter the describtion of course'/>
                    </div>

                </div>

                <div className={style.btn}> apply</div>
            </div>
        </div>
    )

}