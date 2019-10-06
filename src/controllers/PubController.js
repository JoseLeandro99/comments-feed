const Pub = require('../models/Pub');

module.exports = {
    async index(req, res) {
        const pubs = await Pub.find();

        return res.json(pubs);
    },

    async store(req, res) {
        const { author, title, content } = req.body;

        const pub = await Pub.create({
            author,
            title,
            content
        });

        return res.json(pub);
    }
}