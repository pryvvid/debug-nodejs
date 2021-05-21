// to work with bearer token
function checkAuthorization(authorizationHeader) {
  if (!authorizationHeader) return undefined;
  const auth = authorizationHeader.split(" ");
  const authLength = auth.length
  if (authLength > 1) return auth[authLength - 1]
  return authorizationHeader
}

module.exports = checkAuthorization;