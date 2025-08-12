//authorize roles
export const authorizeRoles = (allowedRoles) => {
  return (req, res, next) => {
    //assuming use role is available in req.user.role after authentication
    if (!req.user || !req.user.role) {
      return res.status(401).json({ message: "Authentication required." });
    }

    const userRole = req.user.role;

    if (allowedRoles.includes(userRole)) {
      next(); //user has the required role, proceed to the next middleware/route
    } else {
      res.status(403).json({ message: "Access forbidden. Insufficient role." });
    }
  };
};
