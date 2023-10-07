import style from './style.module.scss';
import Header from '../../components/Header/Header'
import { useState } from 'react'

export default function HomePage() {

    const [opt, setOpt] = useState('Create');

    const changeOpt = (event) => {
        setOpt(event.target.textContent)
    }

    const showContent = () => {
        if (opt === 'Create') {
            return (
                <>
                    <div className={style.inputs}>
                        <div>
                            <p>Course</p>
                            <input type="text" placeholder='Enter the name of course' />
                        </div>
                        <div>
                            <p>Description</p>
                            <input type="text" placeholder='Enter the describtion of course' />
                        </div>
                        <div>
                            <p>Location</p>
                            <input type="text" placeholder='Enter the City' />
                        </div>

                    </div>
                </>
            )
        } else if (opt === 'Update') {
            return (
                <>
                    <div className={style.inputs}>
                        <div>
                            <p>Course</p>
                            <input type="text" placeholder='Enter the name of course' />
                        </div>
                        <div>
                            <p>Description</p>
                            <input type="text" placeholder='Enter the describtion of course' />
                        </div>
                        <div>
                            <p>Location</p>
                            <input type="text" placeholder='Enter the City' />
                        </div>
                        <div>
                            <p>ID</p>
                            <input type="text" placeholder='Enter Id' />
                        </div>

                    </div>
                </>
            )
        } else if (opt === 'Delete') {
            return (
                <>
                    <div className={style.inputs}>
                        <div>
                            <p>Course</p>
                            <input type="text" placeholder='Enter the name of course' />
                        </div>
                    </div>
                </>)
        }
    }



    return (

        <div>
            <Header />
            <div className={style.wrapper}>
                <div className={style.options}>
                    <h2 onClick={changeOpt}>Create</h2>
                    <h2 onClick={changeOpt}>Update</h2>
                    <h2 onClick={changeOpt}>Delete</h2>
                </div>
                {/*  <div className={style.inputs}>
                    <div>
                        <p>Course</p>
                        <input type="text" placeholder='Enter the name of course' />
                    </div>
                    <div>
                        <p>Description</p>
                        <input type="text" placeholder='Enter the describtion of course' />
                    </div>

                </div> */}
                {showContent()}

                <div className={style.btn}> apply</div>
            </div>
        </div>
    )

}