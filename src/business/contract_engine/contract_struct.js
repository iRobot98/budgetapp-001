const { randomUUID } = require("crypto");

const _UUID = randomUUID;
const Promise_Base = {
    _id: _UUID(),
    from: "",
    to: "",
    amount: "",
    transactions: [
        {
            date: "", // Date string,
            _id: "", // id
            description: "", // description
            amount: "",
        },
    ],
};

console.log(Promise_Base);

const Contract_Base = {
    _id: _UUID(),
    item: {
        _id: _UUID(),
        title: "",
        image: "",
        description: "",
        type: "",
        meta_: "",
    },
    cashflow: {
        principal: "", // original full amount
        interest_percentage: "", // 1+x%
        deposit_: "", // cash amount
        installments: {
            amount: "", // cash amount
            period_: "daily" || "weekly" || "monthly" || "annually",
            start_date: "", // Date string
            end_date: "", // Date_string
            total: "",
            paid: {
                count: "", // current paid count
                amount: "", // current paid amount
            },
        },
    },
    Promises: new Array(12).fill(Promise_Base), // (Promise_Base)
};

console.log(Contract_Base);
