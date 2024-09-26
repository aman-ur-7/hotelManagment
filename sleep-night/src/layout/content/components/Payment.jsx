import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material"; // Import Material UI components
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    amount: "",
  });
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({
      ...paymentData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Details:", paymentData);
    setTimeout(() => {
      setPaymentStatus("Payment Successful!");
    }, 2000);
    setTimeout(() => {
      navigate("/*");
    }, 3000);
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4} mb={2}>
        <Typography variant="h4" align="center">
          Payment Gateway
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          required
          label="Card Number"
          name="cardNumber"
          value={paymentData.cardNumber}
          onChange={handleChange}
          margin="normal"
          inputProps={{ maxLength: 16 }} // Limit card number to 16 digits
        />
        <TextField
          fullWidth
          required
          label="Expiration Date"
          name="expirationDate"
          placeholder="MM/YY"
          value={paymentData.expirationDate}
          onChange={handleChange}
          margin="normal"
          inputProps={{ maxLength: 5 }}
        />
        <TextField
          fullWidth
          required
          label="CVV"
          name="cvv"
          value={paymentData.cvv}
          onChange={handleChange}
          margin="normal"
          inputProps={{ maxLength: 3 }} // Limit CVV to 3 digits
        />
        <TextField
          fullWidth
          required
          label="Amount"
          name="amount"
          type="number"
          value={paymentData.amount}
          onChange={handleChange}
          margin="normal"
        />
        <Box mt={2}>
          <Button variant="contained" color="primary" fullWidth type="submit">
            Submit Payment
          </Button>
        </Box>
      </form>

      {paymentStatus && (
        <Box mt={2}>
          <Typography align="center" color="green">
            {paymentStatus}
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default Payment;
