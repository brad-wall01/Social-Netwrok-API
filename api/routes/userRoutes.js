const router = require(`express`).Router();

const {
    getAllUsers,
    getUserById,
} = require(`../../controllers/userController`);

router.route(`/`).get(getAllUsers).post(createUser);