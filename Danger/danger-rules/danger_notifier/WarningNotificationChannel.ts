import { warn } from "danger";
import { NotificationChannel } from "./NotificationChannel";

export class WarningNotificationChannel implements NotificationChannel {
    notify(msg: string): void {
        warn(msg);
    }
}