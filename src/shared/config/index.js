const getEnvVar = (key) => {
	if (import.meta.env[key] === undefined) {
		throw new Error(`Env variable ${key} is required`);
	}
	return import.meta.env[key] || '';
};

export const OMDB_API_URL = getEnvVar('VITE_OMDB_API_URL');
export const OMDB_API_KEY = getEnvVar('VITE_OMDB_API_KEY');

export const EMAIL_API_URL = getEnvVar('VITE_EMAIL_API_URL');
export const EMAIL_API_KEY = getEnvVar('VITE_EMAIL_API_KEY');

export const QUIZ_API_URL = getEnvVar('VITE_QUIZ_API_URL');

export const NODE_ENV = getEnvVar('VITE_NODE_ENV');
export const isDevEnv = NODE_ENV === 'development';
export const isProdEnv = NODE_ENV === 'production';
