import { useState } from "react";

const PayButton = () => {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState(0);

  // <-- This is where the fetch goes
  const payWithMpesa = async () => {
    const res = await fetch("https://cykvdaxmywcodbiwlryk.functions.supabase.co/mpesa-stk",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: "254708374149",
          amount: 1,
        }),
      }
    );

  const data = await res.json();
  console.log("STK Push response:", data);
};

  return (
    <div>
      <input
        type="text"
        placeholder="Phone (2547XXXXXXXX)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button className="cursor-pointer" onClick={payWithMpesa}>Pay with M-Pesa</button>
    </div>
  );
};

export default PayButton;
