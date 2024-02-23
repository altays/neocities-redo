const { DateTime } = require("luxon");

const postDate = (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
}

module.exports = postDate;