import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sessionModel } from '@entities/session';

import s from './styles.module.css';

export const ProfileForm = () => {
	const dispatch = useDispatch();
	const usernameRef = useRef(null);

	const username = useSelector((state) => state.session.username);
	const avatar = useSelector((state) => state.session.avatar);

	const [disabled, setDisabled] = useState(true);
	const handleChange = () => {
		setDisabled((prev) => !prev);
	};

	useEffect(() => {
		if (!disabled) usernameRef.current.focus();
	}, [disabled]);

	const handleSubmit = () => {
		setDisabled(true);
		dispatch(sessionModel.update({ username: usernameVal, avatar: image }));
	};

	const [usernameVal, setUsernameVal] = useState(username);
	const changeUsername = (value) => {
		setUsernameVal(value);
	};

	const handleKeyDown = (e) => {
		if (e.code === 'Enter') {
			setDisabled(true);
		}
	};

	const [image, setImage] = useState(avatar);
	const handleFileChange = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.addEventListener('load', () => {
			setImage(reader.result);
		});
	};

	return (
		<>
			<div className={s.wrap}>
				<div className={s.profileWrap}>
					<div className={s.contentWrap}>
						<div className={s.imgWrap}>
							<img src={image} alt="profile_icon" />
							<label className={s.btn}>
								<input
									style={{ display: 'none' }}
									id="imgInput"
									onChange={handleFileChange}
									type="file"
								/>
								select image
							</label>
						</div>
						<div className={s.loginForm}>
							<label className={s.loginInp}>
								Username
								<input
									className={s.loginInp}
									id="loginInp"
									onKeyDown={handleKeyDown}
									ref={usernameRef}
									required
									onChange={(e) =>
										changeUsername(e.target.value)
									}
									type="text"
									value={usernameVal}
									disabled={disabled}
									maxLength="20"
									minLength="1"
									title="no more than 20 characters"
								/>
							</label>
							<div className={s.btnsWrap}>
								<button
									className={s.btn}
									onClick={handleChange}
								>
									Edit
								</button>
								<button
									type="submit"
									className={s.btn}
									onClick={handleSubmit}
								>
									save changes
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
