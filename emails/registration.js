const keys = require('../keys')

module.exports = function(email) {
  return {
    to: email,
    from: keys.EMAIL_FROM,
    subject: 'Account has been created',
    html: `
      <h1>Welcome to our shop</h1>
      <p>You has successfuly created the account with email - ${email}</p>
      <hr />
      <a href="${keys.BASE_URL}">Courses Shop</a>
    `
  }
}