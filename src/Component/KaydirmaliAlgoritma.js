import React, { useState } from "react";

function KaydirmaliAlgoritma() {
  let alphabet = "abcçdefgğhıijklmnoöprsştuüvyz";
  const [inputValue, setInputValue] = useState("");
  const [encryptedString, setEncryptedString] = useState("");
  const [decryptedString, setDencryptedString] = useState("");
  const [scrollNumber, setScrollNumber] = useState(1);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase().replace(/\s/g, ""); // Boşlukları kaldır
    // Sadece Türk alfabesindeki harfleri kabul etmek için kontrol
    if (/^[abcçdefgğhıijklmnoöprsştuüvyz]*$/i.test(value)) {
      setInputValue(value);
    } else {
      alert("Lütfen sadece Türk alfabesindeki harfleri giriniz.");
    }
  };

  const handleChangeScroll = (e) => {
    const value = e.target.value;
    if (value === "" || (/^\d+$/.test(value) && parseInt(value) !== 0)) {
      setScrollNumber(parseInt(value, 10)); // parseInt ile değeri ondalıklı sayıya çevirirken, 10 tabanında işlem yapılacağını belirtmek önemlidir.
    } else {
      alert("Lütfen tam sayı giriniz. ve sıfırdan farklı sayı giriniz.");
    }
  };

  function Encrypt() {
    let scrollArray = [];
    for (let i = 0; i < inputValue.length; i++) {
      for (let j = 0; j < 29; j++) {
        if (inputValue[i] === alphabet[j]) {
          const encryptedCharacte = alphabet[(j + scrollNumber) % 29];
          scrollArray.push(encryptedCharacte);
        }
      }
    }

    const encryptedString = scrollArray.join("");
    setEncryptedString(encryptedString);
    return console.log(encryptedString);
  }

  function Dencrypt() {
    let decryptedArray = [];
    for (let i = 0; i < encryptedString.length; i++) {
      for (let j = 0; j < 29; j++) {
        if (encryptedString[i] === alphabet[j]) {
          const decryptedCharacter = alphabet[(j - scrollNumber + 29) % 29];
          decryptedArray.push(decryptedCharacter);
        }
      }
    }
    let decryptedString = decryptedArray.join("");
    setDencryptedString(decryptedString);
    return console.log(decryptedString);
  }

  return (
    <div>
      <br />
      <label style={{ color: "green", fontWeight: "bold" }}>
        Kaydırmalı Algoritma
      </label>
      <br />
      <br />
      <label style={{ color: "green" }}>Metin: </label>
      <input
        name="inputValueScroll"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <br />
      <br />
      <label style={{ color: "green" }}> Kaydırma Miktari: </label>
      <input
        name="inputValueScrollNumber"
        type="number"
        value={scrollNumber}
        onChange={handleChangeScroll}
      />
      <br />
      <br />
      <button onClick={Encrypt}>Şifrele </button>
      <button onClick={Dencrypt}>Çöz</button>
      <br />
      <br />
      <label style={{ color: "green" }}>Şifrelenmiş Metin: </label>
      <input
        name="encryptedString"
        type="text"
        value={encryptedString}
        readOnly
      />
      <br />
      <br />
      <label style={{ color: "green" }}>Çözülmüş Metin: </label>
      <input
        name="decryptedString"
        type="text"
        value={decryptedString}
        readOnly
      />
    </div>
  );
}

export default React.memo(KaydirmaliAlgoritma);
