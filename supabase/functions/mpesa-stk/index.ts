import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import axios from "npm:axios";

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  try {
    // Parse JSON safely
    let body;
    try {
      body = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ error: "Invalid JSON body" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const { phone, amount } = body;

    if (!phone || !amount) {
      return new Response(
        JSON.stringify({ error: "phone and amount are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // 🔒 SANDBOX values (force known-good ones)
    const consumerKey = "KuFsY17q5hXmaAkP5zkQiAKok4Fb90rGD0sYh9nZMGZmCSQC";
    const consumerSecret = "wTljdz3oUOZgl81jtSNxsLDoz6djWSstkGwzHA99v1s8e63MmQ4nDW2lj4op8A3q";
    const shortcode = "174379"; // Sandbox PayBill
    const passkey =
      "bfb279f9aa9bdbcf158e97dd71a467cd2e0d2f9e7c5d1c65b0a00000000000000";

    // Generate timestamp: YYYYMMDDHHMMSS
    const timestamp = new Date()
      .toISOString()
      .replace(/[-:.TZ]/g, "")
      .slice(0, 14);

    // Generate STK password
    const password = btoa(shortcode + passkey + timestamp);

    // Get OAuth token from M-Pesa
    const tokenRes = await axios.get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      { auth: { username: consumerKey, password: consumerSecret } }
    );
    const accessToken = tokenRes.data.access_token;

    // Build STK Push request body
    const stkRequest = {
      BusinessShortCode: shortcode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: amount,
      PartyA: phone,
      PartyB: shortcode,
      PhoneNumber: phone,
      CallBackURL: "https://example.com/callback",
      AccountReference: "TestPayment",
      TransactionDesc: "Payment Test",
    };

    // Send STK Push
    const stkRes = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      stkRequest,
      { headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" } }
    );

    // Return response to frontend
    return new Response(JSON.stringify(stkRes.data), {
      status: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    });

  } catch (error: any) {
    console.error("MPESA ERROR:", error.response?.data || error.message);

    return new Response(
      JSON.stringify({ success: false, error: error.response?.data || error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      }
    );
  }
});
