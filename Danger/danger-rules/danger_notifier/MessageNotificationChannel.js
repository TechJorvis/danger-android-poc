// const message = require("danger").message;
const NotificationChannel = require("./NotificationChannel");

class MessageNotificationChannel extends NotificationChannel {
    notify(msg) {
        message(msg);
    }
}

module.exports = MessageNotificationChannel;