
export default function authMiddleware(
    req,
    res,
    next
) {

    if (!req.cookies.usuarioId) {

        return res.redirect(
            '/login'
        );

    }

    next();

}
