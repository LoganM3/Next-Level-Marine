import '../../styles/Lighting.css'
import {useNavigate} from 'react-router-dom'

function Lighting(){

    const navigate = useNavigate();
   
    const navigateToLumitec = () =>{
        navigate('/Lumitec')
      }
    const navigateToLumishore = () =>{
        navigate('/Lumishore')
      }

    return(
        <div>
           <div className='lumitec-container'>
                <h1>Lumitec</h1>
                <button onClick={navigateToLumitec}>View All</button>
            </div>
            <div className='lumishore-container'>
                <h1>Lumishore</h1>
                <button onClick={navigateToLumishore}>View All</button>
            </div>

        </div>
    )
}

export default Lighting