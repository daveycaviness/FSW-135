import { Link } from 'react-router-dom';

export default function IssuesFeed (props){
    return(
        props.issues.map(e => {
            return(
                <div className = "issuesFeed">
                    <div>
                        <img className = "feedImg" src={e.userProfImg} alt={`${e.userName}'s post`}></img>
                        <h5 className = "userName">{e.userName}</h5>
                    </div>
                    <div className = "feedText">
                        <h3>{e.title}</h3>
                        <h4>{e.description}</h4>
                    </div>
                    <div className = "voterBttn">
                        <button className = "commentBttn" onClick={() => {
                            props.getComments(e._id, e.userID)
                            props.getOriginalPoster(e.userID)
                            props.setOriginalPost({title: e.title, description: e.description})
                        }}>
                            <Link to="/comments" style={{textDecoration: 'none', color: 'darkgreen'}}>Comments</Link>
                        </button>
                    
                        <button className = "voteBttn" onClick={() => props.upvote(e._id)}>Like</button>
                        <h4>{e.upVotes}</h4>
                        <button className = "voteBttn" onClick={() => props.downvote(e._id)}>Dislike</button>
                        <h4>{e.downVotes}</h4>
                    </div>
                </div>
            );
        })
    )
}