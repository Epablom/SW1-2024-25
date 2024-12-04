const Models = {
    User: {
        _id: "integer",
        username: "string",
        password: "string",
        email: "string",
        degree: "string",
        degreeyear: "integer",
        university: "string",
        faculty: "string",
        description: "string",
        imagelink: "string",
        admin: "boolean",
        isBanned: "boolean"
    },
    Notes: {
        id: "integer",
        user_id: "integer",
        title: "string",
        description: "string",
        degree: "string",
        subject: "string",
        year: "integer",
        notesroute: "string",
        price: "money",
        numpurchases: "integer"
    },
    News: {
        id: "integer",
        user_id: "integer",
        title: "string",
        docroute: "string",
        time: "timestamp",
        likes: "list"
    },
    Message: {
        chat_id: "integer",
        user_id: "integer",
        content: "string",
        time: "timestamp"
    },
    Chat: {
        id: "integer",
        users_ids: "array",
        name: "string"
    },
    Reports: {
        id: "integer",
        user_id: "integer",
        description: "string",
        status: "string"
    }
};

module.exports = Models;
