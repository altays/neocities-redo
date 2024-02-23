const { DateTime } = require("luxon");

const currentDate = () => {
    let date = DateTime.now()
    return date
}

module.exports = currentDate;