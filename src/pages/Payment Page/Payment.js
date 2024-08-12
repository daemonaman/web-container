import React, { useState } from "react";
import GooglePayImage from "../../Assets/Googleimg.png";
import PhonePeImage from "../../Assets/Phonepeimg.png";
import UpiImage from "../../Assets/upiimg.png";
import './Paymen.css'
import { styled, Button } from "@mui/material";
function Payment() {
  const [selectedPayment, setSelectedPayment] = useState("");

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };
  const PinkButton = styled(Button)({
    backgroundColor: "#FF70A6",
    color: "#fff", 
    "&:hover": {
      backgroundColor: "#FF70A6", 
    },
  });

  return (
    <div
      style={{
        backgroundColor: "#F8F8F8",
        // marginBottom: "10%",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "50vw",
          height: "max-content",
          marginLeft: "5%",
          // marginTop: "5rem",
          overflow: "hidden",
          position: "relative",
          top: "30px",
        }}
      >
        <h4
          style={{
            color: "#FF70A6",
            fontSize: "25px",
            fontWeight: "700",
            marginLeft: "5%",
            padding:'20px'
          }}
        >
          Payment Option
        </h4>
        <label style={{gap:'12px', display:'flex',marginTop:'2%', marginLeft: "7%"}}>
          <input
            type="radio"
            name="paymentMethods"
            value="Google Pay"
            checked={selectedPayment === "Google Pay"}
            onChange={handlePaymentChange}
          />
          <img
            style={{
              marginLeft: "1%",
              marginRight: "1%",
              width: "30px",
              height: "30px",
            }}
            src={GooglePayImage}
            alt="Google Pay"
          />
          <strong
            style={{
              fontWeight: selectedPayment === "Google Pay" ? "bold" : "normal",
              fontSize: "20px",
            }} 
          >
            Google Pay
          </strong>
        </label>
        <label style={{gap:'12px', display:'flex', marginTop: "5%", marginLeft: "7%", marginLeft: "7%" }}>
          <input
            type="radio"
            name="paymentMethods"
            value="PhonePe"
            checked={selectedPayment === "PhonePe"}
            onChange={handlePaymentChange}
          />
          <img
            style={{
              marginLeft: "1%",
              marginRight: "1%",
              width: "30px",
              height: "30px",
            }}
            src={PhonePeImage}
            alt="PhonePe"
          />
          <strong
            style={{
              fontWeight: selectedPayment === "PhonePe" ? "bold" : "normal",
              fontSize: "20px",
            }}
          >
            PhonePe
          </strong>
        </label>
        <label style={{gap:'12px', display:'flex', marginTop: "5%", marginLeft: "7%" }}>
          <input
            type="radio"
            name="paymentMethods"
            value="UPI"
            checked={selectedPayment === "UPI"}
            onChange={handlePaymentChange}
          />
          <img
            style={{
              marginLeft: "1%",
              marginRight: "1%",
              width: "25px",
              height: "25px",
            }}
            src={UpiImage}
            alt="UPI"
          />
          <strong
            style={{
              fontWeight: selectedPayment === "UPI" ? "bold" : "normal",
              fontSize: "20px",
            }}
          >
            UPI
          </strong>
        </label>
        <label style={{gap:'12px', display:'flex', marginTop: "5%", marginLeft: "7%" }}>
          <input
            type="radio"
            name="paymentMethods"
            value="Wallets"
            checked={selectedPayment === "Wallets"}
            onChange={handlePaymentChange}
          />
          <strong
            style={{
              fontWeight: selectedPayment === "Wallets" ? "bold" : "normal",
              fontSize: "20px",
              marginLeft: "1%",
            }}
          >
            Wallets
          </strong>
        </label>
        <label style={{gap:'12px', display:'flex', marginTop: "5%", marginLeft: "7%" }}>
          <input
            type="radio"
            name="paymentMethods"
            value="Credit/Debit/ATM Card"
            checked={selectedPayment === "Credit/Debit/ATM Card"}
            onChange={handlePaymentChange}
          />
          <strong
            style={{
              fontWeight:
                selectedPayment === "Credit/Debit/ATM Card" ? "bold" : "normal",
              fontSize: "20px",
              marginLeft: "1%",
            }}
          >
            Credit/Debit/ATM Card
          </strong>
        </label>
        <label style={{gap:'12px', display:'flex', marginTop: "5%", marginLeft: "7%" }}>
          <input
            type="radio"
            name="paymentMethods"
            value="Net Banking"
            checked={selectedPayment === "Net Banking"}
            onChange={handlePaymentChange}
          />
          <strong
            style={{
              fontWeight: selectedPayment === "Net Banking" ? "bold" : "normal",
              fontSize: "20px",
              marginLeft: "1%",
            }}
          >
            Net Banking
          </strong>
        </label>
        <label style={{gap:'12px', display:'flex', marginTop: "5%", marginLeft: "7%" }}>
          <input
            type="radio"
            name="paymentMethods"
            value="Cash on Delivery"
            checked={selectedPayment === "Cash on Delivery"}
            onChange={handlePaymentChange}
          />
          <strong
            style={{
              fontWeight:
                selectedPayment === "Cash on Delivery" ? "bold" : "normal",
              fontSize: "20px",
              marginLeft: "1%",
            }}
          >
            Cash on Delivery
          </strong>
        </label>
        {/* Add more radio buttons and corresponding text for additional payment options as needed */}
        <div
          container
          justifyContent="center"
          style={{ width: "150px", marginLeft: "80%" }}
        >
          <PinkButton
            style={{ width: "100px", marginTop: "5%", marginBottom: "30%" }}
            variant="contained"
          >
            Pay
          </PinkButton>
        </div>
      </div>
  </div>
  );
}

export default Payment;
