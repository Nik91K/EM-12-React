import './style.css'
import {textComponentType} from '../../types/mainPage'

const TextContainer = (props:textComponentType) => {
    return (
        <>
            <div className={`news-main ${props.isImportant ? 'important' : ''}`}>
                <div className='time'>
                    <p>{props.time}</p>
                </div>
                <div className='title'>
                    <a href={props.link} className='title-link' target="_blank">
                        {props.title}
                    </a>
                </div>
            </div>
        </>
    )
}

export default TextContainer