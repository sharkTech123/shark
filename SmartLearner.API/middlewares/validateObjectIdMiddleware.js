const mongoose = require('mongoose');

/**
 * Validates an optional ObjectId passed as a query param (e.g. ?parentId=...).
 * Prevents malformed input from ever reaching a Mongoose query (defense
 * against CastError-based errors leaking stack info, and cheap injection attempts).
 */
function validateOptionalObjectIdQuery(paramName) {
  return (req, res, next) => {
    const value = req.query[paramName];

    // Not provided at all -> treat as root level, that's fine.
    if (value === undefined || value === null || value === '') {
      req.query[paramName] = null;
      return next();
    }

    // Explicit string "null" from the client also means root level.
    if (value === 'null') {
      req.query[paramName] = null;
      return next();
    }

    if (!mongoose.Types.ObjectId.isValid(value)) {
      return res.status(400).json({
        success: false,
        message: `Invalid ${paramName}`,
      });
    }

    next();
  };
}

module.exports = { validateOptionalObjectIdQuery };