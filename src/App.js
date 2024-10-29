import "./App.css";
import SezarAlgoritmasi from "./Component/SezarAlgoritmasi";
import KaydirmaliAlgoritma from "./Component/KaydirmaliAlgoritma";
import DogrusalAlgoritma from "./Component/DogrusalAlgoritma";
import YerineKoymaAlgoritması from "./Component/YerineKoymaAlgoritmasi";

import YerDegistirmeAlgoritmasıAnahtarlı from "./Component/YerDegistirmeAlgoritmasiAnahtarli";
import RotaAlgoritması from "./Component/RotaAlgoritmasi";
import VigenereAlgoritmasi from "./Component/VigenereAlgoritmasi";
import Denem from "./Component/denem";

function App() {
  return (
    <div className="App">
      <div className="container">
        <KaydirmaliAlgoritma />
      </div>

      <div className="container">
        <SezarAlgoritmasi />
      </div>
      <div className="container">
        <DogrusalAlgoritma />
      </div>
      <div className="container">
        <YerineKoymaAlgoritması />
      </div>
      <div className="container">
        <VigenereAlgoritmasi />
      </div>

      <div className="container">
        <YerDegistirmeAlgoritmasıAnahtarlı />
      </div>
      <div className="container">
        <RotaAlgoritması />
      </div>

      <div className="container">
        <Denem />
      </div>
    </div>
  );
}

export default App;
