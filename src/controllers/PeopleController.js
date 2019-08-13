const mongoose = require("mongoose");

const People =  mongoose.model("Pessoas");

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const people = await People.paginate({}, {page:page, limit:10 });

        return res.json(people);
    },

    async store(req,res) {
        const people = await People.create(req.body);

        return res.json(people);
    },

    async detail(req, res){
        const people = await People.findById(req.params.id);

        return res.json(people);
    },

    async update(req, res){
        const people = await People.findByIdAndUpdate(req.params.id, req.body, { new: true});

        return res.json(people);
    },

    async destroy(req,res) {
       const people = await People.findByIdAndRemove(req.params.id);
       return res.send("Deleted");
    }
};