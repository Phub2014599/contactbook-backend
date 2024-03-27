exports.create = (req, res) => {
    res.send({ message: "create handler" });
};

exports.findALL = (req, res) => {
    res.send({ message: "findOne handler" });
};

exports.findOne = (req, res) => {
    res.send({ message: "findOne handler" });
};

exports.update = (req, res) => {
    res.send({ message: "update dandler" });
};

exports.delete = (req, res) => {
    res.send({ message: "delete handler" });
};

exports.deleteAll = (req, res) => {
    res.send({ message: "deleteAll danler" });
};

exports.findALLFavorite = (req, res) => {
    res.send({ message: "findAllFavorite handler"});
};
