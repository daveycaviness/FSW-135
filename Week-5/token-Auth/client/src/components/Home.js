import { useContext } from 'react';
import { TokenContext } from '../App.js';
import IssuesFeed from './IssuesFeed.js';

export default function Home(props) {
    const token = useContext(TokenContext);

    const resetInput = () => {
        document.querySelector("#postTitle").value = "";
        document.querySelector("#postDesc").value = "";
    }

    if (!token) {
        return(
            <div>
                <h1>Welcome to Climate Action 101!</h1>
                <h2>Please Register or Login to continue</h2>
            </div>
        );
    }
    else if (token) {
        return(
           <div>
               <div>
                   <h1>Post your Issues Here</h1>
                   <input type = "text" id = "postTitle" placeholder = "Please Enter the Title Here" defaultValue=""></input>
                   <input type = "text" id = "postDesc" placeholder = "Please Enter the Description Here" defaultValue=""></input>
                   <button onClick={() => {
                       props.userPosting()
                       resetInput()
                   }}>Submit</button>
               </div>
               <div>
                    <IssuesFeed
                        issues = {props.issues}  
                        getComments = {props.getComments}
                        getOriginalPoster = {props.getOriginalPoster}
                        originalPoster = {props.originalPoster}
                        setOriginalPost = {props.setOriginalPost}
                        upvote = {props.upvote}
                        downvote = {props.downvote}
                    />
                </div>
           </div>
           
        );
    }
}