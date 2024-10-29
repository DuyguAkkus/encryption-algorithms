import React, { useState } from "react";
import "../App.css";

function DogrusalAlgoritma() {
  let alphabet = "abcçdefgğhıijklmnoöprsştuüvyz";
  const [inputValue, setInputValue] = useState("");
  const [encryptedString, setEncryptedString] = useState("");
  const [decryptedString, setDecryptedString] = useState("");
  const [aNumber, setANumber] = useState("");
  const [bNumber, setBNumber] = useState("");

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
        let x = j;
        if (inputValue[i] === alphabet[j]) {
          let y = (aNumber * x + bNumber) % 29;
          caesarArray.push(alphabet[y]);
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
    let aInverse = 0;
    // a'nın tersini bulma
    for (let i = 0; i < 29; i++) {
      if ((aNumber * i) % 29 === 1) {
        aInverse = i;
        break;
      }
    }

    for (let i = 0; i < encryptedString.length; i++) {
      for (let j = 0; j < 29; j++) {
        let y = j;
        if (encryptedString[i] === alphabet[j]) {
          let x = (aInverse * (y - bNumber + 29)) % 29;
          decryptedArray.push(alphabet[x]);
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
      <label style={{ color: "purple", fontWeight: "bold" }}>
        Doğrusal Algoritma
      </label>
      <br />
      <br />
      <label style={{ color: "purple" }}>Metin: </label>
      <input
        name="inputValue"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <br />
      <br />
      <label style={{ color: "purple" }}>a Değeri: </label>
      <input
        name="aNumber"
        type="number"
        value={aNumber}
        onChange={(e) => setANumber(parseInt(e.target.value))}
      />
      <br />
      <br />
      <label style={{ color: "purple" }}>b Değeri: </label>
      <input
        name="bNumber"
        type="number"
        value={bNumber}
        onChange={(e) => setBNumber(parseInt(e.target.value))}
      />
      <br />
      <br />
      <button onClick={Encrypt}>Şifrele </button>
      <button onClick={Decrypt}>Çöz</button>
      <br />
      <br />
      <label style={{ color: "purple" }}>Şifrelenmiş Metin: </label>
      <input
        name="encryptedString"
        type="text"
        value={encryptedString}
        readOnly
      />
      <br />
      <br />
      <label style={{ color: "purple" }}>Çözülmüş Metin: </label>
      <input
        name="decryptedString"
        type="text"
        value={decryptedString}
        readOnly
      />
    </div>
  );
}

export default React.memo(DogrusalAlgoritma);
