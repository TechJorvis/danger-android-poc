// const warn = require("danger").warn;
const NotificationChannel = require("./NotificationChannel");

class WarningNotificationChannel extends NotificationChannel {
    notify(msg) {
        warn(msg);
    }
}

module.exports = WarningNotificationChannel;