# About This Library
This is Google Apps Script library containing cryptographic operations such as generating and validating JWTs, as well as encrypting and decrypting text data

# Library Script ID
1eDrOHbEPYcGUpbS-IBTf4_O0Ljh9Kc3J5G0t_XBQ0H9TIQ1mmQYYDAXJ

# How to Use Library
To add the library to your Apps Script project, follow these steps:

1. Open your script in the Apps Script code editor.
2. In the left menu, click on the "+" symbol next to Libraries.
3. In the "Find a Library" text box, enter the following script ID:
1eDrOHbEPYcGUpbS-IBTf4_O0Ljh9Kc3J5G0t_XBQ0H9TIQ1mmQYYDAXJ
4. Click the "Select" button.
5. Choose a version from the dropdown box (it's recommended to select the latest version for the most up-to-date features and fixes).
6. Click the "Save" button to add the library to your project.

Now you can use the following functions in your script by calling "JWTAuthEncryptionUtilFuncs" followed by the dot and the function name.

## Functions Documentation

### generateJWTToken(data, pvtKey, tokenExpiry)
- **Description**: Generates a JSON Web Token (JWT) using the provided data, private key, and token expiration time.
- **Parameters**:
  - `data`: The data to be included in the JWT payload.
  - `pvtKey`: The private key used for signing the JWT.
  - `tokenExpiry`: The expiration time of the JWT, specified in seconds or a specific date/time format.

### validateJWT(jsonWebToken, privateKey)
- **Description**: Validates a JSON Web Token (JWT) by verifying its signature using the provided private key.
- **Parameters**:
  - `jsonWebToken`: The JWT to be validated.
  - `privateKey`: The private key used for validating the JWT signature.

### encryptText(text, initializationVector, encryptionKey)
- **Description**: Encrypts a given text using an initialization vector and an encryption key.
- **Parameters**:
  - `text`: The text to be encrypted.
  - `initializationVector`: The initialization vector (IV) used in the encryption process.
  - `encryptionKey`: The encryption key used for encrypting the text.

### decryptText(encryptedText, initializationVector, encryptionKey)
- **Description**: Decrypts an encrypted text using the specified initialization vector and encryption key.
- **Parameters**:
  - `encryptedText`: The encrypted text to be decrypted.
  - `initializationVector`: The initialization vector (IV) used in the encryption process.
  - `encryptionKey`: The encryption key used for decrypting the text.
