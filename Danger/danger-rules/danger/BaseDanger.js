class BaseDanger {

    dangerType;
    notificationChannel;

    constructor(dangerType, notificationChannel) {
        this.dangerType = dangerType;
        this.notificationChannel = notificationChannel;
    }

    isDanger() {
        return false;
    }

    checkAndNotify(msg) {
        if (this.isDanger()) {
            this.notify(msg);
            return true;
        }

        return false;
    }

    notify(msg) {
        this.notificationChannel.notify(msg);
    }

    getType() {
        return this.dangerType;
    }
}

module.exports = BaseDanger;