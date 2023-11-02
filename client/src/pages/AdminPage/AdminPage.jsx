import style from './style.module.scss';
import Header from '../../components/Header/Header'
import { useState, useEffect } from 'react'
import { useCreateCourseMutation, useUpdateCourseMutation, useDeleteCourseMutation } from '../../services/courseApi';

export default function HomePage() {

    const [opt, setOpt] = useState('Create');

    const [value, setValue] = useState({
        id: '',
        course: '',
        description: '',
        city: ''
    })

    const [createCourse] = useCreateCourseMutation()
    const [updateCourse] = useUpdateCourseMutation()
    const [deleteCourse] = useDeleteCourseMutation()

    useEffect(() => {
        setValue({})
    }, [opt])

    const changeOpt = (event) => {
        setOpt(event.target.textContent)
    }

    const changeValue = (event) => {
        setValue({ ...value, [event.target.name]: event.target.value })
    }

    async function send() {
        console.log(value)
        if (opt == 'Create') {
            const temp = await createCourse(value)
            console.log(temp.data);
        } else if (opt == 'Update') {
            const temp = await updateCourse(value)
            console.log(temp.data)
        } else if (opt == 'Delete') {
            const temp = await deleteCourse(value)
            console.log(temp.data)
        }
    }

    const showContent = () => {
        if (opt === 'Create') {
            return (
                <>
                    <div className={style.inputs}>
                        <div>
                            <p>Course</p>
                            <input value={value?.course || ''} type="text" placeholder='Enter the name of course' onChange={changeValue} name='course' />
                        </div>
                        <div>
                            <p>Description</p>
                            <input value={value?.description || ''} type="text" placeholder='Enter the describtion of course' onChange={changeValue} name='description' />
                        </div>
                        <div>
                            <p>Location</p>
                            <input value={value?.city || ''} type="text" placeholder='Enter the City' onChange={changeValue} name='city' />
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
                            <input value={value?.course || ''} type="text" placeholder='Enter the name of course' onChange={changeValue} name='course' />
                        </div>
                        <div>
                            <p>Description</p>
                            <input value={value?.description || ''} type="text" placeholder='Enter the describtion of course' onChange={changeValue} name='description' />
                        </div>
                        <div>
                            <p>Location</p>
                            <input value={value?.city || ''} type="text" placeholder='Enter the City' onChange={changeValue} name='city' />
                        </div>
                        <div>
                            <p>ID</p>
                            <input value={value?.id || ''} type="text" placeholder='Enter Id' onChange={changeValue} name='id' />
                        </div>

                    </div>
                </>
            )
        } else if (opt === 'Delete') {
            return (
                <>
                    <div className={style.inputs}>
                        <div>
                            <p>ID</p>
                            <input value={value?.id || ''} type="text" placeholder='Enter id of course' onChange={changeValue} name='id' />
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
                {showContent()}
                <div className={style.btn} onClick={send}> apply</div>
            </div>
        </div>
    )

}