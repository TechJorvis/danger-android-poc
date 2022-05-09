import { fail } from "danger"
import { NotificationChannel } from "./NotificationChannel";

export class FailureNotificationChannel implements NotificationChannel {
    notify(msg: string): void {
        fail(msg);
    }
}