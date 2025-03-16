import './style.css'
import {reactComponentType} from '../../types/reactPage'

const ReactContainer = (props:reactComponentType) => {
    return (
        <div className='react-main'>
            <a href={props.link} target="_blank" className='react-main-a'>
                <h2 className='react-header text-hover'>
                    {props.title}
                </h2>
                <p className='date'>
                    {props.date}
                </p>
                <p className='react-text'>
                    {props.text}
                </p>
                <a href={props.link} target="_blank" className='react-link text-hover'>Read more</a>
            </a>
        </div>
    )
}

export default ReactContainer