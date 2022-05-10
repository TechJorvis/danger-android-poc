const DangerType = require("../../constants/DangerType");
const MessageNotificationChannel = require("../../danger_notifier/MessageNotificationChannel");
const BaseDanger = require("../BaseDanger");

class NoNewFileDanger extends BaseDanger {

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