import { Link } from 'react-router-dom';

export default function SignUp(props) {
    return(
        <div>
        <h1 id = "signUpTitle">Please SignUp Here</h1>
            <div id = "signUp">
                <input type="text" id="regUser" placeholder="Desired Username"></input>
                <input type="text" id="regPass" placeholder="Desired Password"></input>
                <input type="text" id="profImg" placeholder="Profile Picture URL"></input>
                <button id = "logBttn" onClick={() => props.userSignup()}>
                    <Link to="/" style={{textDecoration: 'none', color: 'black'}}>Sign Up</Link>
                </button>
            </div>
        </div>
        
    );
}