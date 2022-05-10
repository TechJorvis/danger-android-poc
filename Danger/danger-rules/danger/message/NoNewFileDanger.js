const DangerType = require("../../constants/DangerType");
const MessageNotificationChannel = require("../../danger_notifier/MessageNotificationChannel");
const Danger = require("../Danger");

class NoNewFileDanger extends Danger {

    msg = "No New Files in this PR."

    constructor() {
        super(DangerType.Message, new MessageNotificationChannel());
    }

    isDanger() {
        const newFiles = danger.git.created_files;

        let isDanger = true;
        if (newFiles && newFiles.length > 0) {
            isDanger = false;
        }

        return isDanger;
    }
}

module.exports = NoNewFileDanger