import '../../styles/Audio-Home.css'
import {useNavigate} from 'react-router-dom'

function AudioHome(){

    const navigate = useNavigate();
   
    const navigateToJL = () =>{
        navigate('/JL-Audio')
      }
    const navigateToFusion = () =>{
        navigate('/Fusion-Audio')
      }
    const navigateToWetsound = () =>{
        navigate('/Wetsound-Audio')
      }
    const navigateToRoswell = () =>{
        navigate('/Roswell-Audio')
      }
    const navigateToRockFord = () =>{
        navigate('/RockFord-Audio')
      }

    return(
        <div className="audio-container">
            <div className='audio-companys' id='JL'>
                <h1>JL Audio</h1>
                <button onClick={navigateToJL}>View All</button>
            </div>
            <div className='audio-companys'  id='Fusion'>
                <h1>Fusion Audio</h1>
                <button onClick={navigateToFusion}>View All</button>
            </div>
            <div className='audio-companys'  id='Wetsound'>
                <h1>Wetsound</h1>
                <button onClick={navigateToWetsound}>View All</button>
            </div>
            <div className='audio-companys'  id='Roswell'>
                <h1>Roswell</h1>
                <button onClick={navigateToRoswell}>View All</button>
            </div>
            <div className='audio-companys'  id='Rockford'>
                <h1>RockFord Fosgate</h1>
                <button onClick={navigateToRockFord}>View All</button>
            </div>
        </div>
    )
}

export default AudioHome