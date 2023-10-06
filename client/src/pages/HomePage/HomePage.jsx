import style from './style.module.scss';
import Header from '../../components/Header/Header'


export default function HomePage() {
    const arr = [
        {
            id: 1,
            header: 'C# Course',
            description: 'В течение курса студенты ознакомятся с ...',
            location: 'Минск',
        },
        {
            id: 2,
            header: 'JavaScript Course',
            description: 'В течение курса студенты ознакомятся с ...',
            location: 'Минск',
        },
        {
            id: 3,
            header: 'C# Course',
            description: 'В течение курса студенты ознакомятся с ...',
            location: 'Минск',
        },
        {
            id: 4,
            header: 'JavaScript Course',
            description: 'В течение курса студенты ознакомятся с ...',
            location: 'Минск',
        },
        {
            id: 5,
            header: 'JavaScript Course',
            description: 'В течение курса студенты ознакомятся с ...',
            location: 'Минск',
        },
        {
            id: 6,
            header: 'JavaScript Course',
            description: 'В течение курса студенты ознакомятся с ...',
            location: 'Минск',
        },
        
    ];

    return (
        <div>
            <Header />
            <div className={style.wrapper} >
                <div className={style.inpWrapper}>
                    <input type="text" placeholder='Enter the name of a course' />
                    <div className={style.btnTag}>Search</div>
                </div>
            </div>

            <div className={style.blockWrapper}>
                <div className={style.blocks}>
                    {arr.map((el, index) => (
                        <div className={style.course} key={index}>
                            <h3>{el.header}</h3>
                            <p>{el.description}</p>
                            <p>{el.location}</p>
                        </div>
                    )
                    )}
                </div>
            </div>
        </div>
    )
}