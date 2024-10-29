import React, { useState } from "react";

const VigenereCipher = () => {
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const alphabet = "abcçdefgğhıijklmnoöprsştuüvyz";

  const encrypt = () => {
    let encrypted = "";
    const keyLength = key.length;
    const textLength = text.length;

    for (let i = 0; i < textLength; i++) {
      const keyChar = key[i % keyLength];
      const keyIndex = alphabet.indexOf(keyChar);
      const textChar = text[i];
      if (alphabet.includes(textChar)) {
        const newIndex =
          (alphabet.indexOf(textChar) + keyIndex) % alphabet.length;
        encrypted += alphabet[newIndex];
      } else {
        encrypted += textChar;
      }
    }

    setEncryptedText(encrypted);
  };

  const decrypt = () => {
    let decrypted = "";
    const keyLength = key.length;
    const encryptedLength = encryptedText.length;

    for (let i = 0; i < encryptedLength; i++) {
      const keyChar = key[i % keyLength];
      const keyIndex = alphabet.indexOf(keyChar);
      const encryptedChar = encryptedText[i];
      if (alphabet.includes(encryptedChar)) {
        let newIndex = alphabet.indexOf(encryptedChar) - keyIndex;
        if (newIndex < 0) {
          newIndex += alphabet.length;
        }
        decrypted += alphabet[newIndex];
      } else {
        decrypted += encryptedChar;
      }
    }

    setDecryptedText(decrypted);
  };

  return (
    <div>
      <label>Vigenere Algoritmasi</label>
      <br />
      <label>Metin:</label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value.toLowerCase())}
      />
      <br />
      <label>Anahtar:</label>
      <input
        type="text"
        value={key}
        onChange={(e) => setKey(e.target.value.toLowerCase())}
      />
      <br />
      <button onClick={encrypt}>Şifrele</button>
      <button onClick={decrypt}>Çöz</button>
      <br />
      <label>Şifrelenmiş Metin:</label>
      <input type="text" value={encryptedText} readOnly />
      <br />
      <label>Çözülmüş Metin:</label>
      <input type="text" value={decryptedText} readOnly />
    </div>
  );
};

export default VigenereCipher;
