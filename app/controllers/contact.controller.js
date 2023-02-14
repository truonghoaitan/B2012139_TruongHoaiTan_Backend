// const ContactService = require("../services/contact.service");
// const MongoDB = require("../untils/mongodb.util");
// const ApiError = require("../api-error");

exports.create = (req, res) => {
    res.send( { massage: "create handler" } );
};

exports.findAll = (req, res) => {
    res.send( { massage: "findAll handler" } );
};

exports.findOne = (req, res) => {
    res.send( { massage: "findOne handler" } );
};

exports.update = (req, res) => {
    res.send( { massage: "update handler" } );
};

exports.delete = (req, res) => {
    res.send( { massage: "delete handler" } );
};

exports.deleteAll = (req, res) => {
    res.send( { massage: "deleteAll handler" } );
};

exports.findAllFavorite = (req, res) => {
    res.send( { massage: "findAllFavorite handler" } ); 
};

// exports.create = async (req, res, next ) => {
//     if(!req.body?.name) {
//         return next(new ApiError(400, "Name can not be empty"));
//     }

//     try {
//         const contactService = new ContactService(MongoDB.client);
//         const document = await contactService.create(req.body);
//         return res.send(document);
//     } catch (error) {
//         return next (
//             new ApiError(500, "An error occurred while creating the contact")
//         );
//     }
// }