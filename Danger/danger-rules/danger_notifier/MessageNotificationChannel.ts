import { message } from "danger"
import { NotificationChannel } from "./NotificationChannel";

export class MessageNotificationChannel implements NotificationChannel {
    notify(msg: string): void {
        message(msg);
    }
}