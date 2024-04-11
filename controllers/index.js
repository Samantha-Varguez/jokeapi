const models = require("../database/models");
const createJoke = async (req, res) => {
	try {
		const joke = await models.jokes.create(req.body);
		return res.status(201).json({
		joke
		});
	} catch (error) {
	return res.status(500).json({error: error.message });
	}
};

const getAllJokes = async (req, res) => {
 console.log('getting jokes');
	try {
		const jokes= await models.jokes.findAll();
			return res.status(200).json({ jokes });
	} catch (error) {
		return res.status(500).send(error.message);
	}
};
module.exports = {
	createJoke,
	getAllJokes
};

