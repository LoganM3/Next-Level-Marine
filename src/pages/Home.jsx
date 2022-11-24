import '../styles/Home.css'
import {useNavigate} from 'react-router-dom'


function Home(){
    const navigate = useNavigate();
   
    const navigateToAudio = () =>{
        navigate('/audioHome')
      }
    const navigateToLighting = () =>{
        navigate('/Lighting')
      }
    const navigateToNavigation = () =>{
        navigate('/Navigation')
      }
    const navigateToComunication = () =>{
        navigate('/Comunication')
      }
    const navigateToSonar = () =>{
        navigate('/Sonar')
      }
    const navigateToRadars = () =>{
        navigate('/Radars')
      }

    return(

    <div>
        <div className="home-container">
            <div className='inner-home-containter'>
               <h1>hello</h1>
            </div>
        </div>
        <div className="mission-statment">
            <p> insert statement about company / website etc.....(EMW) electronic 
                marine warehouse is your one stop shop for anything marine electronics...
            </p>
        </div>
        <div className="product-cont">
            <div className="cards">
           
                <button className='audio' onClick={navigateToAudio}>
                    {/* <img className="audio" src='speakers.webp'/> */}
                    <h1>Audio</h1>
                </button>
          
                <button className='lighting-card' onClick={navigateToLighting}>
                    {/* <img className="audio" src='speakers.webp'/> */}
                    <h1>Lighting</h1>
                </button>
          
                <button className='nav-card' onClick={navigateToNavigation}>
                    <h1>Navigation</h1>
                </button>
          
                <button className='com-card' onClick={navigateToComunication}>
                    <h1>Comunication</h1>
                </button>
          
                <button className='sonar-card' onClick={navigateToSonar}>
                    <h1>Sonars</h1>
                </button>
          
                <button className='radar-card' onClick={navigateToRadars}>
                    <h1>Radars</h1>
                </button>
          
            </div>
            
        </div>
    </div>
        

      
    )
}

export default Home