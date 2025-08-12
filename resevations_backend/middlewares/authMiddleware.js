import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Extraer token de "Bearer <token>"

  if (!token) return res.sendStatus(401); // No token proporcionado

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403); // Token inválido o expirado

    req.user = decoded; // Asignar id y role al request
    next();
  });
};

export default authenticateToken;
