---
id: introduction
sidebar_label: Introduction
title: Introduction
---
# Introduction GINAR API

The GINAR API is organized around [REST](https://en.wikipedia.org/wiki/Representational_state_transfer).
- We use built-in HTTP features, like HTTP authentication and HTTP verbs, which are understood by off-the-shelf HTTP clients.
- JSON is returned by all API responses, including errors.

## Base URL
```https://api.ginar.io/```

For security, we build 2 secure layer: **HTTP authentication** and **IP whitelist**.
