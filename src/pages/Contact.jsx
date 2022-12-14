import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin,} from "@fortawesome/free-brands-svg-icons"
import {faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'
import emailjs from '@emailjs/browser';
import '../styles/Contact.css'

function Contact(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [form, setForm] = useState({});

    // const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const clearState = () => {
        setForm({})
     }

    emailjs.sendForm('service_tci6xa7', 'template_qdedkdn', form.current, 'mPJBzyCngwv1nOIX6')
      .then((result) => {
          console.log(result.text);
          //clearState();
          setForm({name:"", Email:"", Message:""})
          console.log("form should be blank ")
        }, (error) => {
            console.log(error.text);
        });
  };

  const updateForm = (e) => {
    console.log({ [e.target.name]: e.target.value });
    setForm({ ...form, [e.target.name]: e.target.value });
  };


    return(
          <div className="contact-container">
            <div className="title-container">
                <h1>Request a quote</h1>
            </div>

            <div className="form-container">
                <div className="social-container">
                     <a className="LinkedIn" href ="https://www.linkedin.com/in/logan-mccalley-90607010b/" target="_blank">
                      <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                     </a>
                     <a className="github" href ="https://www.github.com/LoganM3" target="_blank">
                      <FontAwesomeIcon icon={faGithub} size="2x"/>
                     </a>
                </div>
                <form name="contact-form" ref={form} onSubmit={sendEmail}>
                    <div className="input">
                        <input className='input-box'
                            type='text'
                            placeholder="Name"
                            name="name"
                            required='true'
                            value={form.name}
                            onChange={updateForm}
                            />
                    </div>
                    <div className="input">
                        <input className='input-box'
                            type='text'
                            placeholder="Email"
                            name="Email"
                            required='true'
                            value={form.Email}
                            onChange={updateForm}
                            />
                    </div>
                   
                    <div className="message-input">
                        <textarea className='message-box'
                            type='text'
                            placeholder="Service required and boat size"
                            name='Message'
                            required='true'
                            value={form.Message}
                            onChange={updateForm}
                            />
                    </div>
                    <div className='btn-container'>
                        <button
                         className=''
                         type="submit">
                         Get Quote
                        </button>
                     </div>

                </form>
            </div>
            <div className="info-container">
                <h1>Contact Info</h1>
                <a>
                 <FontAwesomeIcon icon={faPhone} size="2x"/>
                    (561)-301-6062
                </a>
                <a>
                <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                    NextLevelMarine@gmail.com
                </a>
              

            </div>
        </div> 
    
    )
}

export default Contact