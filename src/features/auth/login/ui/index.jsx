import { useLogin } from '../model/useLogin';
import s from './styles.module.css';

export const Login = () => {
	const { emailError, onSubmit, onFormChange } = useLogin();

	const handleSubmit = (e) => {
		e.preventDefault();
		const [username, email, password] = e.target;
		onSubmit({
			username: username.value,
			email: email.value,
			password: password.value,
		});
	};

	return (
		<div>
			<h1 className={s.authHeader}>WELCOME</h1>
			<form
				onChange={onFormChange}
				onSubmit={handleSubmit}
				className={s.authform}
			>
				<input
					name="username"
					type="text"
					placeholder="Username"
					required
					minLength="3"
					maxLength="20"
					title="type less than 20 symbols"
				/>
				<input name="email" type="email" placeholder="Email" required />
				{emailError && <p>Please, enter a valid email address</p>}
				<input
					name="password"
					type="password"
					placeholder="Password"
					minLength="8"
					title="password must contain 8 characters at least"
					required
				/>
				<input type="submit" value="Sign in" className={s.formBtn} />
			</form>
		</div>
	);
};
