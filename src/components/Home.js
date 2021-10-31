import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import goat from './images/goatImage1.png';
import roar from './images/header.png';
import sunflower from './images/sunflower.png'
import nani from './images/nani.png';
import panda from './images/ukelele.png';
import cat from './images/cat.png';
import rac from './images/rac-removebg-preview.png';
import dad from './images/daddy.png';
import dhruv from './images/delhi.png'
import naman from './images/poli.png';
import stitch from './images/stitch-removebg-preview.png';
import akan from './images/pune.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';
import Nani from './Nani';
import Dipshit from './Dipshit';
import Rac from './Rac';
import Hemang from './Hemang';

export default function Home() {
    return (
        <div class = "home">
            <div class = "happyBday">
                <div class = "column1">
                <img src= {roar} style = {{width:"210px",height:"210px"}}/>
                H . A . P . P . Y 
                B . I. R.T. H.D .A.Y ! 
                
                </div>

                <div class = "column2">
                <img src = {sunflower} style={{marginTop:"170px", marginLeft:"10px"}}/>
                </div>
            </div>
            
         <br /><br /><br />
        
            <div>
                <img src = {goat} style = {{width:"900px",height:"900px",boxShadow: "inset 0 0 5px 2px #282a2d",marginLeft:"40px"}}/>
            </div>
            <br />

            
            <div class = "dipshit">
                <div class = "dipshit-col">
                    <Link to = "/Nani">
                        <div class = "card" id = "c1">
                        <img src={nani} />
                        </div>
                    </Link>
                </div>
                    
                <div class = "dipshit-col">
                <iframe src="https://giphy.com/embed/RK7MEZc6AEpIlmB5n3" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p></p>
                </div>
            </div>

            <div class = "dipshit">
                <div class = "dipshit-col">
                <iframe src="https://giphy.com/embed/1gQ69KbJXF18rKry2o" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p></p>
                </div>
                    
                <div class = "dipshit-col">
                    <Link to = "/Rac">
                        <div class = "card" id = "c2">
                        <img src={rac} style = {{width:"300px",height:"300px"}}/>
                        </div>
                    </Link>
                </div>
            </div>
            

            <div class = "dipshit">
                <div class = "dipshit-col">
                    <Link to = "/Dipshit">
                    <div class = "card" id = "c3">
                        <img src={cat} />
                        </div>
                    </Link>
                </div>
                    
                <div class = "dipshit-col">
                    <img src = {img3} />
                </div>
            </div>

            <div class = "dipshit">
                <div class = "dipshit-col">
                    
                <iframe src="https://giphy.com/embed/KeQCQxi8wD7o0ys0oz" width="480" height="350" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                    
                </div>
                    
                <div class = "dipshit-col">
                    <Link to = "/Panda">
                        <div class = "card" id = "c4">
                        <img src={panda} />
                        </div>
                    </Link>
                </div>
            </div>
           
            <div class = "dipshit">
                <div class = "dipshit-col">
                    <Link to = "/Hemang">
                    <div class = "card" id = "c5">
                        <img src={dad} />
                        </div>
                    </Link>
                </div>
                    
                <div class = "dipshit-col">
                <img src = {img4} />
                </div>
            </div>
            
            <div class = "dipshit">
                <div class = "dipshit-col">
                <iframe src="https://giphy.com/embed/H4zLtTpO5vGlfK7dSW" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </div>
                    
                <div class = "dipshit-col">
                    <Link to = "/Dhruv">
                        <div class = "card" id = "c6">
                        <img src={dhruv} />
                        </div>
                    </Link>
                </div>
            </div>

            <div class = "dipshit">
                <div class = "dipshit-col">
                    <Link to = "/Naman">
                    <div class = "card" id = "c7">
                        <img src={naman} />
                        </div>
                    </Link>
                </div>
                    
                <div class = "dipshit-col">
                <img src = {img5} />
                </div>
            </div>

            <div class = "dipshit">
                <div class = "dipshit-col">
                <iframe src="https://giphy.com/embed/SV6nqfmrPYkSumah1o" width="480" height="288" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </div>
                    
                <div class = "dipshit-col">
                    <Link to = "/Stitch">
                        <div class = "card" id = "c8">
                        <img src={stitch} />
                        </div>
                    </Link>
                </div>
            </div>

            <div class = "dipshit">
                <div class = "dipshit-col">
                    <Link to = "/Akan">
                    <div class = "card" id = "c9">
                        <img src={akan} />
                        </div>
                    </Link>
                </div>
                    
                <div class = "dipshit-col">
                       <img src = {img6} />
                </div>
            </div>


        </div>
    )
}
