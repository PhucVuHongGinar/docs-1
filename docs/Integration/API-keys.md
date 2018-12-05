---
id: api-keys
sidebar_label: API Keys
title: API Keys
---



# GINAR Random Service REST APIs Guide

GINAR is a Decentralized Random Number Generator (DRNG)
## GINAR's solution for generating random numbers via Decentralized APIs

Visit our [website](https://ginar.io) and checkout the [whitepaper](https://www.ginar.io/whitepaper-v2.0.pdf) for more details.

## GINAR REST APIs
## Authorization
* **Before using the API**, you need to log-in your account and get your public and secret keys in **API Keys tab**.
* To get authorized, use public and secret keys
![API_key](API_key.png?raw=true)
### Initialize

* **API URL:** https&#58;//api.ginar.io/rng/initialize/**{_contribute_number_}**
* **Method:** GET
* **Parameters:**
	- **_contribute_number_:** An arbitrary number that the user contributes to the public blockchain generating random numbers, each contributed number from users is a random entropy that affects the random number messages users should get for their sessions.
		- type: **string, required**
		- constraint: **string length in 1..50**
* **Return:** a hex-string session key that can be used as input to the API Generate. This session key is kept in the server until it is used.
* **Sample request:**
	```
    https://api.ginar.io/rng/initialize/pqwoinnvzhgqiytzcce341v
    ```
* **Sample response:**
	```
    a3fc7800937f4c984c7a9aaa6e02e98a6f4657531da35b5a59bbf5d23753c82d
    ```
### Generate
* **API URL:** https&#58;//api.ginar.io/rng/generate/**{_ticket_code_}/[{_dest_lower_}/{_dest_upper_}]**
* **Method:** GET
* **Parameters:**
	- **_ticket_code_:** a valid session key
		- type: **hex string, required**
		- constraint: **string length = 64**
	- **_dest_lower_:** the minimum value of the result numbers
		- type: **integer, optional**
		- constraint: **0 <= _dest_lower_ < _dest_upper_**
	- **_dest_upper_:** the maximum value of the result numbers
		- type: **integer, optional**
		- constraint: **_dest_lower_ < _dest_upper_ < 2^256**
* **Return:** a JSON string
	- **ticketCode:** the hex-string session key that can be input for the next request and will be expired until is is used.
	- **beacon:** the random number as a hex string
	- **m:** the unique number GINAR get from SCRAPE-contract on public blockchain which improve security of the random number.
	- **nums:** a list of extracted numbers from **beacon** that are uniformly distributed in the desired range **[_dest_lower_, _dest_upper_]**. This field is only added to the response when both **_dest_lower_** and **_dest_upper_** are specified in the request.
* **Sample request:**
	```
    https://api.ginar.io/rng/generate/4f0be1540f958247f71ad78b47674b80507017d6ba137fdd68e813bc080f3a68/1000/2000
    ```
* **Sample response:**
	```
    {
		"ticketCode": "5c6384966f5705a465b9c9c78f4b9d3b80d9682151c55b9f9585d27fb9b8b34e",
		"beacon": "0xda521243a1d89a240a33e1cc3aa9b2c24693efd2867e639d71bb14c9aee0c91e",
		"m": "3032852705800073042698913389297468268373614317895938797777405436809841493858",
		"nums": ["1530", "1097", "1688", "1355", "1539", "1000", "1284", "1756", "1346", "1789", "1038", "1344", "1043", "1076", "1030", "1000", "1776", "1334", "1072", "1933", "1158", "1208", "1837", "1597", "1312"]
	}
    ```
* **Errors:** When the input session key is not valid, or the parameters violate their constraints, the API returns one of following error messages.
	```
    "invalid request"
    ```
	```
    "invalid destLower"
    ```
	```
    "invalid destUpper"
    ```
	```
    "destLower should be less than destUpper"
    ```
