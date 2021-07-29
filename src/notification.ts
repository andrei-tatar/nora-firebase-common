export interface WebpushNotification {
    /**
     * Title text of the notification.
     */
    title?: string;
    /**
     * An array of notification actions representing the actions
     * available to the user when the notification is presented.
     */
    actions?: Array<{
        /**
         * An action available to the user when the notification is presented
         */
        action: string;
        /**
         * Optional icon for a notification action.
         */
        icon?: string;
        /**
         * Title of the notification action.
         */
        title: string;
    }>;
    /**
     * URL of the image used to represent the notification when there is
     * not enough space to display the notification itself.
     */
    badge?: string;
    /**
     * Body text of the notification.
     */
    body?: string;
    /**
     * The direction in which to display the notification. Must be one
     * of `auto`, `ltr` or `rtl`.
     */
    dir?: 'auto' | 'ltr' | 'rtl';
    /**
     * URL to the notification icon.
     */
    icon?: string;
    /**
     * URL of an image to be displayed in the notification.
     */
    image?: string;
    /**
     * The notification's language as a BCP 47 language tag.
     */
    lang?: string;
    /**
     * A boolean specifying whether the user should be notified after a
     * new notification replaces an old one. Defaults to false.
     */
    renotify?: boolean;
    /**
     * Indicates that a notification should remain active until the user
     * clicks or dismisses it, rather than closing automatically.
     * Defaults to false.
     */
    requireInteraction?: boolean;
    /**
     * A boolean specifying whether the notification should be silent.
     * Defaults to false.
     */
    silent?: boolean;
    /**
     * An identifying tag for the notification.
     */
    tag?: string;
    /**
     * Timestamp of the notification. Refer to
     * https://developer.mozilla.org/en-US/docs/Web/API/notification/timestamp
     * for details.
     */
    timestamp?: number;
    /**
     * A vibration pattern for the device's vibration hardware to emit
     * when the notification fires.
     */
    vibrate?: number | number[];

    data?: {
        /**
         * Used by NORA to identify the notification sender.
         */
        sender?: string;
        /**
         * Used to set a default action for clicking this notification.
         */
        defaultAction?: string;
    };
}
