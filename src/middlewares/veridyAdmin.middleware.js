

export const verifyAdminMiddleware = (req, res, next) => {
        if(!req.usuario || !req.usuario.isAdmin) {
            return res.status(403).json({
                message: 'No tienes permisos para acceder a este recurso',
                statusCode: 403,
            });
        }
        next();
};


