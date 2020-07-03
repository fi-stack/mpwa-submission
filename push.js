const webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BHoD1Z_JPp9E4uM9PMxPmn_cuDxwQwpghIzxpv59jEsc0VhKwXp7hymsh3LQr1ptVG9q9AUXU0ENyQvNvebU29A",
    "privateKey": "Hb-ppKfzcarzu0rqPjiYTLvtxs8kV1uPcffyPeydRks"
};

webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/ctnxbdBGhBo:APA91bEf2BWcnZ_LQ4xqQAG2rpXCir7ZwsSV3VvBU76snhpGFGSkPIQtlZEjWJPhBc3TarjpC_9BM8nc5Nuc9WKbwkLicJ5CanFVSmoYlXttNlK3uSmQ4tjDFCa5CoQY3Vjl6Q3yhD2R",
    "keys": {
        "p256dh": "BJgMzcHXAQtcivfPQCtGxWdZU4dhIVVBW4hYkHOE57Lg5byd51zKiAPNMgDlV0wyIDXEhZ/DoHKgOzyL69EkZtc=",
        "auth": "3p3+Q7VdsbE0QqoYUoE6wg=="
    }
};
var payload = 'Hello World!';

var options = {
    gcmAPIKey: '418598804709',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);