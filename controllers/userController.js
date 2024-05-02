const Thoughts = require(`../models/thoughts`);
const User = require(`../models/user`);


module.exports = {

    async = getAllUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        }catch (err) {
            console.error(err);
            res.status(500).json({message:`Server error`});
        }
    },

    async = getUserbyId(req, res) {
        const {userId} = req.params;
        try {
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({message:`No user found`});
            }
            res.json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json({message:`Server error`});
        }
    }


};
