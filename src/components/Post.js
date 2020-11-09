import React from 'react';
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';


export default function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatat
}) {
    return (
        <div className="post">
            <div className="post__avatar">
            <Avatar src="" />

            </div>

            <div className="post__body">
                <div className="post__header">

                
                    <div className="post__headerText">
                        <h3>Kedeh Costly {""}
                            <span className="post__headerSpecial">
                            <VerifiedUserIcon className="post__badge" /> @theboycostly
                            </span>
                        </h3>
                    
                    </div>
                    <div className="post__headerDescription">
                        <p>I challenge you to build a twitter clone with react</p>
                    </div>
                </div>  
                <img src="https://media3.giphy.com/media/56ATdpi3clADjomZ39/giphy.gif"  alt="" />

                <div className="Post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
            </div>
            </div>
            
        </div>
    );
}
