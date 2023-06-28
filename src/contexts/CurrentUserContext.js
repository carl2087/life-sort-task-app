import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { axiosRequest, axiosResponse } from '../api/axiosDefaults';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { removeTokenTimestamp, shouldRefreshToken } from '../utils/utils';

export const CurrentUserContext = createContext();
export const setCurrentUserContext = createContext();

export const useCurrentUser = () => useContext(CurrentUserContext)
export const useSetCurrentUser = () => useContext(setCurrentUserContext)

export const CurrentUserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
	const history = useHistory();

	const handleMount = async () => {
		try {
			const {data} = await axiosResponse.get('dj-rest-auth/user/')
			setCurrentUser(data)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		handleMount();
	}, []);

	useMemo(() => {
		axiosRequest.interceptors.request.use(
			async (config) => {
				if (shouldRefreshToken()) {
					try {
						await axios.post('/dj-rest-auth/token/refresh/')
					} catch (error) {
						setCurrentUser((prevCurrentUser) => {
							if (prevCurrentUser) {
								history.push('/login')
							}
							return null
						});
						removeTokenTimestamp();
						return config
					}
				}
				return config
			},
			(error) => {
				return Promise.reject(error);
			}
		)

		axiosResponse.interceptors.response.use(
			(response) => response,
			async (error) => {
				if (error.response?.status === 401) {
					try {
						await axios.post('/dj-rest-auth/token/refresh/')
					} catch (error) {
						setCurrentUser(prevCurrentUser => {
							if (prevCurrentUser) {
								history.push('/login')
							}
							return null
						});
						removeTokenTimestamp();
					}
					return axios(error.config)
				}
				return Promise.reject(error);
			}
		)
	}, [history]);

    return (
        <CurrentUserContext.Provider value={currentUser}>
			<setCurrentUserContext.Provider value={setCurrentUser}>
                {children}
            </setCurrentUserContext.Provider>
		</CurrentUserContext.Provider>
    )
};