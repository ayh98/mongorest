const User = require('./users.model');
exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        // save to db
        const savedUser = await user.save();
        res.status(200).send({user: savedUser, message: "User Created in Database"})
    } catch (error) {
      res.status(500).send(error);
    }
}
exports.findUser = async (req, res) => {
    try {
        const user = req.params.username;
        const targetUser = await User.findOne({username: user});
        res.status(200).send({user: targetUser, message: "User Found"});
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.updateUser = async (req, res) => {
    try {
        const user = req.params.username;
        const pass = req.params.password;
        const changeUser = await User.updateOne({username: user, password: pass});
        res.status(200).send({user: changeUser, message: "User Modified"});
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.deleteUser = async (req,res) => {
    try {
        const user = req.params.username;
        const removedUser = await User.findOneAndDelete({username: user});
        res.status(200).send({user: removedUser, message: "User Deleted"})
    } catch (error) {
        res.status(500).send(error)
    }
};