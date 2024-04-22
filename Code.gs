// ----------- Validate JWT Token ---------------

function validateJWT (jsonWebToken, privateKey) {
  const [header, payload, signature] = jsonWebToken.split('.');
  const signatureBytes = Utilities.computeHmacSha256Signature(`${header}.${payload}`, privateKey);
  const validSignature = Utilities.base64EncodeWebSafe(signatureBytes);
  if (signature === validSignature.replace(/=+$/, '')) {
    const blob = Utilities.newBlob(Utilities.base64Decode(payload)).getDataAsString();
    const { exp, ...data } = JSON.parse(blob);
    if (new Date(exp * 1000) < new Date()) {
      throw new Error('The token has expired');
    }

    data['token'] = jsonWebToken;

    return data;
  } else {
    throw 'Error: Invalid JWT token.'
  }
};

// ============ AUTH HELPER FUNCS =====================

// ----------- Generate JWT Token ---------------

function generateJWTToken (data, pvtKey, tokenExpiry) {
  // Your super secret private key
  const privateKey = pvtKey;
  const accessToken = createJwt({
    privateKey,
    expiresInHours: tokenExpiry, 
    data,
  });

  return accessToken;
};


// ============= Encryption ================

function encryptText(text, initializationVector, encryptionKey) {
  const iv = CryptoJS.enc.Base64.parse(initializationVector)
  const key = CryptoJS.enc.Hex.parse(encryptionKey)

  let encryptedMessage = CryptoJS.AES.encrypt(text, key, { iv, mode: CryptoJS.mode.CBC }).toString();
  // Logger.log(encryptedMessage);
  return encryptedMessage;
}


// ============= Decryption ================

function decryptText(encryptedText, initializationVector, encryptionKey) {
  const iv = CryptoJS.enc.Base64.parse(initializationVector);
  const key = CryptoJS.enc.Hex.parse(encryptionKey);
  let decryptedMessage = CryptoJS.AES.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
  // Logger.log(decryptedMessage);
  return decryptedMessage;
}
