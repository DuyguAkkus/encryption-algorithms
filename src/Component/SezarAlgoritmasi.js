import React, { useState } from "react";

function SezarAlgoritmasi() {
  let alphabet = "abcçdefgğhıijklmnoöprsştuüvyz";
  const [inputValue, setInputValue] = useState("");
  const [encryptedString, setEncryptedString] = useState("");
  const [decryptedString, setDecryptedString] = useState("");

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase().replace(/\s/g, ""); // Boşlukları kaldır
    // Sadece Türk alfabesindeki harfleri kabul etmek için kontrol
    if (/^[abcçdefgğhıijklmnoöprsştuüvyz]*$/i.test(value)) {
      setInputValue(value);
    } else {
      alert("Lütfen sadece Türk alfabesindeki harfleri giriniz.");
    }
  };

  function Encrypt() {
    let caesarArray = [];
    for (let i = 0; i < inputValue.length; i++) {
      for (let j = 0; j < 29; j++) {
        if (inputValue[i] === alphabet[j]) {
          const encryptedCharacter = alphabet[(j + 3) % 29];
          caesarArray.push(encryptedCharacter);
          break;
        }
      }
    }

    const encryptedString = caesarArray.join("");
    setEncryptedString(encryptedString);
    return console.log(encryptedString);
  }

  function Decrypt() {
    let decryptedArray = [];
    for (let i = 0; i < encryptedString.length; i++) {
      for (let j = 0; j < 29; j++) {
        if (encryptedString[i] === alphabet[j]) {
          const decryptedCharacter = alphabet[(j - 3 + 29) % 29];
          decryptedArray.push(decryptedCharacter);
          break;
        }
      }
    }
    let decryptedString = decryptedArray.join("");
    setDecryptedString(decryptedString);
    return console.log(decryptedString);
  }

  return (
    <div>
      <br />
      <label style={{ color: "blue", fontWeight: "bold" }}>
        Sezar Algoritmasi
      </label>
      <br />
      <br />
      <label style={{ color: "blue" }}>Metin: </label>
      <input
        name="inputValueCaesar"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <br />
      <br />
      <button onClick={Encrypt}>Şifrele </button>
      <button onClick={Decrypt}>Çöz</button>
      <br />
      <br />
      <label style={{ color: "blue" }}>Şifrelenmiş Metin: </label>
      <input
        name="encryptedString"
        type="text"
        value={encryptedString}
        readOnly
      />
      <br />
      <br />
      <label style={{ color: "blue" }}>Çözülmüş Metin: </label>
      <input
        name="decryptedString"
        type="text"
        value={decryptedString}
        readOnly
      />
    </div>
  );
}

export default React.memo(SezarAlgoritmasi);
