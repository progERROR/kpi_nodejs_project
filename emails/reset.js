const keys = require('../keys')

module.exports = function(email, token) {
  return {
    to: email,
    from: keys.EMAIL_FROM,
    subject: 'Access recovery',
    html: `
      <h1>Did you forget your password?</h1>
      <p>If not, then ignore this mail</p>
      <p>Or tap the link below:</p>
      <p><a href="${keys.BASE_URL}/auth/password/${token}">Recover the access</a></p>
      <hr />
      <a href="${keys.BASE_URL}">Courses Shop</a>
    `
  }
}