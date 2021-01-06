function hasPermission(user, permissionsNeeded) {
  const matchedPermissions = user.permission.filter(permissionTheyHave =>
    permissionsNeeded.includes(permissionTheyHave)
  );
  if (!matchedPermissions.length) {
    throw new Error(`You do not have sufficient permissions

      : ${permissionsNeeded}

      You Have:

      ${user.permission}
      `);
  }
}

exports.hasPermission = hasPermission;
