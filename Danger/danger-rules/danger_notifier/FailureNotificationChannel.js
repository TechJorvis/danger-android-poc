// const fail = require("danger").fail
const NotificationChannel = require("./NotificationChannel");

class FailureNotificationChannel extends NotificationChannel {
    notify(msg) {
        fail(msg);
    }
}

module.exports = FailureNotificationChannel;