import './Lives.css'

const Lives = ({lives}) => {
    return (
        <div className="container">
            <span>Lives: </span>
            <span className='lives'>{lives}</span>
        </div>
    )
}

export default Lives
