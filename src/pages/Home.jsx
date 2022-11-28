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
           
                <button className='catagorys' id='audio' onClick={navigateToAudio}>
                    <h1>Audio</h1>
                </button>
          
                <button className='catagorys' id='lighting-card' onClick={navigateToLighting}>
                    <h1>Lighting</h1>
                </button>
          
                <button className='catagorys' id='nav-card' onClick={navigateToNavigation}>
                    <h1>Navigation</h1>
                </button>
          
                <button className='catagorys' id='com-card' onClick={navigateToComunication}>
                    <h1>Communication</h1>
                </button>
          
                <button className='catagorys2' id='sonar-card' onClick={navigateToSonar}>
                    <h1>Sonars</h1>
                </button>
          
                <button className='catagorys2' id='radar-card' onClick={navigateToRadars}>
                    <h1>Radars</h1>
                </button>
          
            </div>
            
        </div>
    </div>
        

      
    )
}

export default Home