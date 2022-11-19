import '../styles/Sonar.css'

function Sonar(){

    return(
        <div>
              <div className='garmin-container'>
                <h1>Garmin</h1>
                <button>View All</button>
            </div>
            <div className='simrad-container'>
                <h1>Simrad</h1>
                <button>View All</button>
            </div>
            <div className='furuno-container'>
                <h1>Furuno</h1>
                <button>View All</button>
            </div>
            <div className='airmar-container'>
                <h1>AirMar</h1>
                <button>View All</button>
            </div>
        </div>
    )
}

export default Sonar