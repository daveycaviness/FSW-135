import { Link } from 'react-router-dom';

export default function ListUserPosts(props) {
    if (props.userIssues.errMsg) {
        return(
            <div>
                <h2>You have not made a post yet.</h2>
            </div>
        );
    }
    else if (!props.userIssues.errMsg) {
        return(
            props.userIssues.map(e => {
                return(
                    <div className = "userPost">
                        <div>
                            <h3>{e.title}</h3>
                            <h4>{e.description}</h4>
                        </div>
                        <div className = "profilePosters">
                            <button className = "issuePoster" onClick={() => {
                                props.getComments(e._id, e.userID)
                                props.getOriginalPoster(e.userID)
                                props.setOriginalPost({title: e.title, description: e.description})
                            }}>
                                <Link to="/comments" style={{textDecoration: 'none', color: 'darkgreen'}}>Comments</Link>
                            </button>

                            <h4 className = "upVote">{`Likes: ${e.upVotes}`}</h4>
                            <h4 className = "downVote">{`Dislikes: ${e.downVotes}`}</h4>
                        </div>
                    </div>
                );
            })
        );
    }
}