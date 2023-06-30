const example_request = {
    full_name: {
        first_name: "",
        middle_name: "",
        last_name: "",
    },
    user_name: "",
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
        phone_number: [""],
        id_number: "",
        country: "",
    }
) => {
    let errors = {};
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
    }

    if (!e_f.user_name || typeof e_f.full_name !== "string") {
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

    return errors;
};
module.exports = {
    example_request,
    expected_fields,
    check_each_field,
};
