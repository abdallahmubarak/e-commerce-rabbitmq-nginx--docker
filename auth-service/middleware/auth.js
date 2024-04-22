const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];  
    if (token == null) return res.sendStatus(401)
    try {
        jwt.verify(token, 'secret', (err, user) => {
            if (err) {
                return res.status(401).json({ msg: 'Token is not valid' });
            }
            req.user = user;
            next();
        });
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
}

module.exports = auth;