var masterKey = "626F623F35F5E531D63C3363B43066A83962333061E5313D"; // Master Key should be 24 bytes length
var encrypted = Cryptology.des3({
      data : "Smartface",
      masterKey : masterKey,
      modeOfOperation : "ecb",
      initializationVector : "",
      paddingType : "pkcs7",
      mode : "encrypt",
      inputFormat : "byte",
        resultFormat : "hex" // result format and master key must be in same format
    });
alert("encrypted: " + encrypted);
 
var decrypted = Cryptology.des3({
      data : encrypted,
      masterKey : masterKey,
      modeOfOperation : "ecb",
      initializationVector : "",
      paddingType : "pkcs7",
      mode : "decrypt",
      inputFormat : "hex",
      resultFormat : "byte"
});
alert("decrypted: " + decrypted);