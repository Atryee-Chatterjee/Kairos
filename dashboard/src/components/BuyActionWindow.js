import React, { useState, useContext } from "react";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [availableQty, setAvailableQty] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const { closeBuyWindow, notifyOrderChange } = useContext(GeneralContext);

  const loadAvailableQuantity = async () => {
    try {
      const result = await axios.get("http://localhost:3002/allHoldings", { withCredentials: true });
      const holding = result.data.find((item) => item.name === uid);
      setAvailableQty(holding ? holding.qty : 0);

      if (mode === "SELL" && (!holding || holding.qty === 0)) {
        setErrorMessage("No holdings available to sell for this instrument.");
      }
    } catch (error) {
      setAvailableQty(0);
      if (mode === "SELL") {
        setErrorMessage("Unable to verify holdings quantity. Please try again.");
      }
    }
  };

  const handleBuyClick = async () => {
    const qty = Number(stockQuantity);
    const price = Number(stockPrice);

    if (qty <= 0) {
      setErrorMessage("Please enter a quantity greater than zero.");
      return;
    }

    if (mode === "SELL") {
      if (availableQty === null) {
        await loadAvailableQuantity();
      }

      if (!availableQty || qty > availableQty) {
        setErrorMessage(
          `Insufficient holdings quantity. Available: ${availableQty || 0}`
        );
        return;
      }
    }

    try {
      await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty,
        price,
        mode,
      }, { withCredentials: true });
      notifyOrderChange();
      closeBuyWindow();
    } catch (error) {
      setErrorMessage(
        error.response?.data?.error || "Failed to place the order. Please try again."
      );
    }
  };

  const handleCancelClick = () => {
    setErrorMessage("");
    closeBuyWindow();
  };

  React.useEffect(() => {
    if (mode === "SELL") {
      loadAvailableQuantity();
    } else {
      setAvailableQty(null);
      setErrorMessage("");
    }
  }, [mode, uid]);

  return (
    <div className="buy-action-overlay">
      <div className="buy-action-container" id="buy-window" draggable="true">
        <div className="regular-order">
          <div className="inputs">
            <fieldset>
              <legend>Qty.</legend>
              <input
                type="number"
                name="qty"
                id="qty"
                onChange={(e) => setStockQuantity(e.target.value)}
                value={stockQuantity}
              />
            </fieldset>
            <fieldset>
              <legend>Price</legend>
              <input
                type="number"
                name="price"
                id="price"
                step="0.05"
                onChange={(e) => setStockPrice(e.target.value)}
                value={stockPrice}
              />
            </fieldset>
          </div>

          {mode === "SELL" && (
            <div className="sell-info">
              <p>Available to sell: {availableQty ?? 0}</p>
            </div>
          )}

          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>

        <div className="buttons">
          <span>Margin required ₹140.65</span>
          <div>
            <button
              type="button"
              className="btn btn-blue"
              onClick={handleBuyClick}
            >
              {mode === "SELL" ? "Sell" : "Buy"}
            </button>
            <button
              type="button"
              className="btn btn-grey"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;