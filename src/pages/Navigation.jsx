import '../styles/Navigation.css'

function Navigation(){

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
            <div className='raymarine-container'>
                <h1>RayMarine</h1>
                <button>View All</button>
            </div>
        </div>
    )
}

export default Navigation