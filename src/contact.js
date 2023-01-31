import './contact.css'
import {useState} from 'react'

export const Contact= ()=>{

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [subject,setSubject]=useState('')
    const [description,setDesc]=useState('')


    const submit=(event)=>{
        event.preventDefault()

        
        alert("Sent Successfully")
    }

    return (
        <div id="main_div">
        <div id="body_div">
            <p>Contact</p>

            <div id="faq_div">
                
                 <h4 id="faq_label" align="center"> FAQs</h4>

                <ul>
                    <li> Who are We?</li>
                    <li>What are the events we conducting?</li>
                    <li>What are our goals?</li> 
                    <li>Is a good time to become a member of finance and consulting club?</li> 
                </ul>

            </div>

            <div id="GetInTouch_div">
                <h2 id="GetInTouch_label" align="center"><b>Get In Touch</b></h2>
                <form onSubmit={submit}>
                    <input type="text" placeholder="Name" onChange={(event)=> setName(event.target.value)} /><br /><br />
                    <input type="text" placeholder="Email" onChange={(event)=> setEmail(event.target.value)}/><br /><br />
                    <input type="text" placeholder="Subject" onChange={(event)=> setSubject(event.target.value)}/><br /><br />
                    <textarea placeholder="Description" onChange={(event)=> setDesc(event.target.value)} /><br /><br />
                    <div>
                    <input type="submit" /><br /><br />
                    </div>
                </form>
            </div>
            <div className="clear_float"></div>

        </div>
    </div>
       )

}