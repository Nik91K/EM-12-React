import './index.css'
import { ChildrenType } from '../../types/bootstrapPage.ts'

const BootstrapContainerPage = (props:ChildrenType) => {
    return (
        <div className='bootstrap-main-div'>
            <div className='bootstrap-header'>
                <img src={props.icon} alt='icon' className='bootstrap-icon'/>
                <h2 className='bootstrap-title'>
                    {props.title}
                </h2>
            </div>
            <div className="bootstrap-main">
                <p className="bootstrap-text">
                    {props.text}
                </p>
                {props.children}
            </div>
        </div>
    )
}

export default BootstrapContainerPage
