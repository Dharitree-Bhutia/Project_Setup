const jwt = require("jsonwebtoken")


exports.verifyToken = (req, res, nex) => {
    const token = req.header('Authorization')

    if (!token) {
        return res.status(401).json({ error: "Access denied" });
    }
    try {
        const decoded = jwt.verify(token, "test12345")
        req.user = decoded;
        next();
        
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: "Internal server token" });
    }
}