import './web.css'
import {useState} from 'react'
import {RiMiniProgramLine} from 'react-icons/ri'
import {GiAbstract037} from 'react-icons/gi'
export const Web= ()=>{


    return (
        <div id="main_div">
    
        <div id="main_image">
            <img id="fcc_image" src="FCC.jpg" />
        </div>
        <div id="our_program_main_div">
            <p>Our program</p>

            <div id='our_program_div'>

                <div class="our_program_child" id="program_div1">
                    <div class="program_icon">
                        <RiMiniProgramLine/>
                    </div>
                    <p> Program 1<br/><br/>
                    Hello This is our program1<br></br>Keep visting our site for regular updates
                    </p>
                    <button class="learn_more_button">Learn More</button>
                </div>
                <div class="our_program_child"  id="program_div2">
                <div class="program_icon">
                <RiMiniProgramLine/>
                    </div>
                    <p> Program 2<br/><br/>
                    Hello This is our program1<br></br>Keep visting our site for regular updates
                    </p>
                    <button class="learn_more_button">Learn More</button>
                </div>
                <div class="our_program_child"  id="program_div3">
                <div class="program_icon">
                <RiMiniProgramLine/>
                    </div>
                    <p> Program 3<br/><br/>
                    Hello This is our program1<br></br>Keep visting our site for regular updates
                    </p>
                    <button class="learn_more_button">Learn More</button>
                </div>
                <div class="our_program_child"  id="program_div4">
                <div class="program_icon">
                <RiMiniProgramLine/>
                    </div>
                    <p> Program 4<br/><br/>
                    Hello This is our program1<br></br>Keep visting our site for regular updates
                    </p>
                    <button class="learn_more_button">Learn More</button>
                </div>
            </div>

            <div id="value_main_div">
                <img id="value_img" src="1.jpg"></img>
                <div id="value_subdiv">
                    <div class="value_div">
                    <p> Vision 1<br/><br/>
                    Hello This is our program1<br></br>Keep visting our site for regular updates
                    </p>
                    </div>
                    <div class="value_div">
                    <p> Vision 2<br/><br/>
                    Hello This is our program1<br></br>Keep visting our site for regular updates
                    </p>
                    </div>
                    <div class="value_div">
                    <p> Vision 3<br/><br/>
                    Hello This is our program1<br></br>Keep visting our site for regular updates
                    </p>
                    </div>
                    <div class="value_div">
                    <p> Vision 4<br/><br/>
                    Hello This is our program1<br></br>Keep visting our site for regular updates
                    </p>
                    </div>
                </div>


            </div>

            <div id="sponsor_div">

                <p>Our Sponsor</p>
                <div id="sponsor_subdiv">
                <div class="sponsor_subdiv2">
                    <img class ="sponsor_img" src="sponsor1.png"></img>
                    <p>AB CLASSES</p>
                </div>
                <div class="sponsor_subdiv2">
                     <img class ="sponsor_img"  src="sponsor2.png"></img>
                     <p>FINILATICS</p>
                </div>
                <div class="sponsor_subdiv2">
                    <img class ="sponsor_img" id="sponsor3"  src="sponsor3.png"></img>
                    <p>OREAMS 'N' OAFFINES</p>
                </div>
                <div class="sponsor_subdiv2">
                  <img class ="sponsor_img"  src="sponsor4.png"></img>
                  <p>TERRAGE LOUNGE</p>
                </div>
                </div>
             </div>

             <div id="team">
                <p class="blue_color">Head Coordinators</p>
                <div id="team_subdiv1">
                    <div class="coordinators_img">
                        <img  src="1.jpg" width="400px" height="500px"></img>
                        <p>Aditya D<br></br> <spam>President & Events Head</spam></p>
                    </div>
                    
                    <div class="coordinators_img">
                        <img  src="Akshat Bedekar.jpg" width="400px" height="500px"></img>
                        <p>Akshat Bedekar<br></br> <spam> Joint President & Outreach Head</spam></p>
                    </div>
                    
                    <div class="coordinators_img">
                        <img  src="H Anshual.jpg" width="400px" height="500px"></img>
                        <p> H Anshul <br></br> <spam>Treasury & Projects Head</spam> </p>
                    </div>
                    
                    <div class="coordinators_img">
                        <img  src="Shreeyansh Sharma.jpg" width="400px" height="500px"></img>
                        <p>Shreeyansh Sharma<br></br> <spam>Public Relation Head</spam></p>
                    </div>
                    
                    <div class="coordinators_img">
                        <img  src="Vanshika Gupta.jpg" width="400px" height="500px"></img>
                        <p>Vanshika Gupta <br></br> <spam>Content & Creative Head</spam></p>
                    </div>
                </div>

            

                
             </div>

        </div>
           </div>
       )

}