const example_request = {
    full_name: {
        first_name: "",
        middle_name: "",
        last_name: "",
    },
    user_name: "",
    password: "",
    phone_number: [""],
    id_number: "",
    country: "",
};

const expected_fields = Object.keys(example_request);

const check_each_field = (
    e_f = {
        full_name: {
            first_name: "",
            middle_name: "",
            last_name: "",
        },
        user_name: "",
        password: "",
        phone_number: [""],
        id_number: "",
        country: "",
    }
) => {
    let errors = {};

    check_fullname(errors, e_f);

    check_username(errors, e_f);

    check_password(errors, e_f);

    check_idnumber(errors, e_f);

    check_country(errors, e_f);

    check_phonenumber(errors, e_f);
    return errors;
};

const check_fullname = (
    errors = {},
    e_f = {
        full_name: {
            first_name: "",
            middle_name: "",
            last_name: "",
        },
        user_name: "",
        password: "",
        phone_number: [""],
        id_number: "",
        country: "",
    }
) => {
    if (
        !e_f.full_name ||
        typeof e_f.full_name !== "object" ||
        !e_f.full_name.first_name ||
        !e_f.full_name.middle_name ||
        !e_f.full_name.last_name
    ) {
        errors["full_name"] = {
            type: "expected, object",
            fields: {
                first_name: "expected, string",
                middle_name: "expected, string",
                last_name: "expected, string",
            },
        };
        if (!e_f.full_name) {
            errors["full_name"].missing = true;
        } else {
            if (!e_f.full_name.first_name) {
                errors["full_name"].fields["first_name"] += ", missing";
            } else if (typeof e_f.full_name.first_name != "string") {
                errors["full_name"].fields["first_name"] += ", wrong type";
            }
            if (!e_f.full_name.middle_name) {
                errors["full_name"].fields["middle_name"] += ", missing";
            } else if (typeof e_f.full_name.middle_name != "string") {
                errors["full_name"].fields["middle_name"] += ", wrong type";
            }
            if (!e_f.full_name.last_name) {
                errors["full_name"].fields["last_name"] += ", missing";
            } else if (typeof e_f.full_name.last_name != "string") {
                errors["full_name"].fields["last_name"] += ", wrong type";
            }
        }
    } else {
        // use full_name for user name
        e_f.user_name = `${e_f.full_name.first_name}_${e_f.full_name.middle_name[0]}_${e_f.full_name.last_name}`;
    }
};

const check_username = (
    errors = {},
    e_f = {
        full_name: {
            first_name: "",
            middle_name: "",
            last_name: "",
        },
        user_name: "",
        password: "",
        phone_number: [""],
        id_number: "",
        country: "",
    }
) => {
    if (!e_f.user_name || typeof e_f.user_name !== "string") {
        errors["user_name"] = {
            type: "expected, string",
        };

        if (!e_f.user_name) {
            errors["user_name"].missing = true;
        } else {
            if (typeof e_f.full_name != "string") {
                errors["user_name"].error = "wrong type";
            }
        }
    }
};

const check_password = (
    errors = {},
    e_f = {
        full_name: {
            first_name: "",
            middle_name: "",
            last_name: "",
        },
        user_name: "",
        password: "",
        phone_number: [""],
        id_number: "",
        country: "",
    }
) => {
    if (!e_f.password || typeof e_f.password !== "string") {
        errors["password"] = {
            type: "expected, string",
        };

        if (!e_f.password) {
            errors["password"].missing = true;
        } else {
            if (typeof e_f.full_name != "string") {
                errors["password"].error = "wrong type";
            }
        }
    }
};

const check_idnumber = (
    errors = {},
    e_f = {
        full_name: {
            first_name: "",
            middle_name: "",
            last_name: "",
        },
        user_name: "",
        password: "",
        phone_number: [""],
        id_number: "",
        country: "",
    }
) => {
    if (!e_f.id_number || typeof e_f.id_number !== "string") {
        errors["id_number"] = {
            type: "expected, string",
        };

        if (!e_f.id_number) {
            errors["id_number"].missing = true;
        } else {
            if (typeof e_f.full_name != "string") {
                errors["id_number"].error = "wrong type";
            }
        }
    }
};

const check_country = (
    errors = {},
    e_f = {
        full_name: {
            first_name: "",
            middle_name: "",
            last_name: "",
        },
        user_name: "",
        password: "",
        phone_number: [""],
        id_number: "",
        country: "",
    }
) => {
    if (!e_f.country || typeof e_f.country !== "string") {
        errors["country"] = {
            type: "expected, string",
        };

        if (!e_f.country) {
            errors["country"].missing = true;
        } else {
            if (typeof e_f.full_name != "string") {
                errors["country"].error = "wrong type";
            }
        }
    }
};

const check_phonenumber = (
    errors = {},
    e_f = {
        full_name: {
            first_name: "",
            middle_name: "",
            last_name: "",
        },
        user_name: "",
        password: "",
        phone_number: [""],
        id_number: "",
        country: "",
    }
) => {
    if (
        !e_f.phone_number ||
        !Array.isArray(e_f.phone_number) ||
        !e_f.phone_number.length
    ) {
        errors["phone_number"] = {
            type: "expected, array",
        };

        if (!e_f.phone_number) {
            errors["phone_number"].missing = true;
        } else {
            if (!Array.isArray(e_f.phone_number)) {
                errors["phone_number"].error = "wrong type";
            }
        }
    }
};

module.exports = {
    example_request,
    expected_fields,
    check_each_field,
};
