import React, { useState } from 'react';
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
function MessageSender() {

    const [input, setInput] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="messageSender">
            
            <div className="messageSender_top">

                <Avatar/>
                <form>
                <input value={input} onChange={e => setInput(e.target.value)} className="messageSender_input" type="text" placeholder={`What's on your mind? `} />
                <input  value={imageUrl} onChange={e => setImageUrl(e.target.value)} placeholder="imsge URl (Optional)"/>

                <button onClick={handleSubmit} type="submit">Submit</button>

                </form>
                
            </div>


            <div className="messageSender_bottom">

                <div className="messageSender_option">

                    <VideocamIcon style={{color:"red"}}/>
                    <h4>Live Video</h4>
                </div>


                <div className="messageSender_option">

                    <PhotoLibraryIcon style={{color:"green"}}/>
                    <h4>Photo/Video</h4>
                </div>



                <div className="messageSender_option">

                    <InsertEmoticonIcon style={{color:"orange"}}/>
                    <h4>Feeling/Activity</h4>
                </div>

            </div>

            

        </div>
    )
}

export default MessageSender
