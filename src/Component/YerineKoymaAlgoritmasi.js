import React, { useState } from "react";

function YerineKoymaAlgoritması() {
  let alphabeto = "zyvüutşsrpöonmlkjiıhğgfedçcba";
  let alphabet = "abcçdefgğhıijklmnoöprsştuüvyz";

  const [inputValue, setInputValue] = useState("");
  const [encryptedString, setEncryptedString] = useState("");
  const [decryptedString, setDecryptedString] = useState("");

  const handleChange = (e) => {
    const value = e.target.value.replace(/\s/g, "").toLowerCase(); // Boşlukları kaldır ve küçük harfe dönüştür
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
          const encryptedCharacter = alphabeto[j];
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
        if (encryptedString[i] === alphabeto[j]) {
          const decryptedCharacter = alphabet[j];
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
    <div style={{ color: "red", margin: 10 }}>
      <label style={{ fontWeight: "bold" }}>Yerine Koyma Algoritması</label>
      <br />
      <label>Metin: </label>
      <input
        name="inputValueCaesar"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <br />
      <button onClick={Encrypt}>Şifrele </button>
      <button onClick={Decrypt}>Çöz</button>
      <br />
      <label>Şifrelenmiş Metin: </label>
      <input
        name="encryptedString"
        type="text"
        value={encryptedString}
        readOnly
      />
      <br />
      <label>Çözülmüş Metin: </label>
      <input
        name="decryptedString"
        type="text"
        value={decryptedString}
        readOnly
      />
    </div>
  );
}

export default React.memo(YerineKoymaAlgoritması);
