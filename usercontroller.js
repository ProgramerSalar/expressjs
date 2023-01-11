const registerUser = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  res.json({
    success: true,
    // name: name,
    // email: email,
    // password: password,
  });
};

module.exports = registerUser;
