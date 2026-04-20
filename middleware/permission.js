const User = require("../models/User");

module.exports = (moduleName, action) => {
  return async (req, res, next) => {
    const user = await User.findById(req.user.id).populate("role");

    if (!user || !user.role) {
      return res.status(403).json({ message: "No role assigned" });
    }

    const hasPermission =
      user.role.permissions[moduleName] &&
      user.role.permissions[moduleName][action];

    if (!hasPermission) {
      return res.status(403).json({ message: "Access denied" });
    }

    next();
  };
};