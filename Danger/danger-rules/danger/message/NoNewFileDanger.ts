import { danger } from "danger";
import { DangerType } from "../../constants/DangerType";
import { MessageNotificationChannel } from "../../danger_notifier/MessageNotificationChannel";
import { Danger } from "../Danger";

export default class NoNewFileDanger extends Danger {

    readonly msg: string = "No New Files in this PR."

    constructor() {
        super(DangerType.Message, new MessageNotificationChannel());
    }

    protected isDanger(): boolean {
        const newFiles = danger.git.created_files;

        let isDanger = true;
        if (newFiles && newFiles.length > 0) {
            isDanger = false;
        }

        return isDanger;
    }
}

module.exports = { NoNewFileDanger };