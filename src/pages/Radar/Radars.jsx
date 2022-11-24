import '../../styles/Navigation.css'
import {useNavigate} from 'react-router-dom'

function Radars(){

    const navigate = useNavigate();
   
    const navigateToGarminR = () =>{
        navigate('/Garmin-Radar')
      }
    const navigateToSimradR = () =>{
        navigate('/Simrad-Radar')
      }
    const navigateToFurunoR = () =>{
        navigate('/Furuno-Radar')
      }
    const navigateToRayMarineR = () =>{
        navigate('/RayMarine-Radar')
      }

    return(
        <div>
            <div className='nav-companys'>
                <h1>Garmin</h1>
                <button onClick={navigateToGarminR}>View All</button>
            </div>
            <div className='nav-companys'>
                <h1>Simrad</h1>
                <button onClick={navigateToSimradR}>View All</button>
            </div>
            <div className='nav-companys'>
                <h1>Furuno</h1>
                <button onClick={navigateToFurunoR}>View All</button>
            </div>
            <div className='nav-companys'>
                <h1>RayMarine</h1>
                <button onClick={navigateToRayMarineR}>View All</button>
            </div>
        </div>
    )
}

export default Radars