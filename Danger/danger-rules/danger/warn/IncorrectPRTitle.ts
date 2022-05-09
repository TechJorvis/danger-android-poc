import { danger } from "danger";
import { DangerType } from "../../constants/DangerType";
import { WarningNotificationChannel } from "../../danger_notifier/WarningNotificationChannel";
import { Danger } from "../Danger";

class IncorrectPRTitleDanger extends Danger {

    private static PR_TITLE_REGEX = /(\[[A-Za-z]+-[0-9]+\])\s(\[[A-Za-z]+\])\s([A-Za-z0-9]+)$/g;

    constructor() {
        super(DangerType.Warn, new WarningNotificationChannel())
    }

    protected isDanger(): boolean {
        const prTitle = danger.github.pr.title;

        const isCorrect = IncorrectPRTitleDanger.PR_TITLE_REGEX.test(prTitle);

        return !isCorrect;
    }
}

export = IncorrectPRTitleDanger;