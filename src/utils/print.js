const print_ = (item) => {
    if (typeof item !== "object" && item.toString) {
        console.log("if to string");
        return item.toString();
    }

    if (Array.isArray(item)) {
        console.log("Array:\n", item);
        return item;
    }
    if (typeof item === "object") {
        console.log("Object:\n", item);
        return item;
    }
    return "nothing";
};

console.log(print_({ menu: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }));
