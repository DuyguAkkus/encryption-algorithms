import React, { useState } from "react";

function KeyedTranspositionEncryption() {
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
    let encryptedText = "";
    let keyNumber = parseInt(key);

    // Anahtar sayısına göre metni yer değiştirerek şifrele
    for (let i = 0; i < keyNumber; i++) {
      for (let j = i; j < inputValue.length; j += keyNumber) {
        encryptedText += inputValue[j];
      }
    }

    setEncryptedString(encryptedText);
  };

  const decrypt = () => {
    let decryptedText = "";
    let keyNumber = parseInt(key);
    let numRows = Math.ceil(encryptedString.length / keyNumber);
    let numColumns = keyNumber;
    let numFullColumns = encryptedString.length % keyNumber;

    let charIndex = 0;
    let grid = Array(numRows)
      .fill("")
      .map(() => Array(numColumns).fill(""));

    // Şifrelenmiş metni grid'e yerleştirme
    for (let col = 0; col < numColumns; col++) {
      let columnHeight = col < numFullColumns ? numRows : numRows - 1;

      for (let row = 0; row < columnHeight; row++) {
        grid[row][col] = encryptedString[charIndex++];
      }
    }

    // Grid'i çözülmüş metne geri dönüştürme
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numColumns; col++) {
        if (grid[row][col]) {
          decryptedText += grid[row][col];
        }
      }
    }

    setDecryptedString(decryptedText);
  };

  return (
    <div style={{ color: "blue", padding: 10 }}>
      <label style={{ fontWeight: "bold" }}>Yer Değiştirme Algoritması</label>
      <br />
      <label>Metin:</label>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <br />
      <label>Anahtar Sayısı:</label>
      <input type="text" value={key} onChange={handleKeyChange} />
      <br />
      <button onClick={encrypt}>Şifrele</button>
      <button onClick={decrypt}>Çöz</button>
      <br />
      <label>Şifrelenmiş Metin:</label>
      <input type="text" value={encryptedString} readOnly />
      <br />
      <label>Çözülmüş Metin:</label>
      <input type="text" value={decryptedString} readOnly />
    </div>
  );
}

export default React.memo(KeyedTranspositionEncryption);
