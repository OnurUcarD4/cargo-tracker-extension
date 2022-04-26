import "./App.css";

function App() {
  document.addEventListener("contextmenu", (event) => event.preventDefault());
  const script = () => {
    const cargoId = document.querySelector(
      'input[name="cargoId"]:checked'
    ).value;
    const trackId = document.getElementById("trackNumber").value;
    if (cargoId === "yurtici") {
      const yurticiLink =
        "https://www.yurticikargo.com/tr/online-servisler/gonderi-sorgula?code=" +
        trackId;
      window.open(yurticiLink);
    }
    if (cargoId === "aras") {
      const arasLink =
        "https://www.araskargo.com.tr/tr/cargo_tracking_detail.aspx?r=6370583query%3d1&querydetail=2&ref_no=&seri_no=&irs_no=&kargo_takip_no=" +
        trackId;
      window.open(arasLink);
    }
    if (cargoId === "trendyol") {
      const trendyolLink =
        "https://kargotakip.trendyol.com/?orderNumber=" + trackId;
      window.open(trendyolLink);
    }
    if (cargoId === "ups") {
      const upsLink =
        "https://www.ups.com.tr/WaybillSorgu.aspx?Waybill=" + trackId;
      window.open(upsLink);
    }
    if (cargoId === "hepsiburada") {
      const hepsiburadaLink =
        "https://www.hepsijet.com/gonderi-takibi/" + trackId;
      window.open(hepsiburadaLink);
    }
  };
  return (
    <div className="App">
      <img src="https://i.imgur.com/5Rc2ELC.png" alt="cargo" />
      <div className="flex items-center justify-center text-center gap-2 mt-2">
        <input type="radio" id="Yurtici" name="cargoId" value="yurtici" />{" "}
        <label htmlFor="Yurtici">Yurtiçi</label>
        <input type="radio" id="Aras" name="cargoId" value="aras" />{" "}
        <label htmlFor="Aras">Aras</label>
        <input
          type="radio"
          id="Trendyol"
          name="cargoId"
          value="trendyol"
        />{" "}
        <label htmlFor="Trendyol">Trendyol</label>
        <input type="radio" id="Ups" name="cargoId" value="ups" />{" "}
        <label htmlFor="Ups">UPS</label>
        <input
          type="radio"
          id="Hepsiburada"
          name="cargoId"
          value="hepsiburada"
        />{" "}
        <label htmlFor="Hepsiburada">Hepsiburada</label>
      </div>
      <div className="flex flex-col">
        <div className="">
          <input
            className="w-1/3 px-4 py-2 border-b-2 mt-2 border-[#f87da9] outline-none  focus:border-[#cf4d7b] focus:border-2 duration-300 border-t-2 border-t-transparent border-l-2 border-r-2 border-l-transparent border-r-transparent"
            placeholder="Kargo Takip No"
            id="trackNumber"
            type="text"
          />
        </div>
        <div className="">
          <button
            onClick={script}
            className="inline-block px-6 py-2.5 bg-[#f87da9] text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#78dddd] hover:shadow-lg focus:bg-[#78dddd] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#a8dadc] active:shadow-lg transition duration-300  ease-in-out mt-2"
          >
            Ara
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
