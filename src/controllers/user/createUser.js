module.exports = {
  createUser: async (object) => {},

  router: async (req, res) => {
    try {
      const user = await createUser(req.body);
      res.status(201).send(user);
    } catch (err) {
      res.send(500).send(err);
    }
  },
};
