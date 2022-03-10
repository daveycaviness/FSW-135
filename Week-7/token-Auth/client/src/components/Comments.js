export default function Comments(props) {
    if (props.commentThread.errMsg) {
        return(
            <h4 id = "noComments">This post has no comments yet.</h4>
        );
    }
    else if (!props.commentThread.errMsg) {
        return(
            props.commentThread.map(e => {
                return(
                    <div className = "postComments">
                        <img className = "commentsImaging"src={e.userProfImg} alt={`${e.userName}'s profile pic`}></img>
                        <h5>{e.userName}</h5>
                        <h3>{e.comment}</h3>
                    </div>
                );
            })
        )
    }
}