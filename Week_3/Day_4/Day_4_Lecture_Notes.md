## Day 2 Lecture Notes - Security and Real World HTTP Servers


### Topics
- Authentication vs Authorization
  - Authentication
    - confirming your identity
    - proving you are a specific user
  - Authorization
    - granting access
    - verifying that you have the correct access to see/get something

- Encoded vs Encrypted
  - Encoded:
    - transforms data into another format using a scheme that is somewhat available, so that is can be easily reseverse. <b>Purpose to transform data to a usable state</b>
  - Encryption:
    - tranforms data into another format in such a way that only specific individuals can reverse the transformation. <b>Purpose to obscure data</b>
  - Hashing:
    - You cannot reverse hash and get back the data from a hashing algorithm - so good for passwords

- HTTP vs HTTPs
  - HTTP is fine when in development but is not very secure in production as the requests/response is transported in plain text
  - The solution is HTTPs which is set up at the deployment phase, you do not need to change your code 

  



