// const danger = require("danger");
const DangerType = require("../../constants/DangerType");
const WarningNotificationChannel = require("../../danger_notifier/WarningNotificationChannel");
const Danger = require("../Danger");

class IncorrectPRTitleDanger extends Danger {

    static PR_TITLE_REGEX = /(\[[A-Za-z]+-[0-9]+\])\s(\[[A-Za-z]+\])\s([A-Za-z0-9]+)$/g;

    constructor() {
        super(DangerType.Warn, new WarningNotificationChannel())
    }

    isDanger() {
        const prTitle = danger.github.pr.title;

        const isCorrect = IncorrectPRTitleDanger.PR_TITLE_REGEX.test(prTitle);

        return !isCorrect;
    }
}

module.exports = IncorrectPRTitleDanger;