import '../../styles/Comunication.css'
import {useNavigate} from 'react-router-dom'

function Comunication(){


    const navigate = useNavigate();
   
    const navigateToVHFS = () =>{
        navigate('/VHFS')
      }
    const navigateToAntennas = () =>{
        navigate('/Antennas')
      }
    const navigateToEberes = () =>{
        navigate('/Eberes')
      }

    return(
        <div>
            <div className='comunication-companys' id='vhfs'>
                <h1>VHFS</h1>
                <button onClick={navigateToVHFS}>View All</button>
            </div>
            <div className='comunication-companys' id='antennas'>
                <h1>Antennas</h1>
                <button onClick={navigateToAntennas}>View All</button>
            </div>
            <div className='comunication-companys' id='eberes'>
                <h1>Eberes</h1>
                <button onClick={navigateToEberes}>View All</button>
            </div>
        </div>
    )
}

export default Comunication