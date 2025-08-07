import jwt from "jsonwebtoken";

// Middleware are filters that protect your private routes
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // extract token from "Bearer <token>"

  if (token == null) return res.sendStatus(401); // No token >provided

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); //Invalid or expired token
    req.user = user; //atatch decoded user information to the request
    next(); //proceed to the next middleware or route handler
  });
};

export default authenticateToken;