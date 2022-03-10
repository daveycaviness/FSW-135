import { Link } from 'react-router-dom';

export default function Login(props) {
    return(
        <div>
        <h1 id = "loginTitle">Please Log In To Your Account</h1>
            <div id = "loginUser">
                <input type="text" id="logUser" placeholder="Username"></input>
                <input type="text" id="logPass" placeholder="Password"></input>
                <button id = "logBttn" onClick={() => props.userLogin()}>
                    <Link to="/" style={{textDecoration: 'none', color: 'black'}}>Login</Link>
                </button>
            </div>

        </div>
        
    );
}