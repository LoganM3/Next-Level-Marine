import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import'../styles/Service.css'


export default function Services(){

    return(
        <div className='service-container'>
            <div className="header-img">
                <img  className='service-img' src='http://www.homewoodmarina.net/wp-content/uploads/HHDM-Service-Day-2-56-e1580766994416.jpg' alt='' />
            </div>
            <div className='card-container'>
            <Card className='service-card' style={{ width: '18rem' }}>
              <Card.Img  className='card-img' variant="top" src="https://cdn-yotpo-images-production.yotpo.com/instagram/50/17854826498542250/medium.jpg" />
                <Card.Body>
                  <Card.Title className='title'>Audio</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                 </Card.Body>
            </Card>
            <Card className='service-card' style={{ width: '18rem' }}>
              <Card.Img  className='card-img' variant="top" src="https://www.thehulltruth.com/attachment.php?attachmentid=772309&stc=1&d=1484569845" />
                <Card.Body>
                  <Card.Title className='title'>Rewire</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                 </Card.Body>
            </Card>
            </div>
        </div>
    )
}