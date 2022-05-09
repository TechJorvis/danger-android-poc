import { DangerType } from "../constants/DangerType";
import { NotificationChannel } from "../danger_notifier/NotificationChannel";

export abstract class Danger {

    private readonly type: DangerType;
    private readonly notificationChannel: NotificationChannel;

    constructor(type: DangerType, notificationChannel: NotificationChannel) {
        this.type = type;
        this.notificationChannel = notificationChannel;
    }

    protected abstract isDanger(): boolean

    public checkAndNotify(msg: string): boolean {
        if (this.isDanger) {
            this.notify(msg);
            return true;
        }

        return false;
    }

    protected notify(msg: string): void {
        this.notificationChannel.notify(msg);
    }

    public getType() : DangerType {
        return this.type;
    }
}