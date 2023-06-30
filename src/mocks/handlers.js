import { rest } from "msw"

const baseURL = 'https://life-sort-api.herokuapp.com/'


export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req,res,ctx) => {
        return res(ctx.json({
            "pk": 1,
            "username": "carl",
            "email": "",
            "first_name": "",
            "last_name": "",
            "profile_id": 1,
            "profile_image": "https://res.cloudinary.com/ddkb2afxq/image/upload/v1/media/images/JunoArtName_ctmptb"
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req,res,ctx) => {
        return res(ctx.status(200));
    }),
];