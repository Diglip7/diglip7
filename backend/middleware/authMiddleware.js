import jwt from "jsonwebtoken";

/**
 * Authentication Middleware
 * Validates the JWT Bearer token sent in Authorization header: "Bearer <token>"
 */
const authMiddleware = (req, res, next) => {
  // Extract token from "Bearer <token>"
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "No token, authorization denied" });

  try {
    // Verify token using JWT_SECRET and attach decoded payload to req.user
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next(); // Proceed to protected route controller
  } catch {
    res.status(401).json({ msg: "Token is invalid or expired" });
  }
};

export default authMiddleware;


