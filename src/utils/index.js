const { removeDuplicates, splitUrl, wait, wait_loop } = require("./001")
const { store, valid_asset_Files } = require("./fetch_files")

console.log("utils")

module.exports = {
    removeDuplicates,
    splitUrl,
    store,
    valid_asset_Files,
    wait,
    wait_loop
}