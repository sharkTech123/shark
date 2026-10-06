const mongoose = require('mongoose');

const userRoleSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  roleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Roles' }
});

const UserRole = mongoose.model('UserRole', userRoleSchema);
module.exports = UserRole;