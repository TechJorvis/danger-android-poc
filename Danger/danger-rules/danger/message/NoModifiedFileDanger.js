const DangerType = require("../../constants/DangerType");
const MessageNotificationChannel = require("../../danger_notifier/MessageNotificationChannel");
const BaseDanger = require("../BaseDanger");

class NoModifiedFileDanger extends BaseDanger {

    msg = "No New Files in this PR."

    constructor() {
        super(DangerType.Message, new MessageNotificationChannel());
    }

    isDanger() {
        const modifiedFiles = danger.git.modified_files;

        let isDanger = true;
        if (modifiedFiles && modifiedFiles.length > 0) {
            isDanger = false;
        }

        return isDanger;
    }
}

module.exports = NoModifiedFileDanger