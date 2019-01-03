const moment = require("moment");
// course says above line needs to be replaced by line below, but apparently not?
//const moment = require.requireActual("moment");

export default (timestamp = 0) => {
    return moment(timestamp)
}