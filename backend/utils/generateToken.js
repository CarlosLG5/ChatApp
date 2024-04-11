import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie = (userId, res) => {

    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
res.cookie("jwt", token, {
    maxAge: 30 * 24 * 60 * 60 * 1000, //MS format
    httpOnly: true, // prevent XSS attacks, cross site attack
    sameSite: "strict", // CSRF attacks cross site request forgery attacks
    secure: process.env.NODE_ENV !== "development"
});
};

export default generateTokenAndSetCookie;
