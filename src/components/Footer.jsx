import '../styles/Footer.css'


function Footer(){

    return(
        <div className='footer-container'>
            <div className='footer-links'>
                <a href='/'>Home</a>
                <a href='/audioHome'>Audio</a>
                <a href='/Lighting'>Lighting</a>
                <a href='/Navigation'>Navigation</a>
                <a href='/Comunication'>Comunication</a>
                <a href='/Sonar'>Sonars</a>
                <a href='/Radars'>Radars</a>

            </div>
            <div className='llc'>
               <h4> &copy; EMW llc</h4>
            </div>
        </div>
    )
}

export default Footer