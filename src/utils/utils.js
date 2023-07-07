import jwtDecode from "jwt-decode";
import { axiosRequest } from "../api/axiosDefaults"

export const fetchMoreData = async (resource, setResource) => {
    try {
        const {data} = await axiosRequest.get(resource.next)
        setResource(prevResource => ({
            ...prevResource,
            next:data.next,
            results: data.results.reduce((acc, cur) => {
                return acc.some((accResult) => accResult.id === cur.id)
                ? acc
                : [...acc, cur]
            }, prevResource.results),
        }));
    } catch (error) {
        // console.log(error)
    }
}

export const setTokenTimeStamp = (data) => {
    const refreshTokenTimeStamp = jwtDecode(data?.refresh_token).exp
    localStorage.setItem('refreshtokenTimestamp', refreshTokenTimeStamp)
};

export const shouldRefreshToken = () => {
    return !!localStorage.getItem('refreshTokenTimestamp')
};

export const removeTokenTimestamp = () => {
    localStorage.removeItem('refreshTokenTimestamp')
};