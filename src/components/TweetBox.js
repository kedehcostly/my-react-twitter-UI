import React from 'react'
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

export default function TweetBox() {
  return (
    <div className="tweetBox">


    <form>

      <div className="tweetBox__input">


        <Avatar src="https://www.google.com/imgres?imgurl=http%3A%2F%2Fformatjs.io%2Fimg%2Freact.svg&imgrefurl=https%3A%2F%2Fcodepen.io%2Fwillianjusten%2Ffull%2FPwvoXB&tbnid=8dye_P_waY74XM&vet=12ahUKEwiD9ruf2u7sAhUTahoKHX0JDFcQMygOegUIARDpAQ..i&docid=ItvmFfIc-yPM8M&w=570&h=510&q=svg%20img&safe=active&ved=2ahUKEwiD9ruf2u7sAhUTahoKHX0JDFcQMygOegUIARDpAQ"></Avatar>
        <input placeholder="What's Happening" type="text"></input>

      </div>
      <input 
      className="tweetBox__inputImage"
      placeholder="Enter image URL" type="text"></input>

      <Button className="tweetBox__tweetButton">Tweet</Button>
     </form>


    </div>
  )
}
