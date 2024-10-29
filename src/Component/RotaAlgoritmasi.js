import React, { useState } from "react";

function Routealgorithm() {
  const [inputValue, setInputValue] = useState("");
  const [key, setKey] = useState("");
  const [encryptedString, setEncryptedString] = useState("");
  const [decryptedString, setDecryptedString] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\s/g, "").toLowerCase(); // Boşlukları kaldır ve küçük harfe dönüştür
    // Sadece Türk alfabesindeki harfleri kabul etmek için kontrol
    if (/^[abcçdefgğhıijklmnoöprsştuüvyz]*$/i.test(value)) {
      setInputValue(value);
    } else {
      alert("Lütfen sadece Türk alfabesindeki harfleri giriniz.");
    }
  };

  const handleKeyChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Sadece rakamları al
    setKey(value);
  };

  const encrypt = () => {
    let keyNumber = parseInt(key);
    let columnSize = Math.ceil(inputValue.length / keyNumber);
    let rowSize = keyNumber;

    let matrix = [];
    for (let i = 0; i < rowSize; i++) {
      matrix.push([]);
    }

    let index = 0;
    for (let i = 0; i < rowSize; i++) {
      for (let j = 0; j < columnSize; j++) {
        if (index < inputValue.length) {
          matrix[i].push(inputValue[index]);
          index++;
        } else {
          matrix[i].push("x");
        }
      }
    }

    console.log("Matris:");
    for (let i = 0; i < rowSize; i++) {
      console.log(matrix[i].join(""));
    }

    let encryptedText = "";
    for (let i = 0; i < columnSize; i++) {
      for (let j = 0; j < rowSize; j++) {
        encryptedText += matrix[j][i];
      }
    }

    console.log("Şifrelenmiş Metin:", encryptedText);
    setEncryptedString(encryptedText);
  };

  const decrypt = () => {
    let keyNumber = parseInt(key);
    let columnSize = Math.ceil(encryptedString.length / keyNumber);
    let rowSize = keyNumber;

    let matrix = [];
    for (let i = 0; i < rowSize; i++) {
      matrix.push([]);
    }

    let index = 0;
    for (let i = 0; i < columnSize; i++) {
      for (let j = 0; j < rowSize; j++) {
        if (index < encryptedString.length) {
          matrix[j].push(encryptedString[index]);
          index++;
        } else {
          matrix[j].push("x");
        }
      }
    }

    let decryptedText = "";
    for (let i = 0; i < rowSize; i++) {
      for (let j = 0; j < columnSize; j++) {
        if (matrix[i][j] !== "x") {
          decryptedText += matrix[i][j];
        }
      }
    }

    console.log("Çözülmüş Metin:", decryptedText);
    setDecryptedString(decryptedText);
  };

  return (
    <div style={{ color: "green" }}>
      <label style={{ fontWeight: "bold" }}>Rota Algoritması</label>
      <br />
      <br />
      <label>Metin:</label>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <br />
      <br />
      <label>Anahtar Sayısı:</label>
      <input type="text" value={key} onChange={handleKeyChange} />
      <br />
      <br />
      <button onClick={encrypt}>Şifrele</button>
      <button onClick={decrypt}>Çöz</button>
      <br />
      <br />
      <label>Şifrelenmiş Metin:</label>
      <input type="text" value={encryptedString} readOnly />
      <br />
      <br />
      <label>Çözülmüş Metin:</label>
      <input type="text" value={decryptedString} readOnly />
    </div>
  );
}

export default React.memo(Routealgorithm);
