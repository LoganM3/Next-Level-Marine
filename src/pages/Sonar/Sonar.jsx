import '../../styles/Sonar.css'
import {useNavigate} from 'react-router-dom'

function Sonar(){

    const navigate = useNavigate();
   
    const navigateTogarmin = () =>{
        navigate('/Garmin-sonar')
      }
    const navigateTosimrad = () =>{
        navigate('/Simrad-sonar')
      }
    const navigateTofuruno = () =>{
        navigate('/Furuno-sonar')
      }
    const navigateToairmar = () =>{
        navigate('/AirMar-sonar')
      }

    return(
        <div>
              <div className='garmin-container'>
                <h1>Garmin</h1>
                <button onClick={navigateTogarmin}>View All</button>
            </div>
            <div className='simrad-container'>
                <h1>Simrad</h1>
                <button onClick={navigateTosimrad}>View All</button>
            </div>
            <div className='furuno-container'>
                <h1>Furuno</h1>
                <button onClick={navigateTofuruno}>View All</button>
            </div>
            <div className='airmar-container'>
                <h1>AirMar</h1>
                <button onClick={navigateToairmar}>View All</button>
            </div>
        </div>
    )
}

export default Sonar