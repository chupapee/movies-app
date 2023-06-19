import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { checkEmail } from '../../redux/slices.js/authSlice';
import s from './auth.module.css';

export function Auth() {
	const dispatch = useDispatch();

	function formHandler(e) {
		e.preventDefault();
		if (emailRegex.test(email)) {
			dispatch(checkEmail([email, login]));
		}
	}

	const checking = useSelector((state) => state.auth.checking);
	const isValid = useSelector((state) => state.auth.isValid);

	const [email, setEmail] = useState('');
	const [emailBlur, setEmailBlur] = useState(false);
	const emailRegex = new RegExp(
		/^[a-zA-Z0-9.!#$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
	);
	const emailBlurHandler = () => {
		setEmailBlur(true);
	};

	const [login, setLogin] = useState('');

	return (
		<>
			<h1 className={s.authHeader}>W E L C O M E</h1>
			<form
				onSubmit={formHandler}
				className={s.authform}
				autoComplete="off"
			>
				{!isValid && <p>Please, enter a valid email address</p>}
				<input
					name="login"
					type="text"
					placeholder="Login"
					onChange={(e) => {
						setLogin(e.target.value);
					}}
					value={login}
					required
					minLength="3"
					maxLength="20"
					title="type symbols less than 15"
				/>
				<input
					name="email"
					type="email"
					placeholder="Email"
					required=""
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					value={email}
					onBlur={emailBlurHandler}
				/>
				{emailBlur && !emailRegex.test(email) && <p>wrong email!</p>}
				<input
					name="password"
					type="password"
					placeholder="Password"
					minLength="8"
					title="password must contain 8 characters at least"
					required
				/>
				<input
					type="submit"
					value="Sign in"
					className={s.formBtn}
					disabled={checking}
				/>
			</form>
		</>
	);
}