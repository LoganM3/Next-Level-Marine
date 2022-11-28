import '../../styles/Navigation.css'
import {useNavigate} from 'react-router-dom'

function Navigation(){

    const navigate = useNavigate();
   
    const navigateToGarmin = () =>{
        navigate('/Garmin-nav')
      }
    const navigateToSimrad = () =>{
        navigate('/Simrad-nav')
      }
    const navigateToFuruno = () =>{
        navigate('/Furuno-nav')
      }
    const navigateToRayMarine = () =>{
        navigate('/RayMarine-nav')
      }

    return(
        <div>
             <div className='nav-companys' id='garmin'>
                <h1>Garmin</h1>
                <button onClick={navigateToGarmin}>View All</button>
            </div>
            <div className='nav-companys' id='simrad'>
                <h1>Simrad</h1>
                <button onClick={navigateToSimrad}>View All</button>
            </div>
            <div className='nav-companys' id='furuno'>
                <h1>Furuno</h1>
                <button onClick={navigateToFuruno}>View All</button>
            </div>
            <div className='nav-companys' id='raymarine'>
                <h1>RayMarine</h1>
                <button onClick={navigateToRayMarine}>View All</button>
            </div>
        </div>
    )
}

export default Navigation