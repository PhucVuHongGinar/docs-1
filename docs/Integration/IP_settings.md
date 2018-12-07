---
id: ip-settings
sidebar_label: IP Settings
title: IP Settings
---
# IP Settings
```
Dashboard/Development/IP Settings
```
For security, we build 2 secure layer: **HTTP authentication** and **IP whitelist**.
Your device's IP must be in ** IP whitelist** to using GINAR services. You can manage your **whitelist** in Dashboard.

## Add IP address
* Add IP adress to white list separated by semicolon in the box below.
* Click **Add To WhiteList**
* Click **Save**
![IP_settings](https://raw.githubusercontent.com/ginarteam/docs/master/docs/Integration/IP_settings.png)

## Delete IP address
* Click the IP which you want to delete, you will see a pop-up notification.
![delIP](https://raw.githubusercontent.com/ginarteam/docs/master/docs/Integration/delIP.png)
* Click **Save**

## Error
* If your IP is not in white list, you can not access to the API
```
{
    "message": "your current IP (113.161.84.237) is not whitelisted"
}
```
