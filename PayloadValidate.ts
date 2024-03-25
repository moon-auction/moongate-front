export default class validatejs {
    public static validate(types: JSON, object: JSON) {
        for (var key in types) {
            if (types[key].required && !object[key]) {
                return false;
            }
            if (typeof types[key] === "string") {
                if (typeof object[key] !== types[key]) {
                    return false;
                }
            } else {
                if (types[key].type !== "string" && typeof object[key] !== types[key].type) {
                    return false;
                }
            }
        }
        return true;
    }
}

var types = {
    name: {
        type: "string",
        required: false
    },
    email: {
        type: "string",
        required: true
    },
    password: {
        type: "string",
        required: true,
    },
    confirm: "string"
}

var object = {
    email: "asdfas@gmail.com",
    password: "asdfasdf",
    confirm: "asdfasdf"
}