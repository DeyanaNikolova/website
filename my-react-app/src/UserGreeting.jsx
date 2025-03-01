import PropTypes from 'prop-types';

function UserGreeting(props) {

    // EXAMPLE 1
    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }else{
    //     return <h2>Please log in to continue</h2>
    // }

    // EXAMPLE 2
    // return (props.isLoggedIn ? 
    //     <h2 className="welcome-message">Welcome {props.username}</h2> : 
    //     <h2 className="login-prompt">Please log in to continue</h2>
    // );

    // EXAMPLE 3
    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>;
    const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>;
    return (
        props.isLoggedIn ? welcomeMessage : loginPrompt
    );
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: 'a',
}
export default UserGreeting;