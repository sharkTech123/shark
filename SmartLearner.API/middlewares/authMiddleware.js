const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Split to get the token after 'Bearer'

  if (token) {
    jwt.verify(
      token,
      process.env.JWT_SECRET || "SMARTLEARNERJWT",
      (err, decoded) => {
        if (err) {
          return res.status(401).json({ msg: "Unauthorized Access" });
        } else {
          req.userId = decoded.id; // Assuming 'id' is the field you want from the payload
          next();
        }
      }
    );
    
  } else {
    return res.status(401).json({ msg: "Unauthorized Access" });
  }
};

module.exports = { requireAuth };
