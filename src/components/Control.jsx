import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBackward,faForward,faPause,faPlay} from '@fortawesome/free-solid-svg-icons';


let Control=(props)=>{

    return(
           <>
           <div className="control">

           <button className = "control__SkipBtn" onClick={()=>props.skipSong(false)}>
           <FontAwesomeIcon icon={faBackward}/>
           </button>
           
           <button className="control__PlayButton" onClick={()=>props.setIsPlaying(!props.isPlaying)}>
           <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay}/>
           </button>
            
           <button className="control__SkipBtn" onClick={()=>{props.skipSong()
           
           
           /*
            var bg_color = ["#00ffd0","#00e7ff61","#9100ff00","#ff000069","#ff0c0069"];
            document.body.style.background=eval("bg_color[Math.floor(Math.random()*bg_color.length)]");
                    */
            }
           }>
           <FontAwesomeIcon icon={faForward}/>
           </button>

           </div>
           </>

    );

}

export default Control;