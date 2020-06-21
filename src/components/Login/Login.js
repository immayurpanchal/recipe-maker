import React from 'react';
import './Login.css';
import GoogleLogin from 'react-google-login';

const Login = (props) => {
	const { isAuthFailed } = props;

	return (
		<div className='login-wrapper'>
			{isAuthFailed && <div className='login-failed'>Login Failed</div>}
			<div className='g-wrapper'>
				<GoogleLogin
					clientId='239289699274-chiqlahf6p85rgvuo99l6oq7dlbp1405.apps.googleusercontent.com'
					onSuccess={props.onGoogleLoginSuccess}
					onFailure={props.onGoogleLoginFail}
				/>
			</div>
		</div>
	);
};

export default Login;
