import MainStatistics from './mainChart/mainChart'
import CircularStatistic from './circularStatistics/circularStatistics'
import './style.css'
function DataBlock() {
    return(
        <div className='statistic'>
            <MainStatistics />
            <CircularStatistic />
        </div>
    )
}

export default DataBlock