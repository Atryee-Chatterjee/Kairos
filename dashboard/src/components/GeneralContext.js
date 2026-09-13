import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  openSellWindow: (uid) => {},
  closeBuyWindow: () => {},
  notifyOrderChange: () => {},
  orderUpdateCount: 0,
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedMode, setSelectedMode] = useState("BUY");
  const [orderUpdateCount, setOrderUpdateCount] = useState(0);

  const handleOpenActionWindow = (uid, mode) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
    setSelectedMode(mode);
  };

  const handleOpenBuyWindow = (uid) => {
    handleOpenActionWindow(uid, "BUY");
  };

  const handleOpenSellWindow = (uid) => {
    handleOpenActionWindow(uid, "SELL");
  };

  const notifyOrderChange = () => {
    setOrderUpdateCount((current) => current + 1);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
    setSelectedMode("BUY");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeBuyWindow: handleCloseBuyWindow,
        notifyOrderChange,
        orderUpdateCount,
      }}
    >
      {props.children}
      {isBuyWindowOpen && (
        <BuyActionWindow uid={selectedStockUID} mode={selectedMode} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;