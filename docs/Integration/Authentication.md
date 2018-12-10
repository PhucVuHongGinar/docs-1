---
id: authentication
sidebar_label: Authentication
title: Authentication
---

To use the GINAR API, you have to authenticate your account by get you API keys in the Dashboard. Your API keys carry many privileges, so be sure to keep them secure. Do not share your secret API keys in publicly areas.

Your API keys is a pair of keys: **public key** and **secret key**.
 * **_public key_**: unique string that identify your account.
  * Example: ```pk_1971543983496788```
 * **_secret key_**: a string which you can generate from _public key_. To manage your secret keys, take a look **API keys** section.
  * Exmple:  ```sk_1971543983496790```

_public key_ and _secret key_ are also **account** and **password** which you need to pass HTTP authentication before using the GINAR API.
## API keys
```Dashboard/Development/API Keys```

![API_key](https://raw.githubusercontent.com/ginarteam/docs/master/docs/Integration/API_key.png)
You can manage your API keys in Dashboard: 
 * Check public key.
 * Generate secret key: Click **Generate Secret Key** button, a box will pop-up, set your key name. For security, we recommend you to change your secret key frequently.
![gen_box](https://raw.githubusercontent.com/ginarteam/docs/master/docs/Integration/generate_box.png)
 * Edit secret key: you can edit your key name, key  value of active-deactive your key.
![edit_key](https://raw.githubusercontent.com/ginarteam/docs/master/docs/Integration/edit_key.png)
