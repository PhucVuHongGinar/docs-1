---
id: request_number
sidebar_label: Request Number
title: Request Number
---
# Request Number
After passed authentication, you can request secure random number from GINAR system by the GINAR API. First, you need to initialize your request.
## API initialize
* API URL: 
> https://api.ginar.io/rng/initialize/ **{contribute_number}**
* Method: ``GET``
* Parameters:
	* **contibute_number**:  An arbitrary number that the user contributes to the public blockchain generating random numbers, each contributed number from users is a random entropy that affects the random number messages users should get for their sessions.
		* _type_: **string** (required)
		* _constraint_: string length in 1..50
* Return: A hex-string session key that can be used as input to the API Generate. This session key is kept in the server until it is used.
	* _type_: **string** (256-bit hex-string)
* Sample request: ```https://api.ginar.io/rng/initialize/pqwoinnvzhgqiytzcce341v```
* Sample response:
```a3fc7800937f4c984c7a9aaa6e02e98a6f4657531da35b5a59bbf5d23753c82d```
## API Generate
* API URL:
> https://api.ginar.io/rng/generate/ **{sessionKey}/[{dest_lower}/{dest_upper}]**
* Method: ``GET``
* Parameters:
	* **sessionKey**: a valid session key
		* _type_: **string** (required)
		* _constraint_: 256-bit hex-string
	* **dest_lower**:  the minimum value of the result numbers
		* _type_: **integer** (optional)
		* _constraint_: value in **[0, dest_upper)**
	* **dest_upper**: the maximum value of the result numbers
		* _type_: **integer** (optional)
		* _constraint_: value in **(des_lower, 2^256]**
* Return:  a JSON string
	* **sessionKey**: the hex-string session key that can be input for the next request and will be expired until it is used or the session time out.
		* _type_: **string** (256-bit hex-string)
	* **beacon**: the random number as a hex string
		* _type_: **string** (256-bit hex-string)
	* **m**: the unique number GINAR get from SCRAPE-contract on public blockchain which improve security of the random number.
		* _type_: **string** (256-bit decimal)
	* **num**: a list of extracted numbers from **_beacon_** that are uniformly distributed in the desired range **_[dest_lower, dest_upper]_**. This field is only added to the response when both **_dest_lower_** and **_dest_upper_** are specified in the request.
		* _type_: **array of string**
* Sample request: 
``` 
https://api.ginar.io/rng/generate/4f0be1540f958247f71ad78b47674b80507017d6ba137fdd68e813bc080f3a68/1000/2000
```
* Sample response:
```
{
 	"sessionKey": "5c6384966f5705a465b9c9c78f4b9d3b80d9682151c55b9f9585d27fb9b8b34e",
 	"beacon": "0xda521243a1d89a240a33e1cc3aa9b2c24693efd2867e639d71bb14c9aee0c91e",
 	"m": "3032852705800073042698913389297468268373614317895938797777405436809841493858",
 	"nums": ["1530", "1097", "1688", "1355", "1539", "1000", "1284", "1756", "1346", "1789", "1038", "1344", "1043", "1076", "1030", "1000", "1776", "1334", "1072", "1933", "1158", "1208", "1837", "1597", "1312"]
 }
 ```
