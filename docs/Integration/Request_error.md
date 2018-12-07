---
id: request_error
sidebar_label: Request Error
title: Request Error
---
# Error

GINAR uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the ``2xx`` range indicate success. Codes in the ``4xx`` range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a charge failed, etc.). Codes in the ``5xx`` range indicate an error with GINAR's servers (these are rare).

 
 Error code | Meaning 
------------|---------
200 - OK     |    Everything worked as expected. 
400 - Bad Request    |    The request was unacceptable, often due to missing a required parameter.
401 - Unauthorized    |    No valid API key provided.
402 - Request Failed   |   The parameters were valid but the request failed. 
404 - Not Found   |   The requested resource doesn't exist.
409 - Conflict  |   The request conflicts with another request (perhaps due to using the same idempotent key). 
429 - Too Many Requests   |    Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. 
500, 502, 503, 504 - Server Errors   |    Something went wrong on GINAR's end. (These are rare.)

Additionally, when the input session key is not valid, or the parameters violate their constraints, the API returns one of following error messages.

 Error message | Meaning 
-------------------|---------
``` "invalid request"```    |    session_key is not valid 
```"invalid destLower"```   |    dest_Lower is not valid
``` "invalid destUpper"```   |    dest_Upper is not valid
```"destLower should be less than destUpper"```  |  Generate parameters (dest_Lower and dest_Upper) do not meet the constraint

# Handling Error
THe GINAR API can produce errors for many reasons, such as invalid parameters, authentication errors, network unavailability.
We will try to limit errors from our sever.
