import React, { useState } from "react";

function CustomPermutationEncryption() {
  const [inputValue, setInputValue] = useState("");
  const [encryptedString, setEncryptedString] = useState("");
  const [decryptedString, setDecryptedString] = useState("");
  const [permutationKey, setPermutationKey] = useState("");
  const [permutationOrder, setPermutationOrder] = useState("");

  const handleChange = (e) => {
    const value = e.target.value.replace(/\s/g, "").toLowerCase();
    if (/^[abcçdefgğhıijklmnoöprsştuüvyz]*$/i.test(value)) {
      setInputValue(value);
    } else {
      alert("Lütfen sadece Türk alfabesindeki harfleri giriniz.");
    }
  };

  const handleKeyChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setPermutationKey(value);
  };

  const handleOrderChange = (e) => {
    const value = e.target.value.replace(/\D/g, ",");
    setPermutationOrder(value);
  };

  const encrypt = () => {
    const order = permutationOrder.split(",").map(Number);
    const key = parseInt(permutationKey);

    let encrypted = "";
    for (let i = 0; i < inputValue.length; i += key) {
      let chunk = inputValue.slice(i, i + key);
      let encryptedChunk = new Array(chunk.length);
      for (let j = 0; j < chunk.length; j++) {
        encryptedChunk[order[j] - 1] = chunk[j];
      }
      encrypted += encryptedChunk.join("");
    }

    setEncryptedString(encrypted);
  };

  const decrypt = () => {
    const order = permutationOrder.split(",").map(Number);
    const key = parseInt(permutationKey);
    const inverseOrder = Array.from(Array(order.length).keys()).map(
      (_, i) => order.indexOf(i + 1) + 1
    );

    let decrypted = "";
    for (let i = 0; i < encryptedString.length; i += key) {
      let chunk = encryptedString.slice(i, i + key);
      let decryptedChunk = new Array(chunk.length);
      for (let j = 0; j < chunk.length; j++) {
        decryptedChunk[inverseOrder[j] - 1] = chunk[j];
      }
      decrypted += decryptedChunk.join("");
    }

    setDecryptedString(decrypted);
  };

  return (
    <div style={{ color: "brown" }}>
      <label style={{ fontWeight: "bold" }}>
        Özel Permütasyon Şifreleme Algoritması
      </label>
      <br />
      <br />
      <label>Metin:</label>
      <input type="text" value={inputValue} onChange={handleChange} />
      <br />
      <br />
      <label>Permütasyon Anahtarı : </label>
      <input type="text" value={permutationKey} onChange={handleKeyChange} />
      <br />
      <br />
      <label>Şifreleme Düzeni (Virgülle Ayırın): </label>
      <input
        type="text"
        value={permutationOrder}
        onChange={handleOrderChange}
      />
      <br />
      <br />
      <button onClick={encrypt}>Şifrele</button>
      <button onClick={decrypt}>Çöz</button>
      <br />
      <br />
      <label>Şifrelenmiş Metin: </label>
      <input type="text" value={encryptedString} readOnly />
      <br />
      <br />
      <label>Çözülmüş Metin: </label>
      <input type="text" value={decryptedString} readOnly />
    </div>
  );
}

export default React.memo(CustomPermutationEncryption);
