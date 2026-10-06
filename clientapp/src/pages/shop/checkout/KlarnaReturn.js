import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const KlarnaReturn = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("loading"); // loading | success | failed
  const [orderId, setOrderId] = useState("");
  const [orderData, setOrderData] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const verifyPayment = async () => {
      // ── Read params Stripe appended to the return_url ──────────────────────
      const params          = new URLSearchParams(window.location.search);
      const paymentIntentId = params.get("payment_intent");
      const redirectStatus  = params.get("redirect_status"); // "succeeded" | "failed"

      console.log("[KlarnaReturn] payment_intent:", paymentIntentId);
      console.log("[KlarnaReturn] redirect_status:", redirectStatus);

      if (!paymentIntentId) {
        setStatus("failed");
        setErrorMsg("No payment reference found. Please contact support.");
        return;
      }

      // Fast-fail: Stripe already told us it failed — no need to call backend
      if (redirectStatus === "failed" || redirectStatus === "canceled") {
        setStatus("failed");
        setErrorMsg("Your Klarna payment was declined or cancelled. Please try again.");
        return;
      }

      try {
        const { data } = await axios.get(
          `https://api.smartlearner.com/api/order/verify/${paymentIntentId}`
        );

        console.log("[KlarnaReturn] Verify response:", data);

        if (data.success && data.status === "completed") {
          setStatus("success");
          setOrderId(data.orderId);
          setOrderData(data.order);
        } else {
          setStatus("failed");
          setErrorMsg("Payment could not be confirmed. Please contact support.");
        }
      } catch (err) {
        console.error("[KlarnaReturn] Verify error:", err);
        setStatus("failed");
        setErrorMsg("Unable to verify payment. Please contact support.");
      }
    };

    verifyPayment();
  }, []);

  // ── Loading ────────────────────────────────────────────────────────────────
  if (status === "loading") {
    return (
      <div style={s.page}>
        <div style={s.card}>
          <div style={s.spinnerWrap}>
            <div style={s.spinner} />
          </div>
          <h2 style={s.title}>Verifying your Klarna payment…</h2>
          <p style={s.sub}>Please wait, this only takes a moment.</p>
        </div>
      </div>
    );
  }

  // ── Success ────────────────────────────────────────────────────────────────
  if (status === "success") {
    const installmentAmount = orderData?.total
      ? (parseFloat(orderData.total) / 3).toFixed(2)
      : null;

    const now     = new Date();
    const date30  = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
    const date60  = new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000);
    const fmt     = (d) => d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

    return (
      <div style={s.page}>
        <div style={{ ...s.card, borderTop: "5px solid #4CAF50" }}>

          {/* ── Header ── */}
          <div style={s.successIcon}>✅</div>
          <h2 style={{ ...s.title, color: "#2e7d32" }}>Payment Successful!</h2>
          <p style={s.sub}>
            Thank you for your order. A confirmation email has been sent to you.
          </p>

          {/* ── Order ID ── */}
          {orderId && (
            <div style={s.orderIdBox}>
              <span style={s.orderIdLabel}>Order ID</span>
              <span style={s.orderIdValue}>#{orderId}</span>
            </div>
          )}

          {/* ── Klarna Installment Summary ── */}
          {installmentAmount && (
            <div style={s.klarnaBox}>
              <div style={s.klarnaHeader}>
                <KlarnaLogo />
                <span style={s.klarnaTitle}>Your Installment Schedule</span>
              </div>

              <div style={s.installRow}>
                <InstallmentBadge
                  num="1"
                  label="Today (Paid)"
                  date={fmt(now)}
                  amount={installmentAmount}
                  color="#4CAF50"
                  paid
                />
                <div style={s.arrow}>→</div>
                <InstallmentBadge
                  num="2"
                  label="Next Payment"
                  date={fmt(date30)}
                  amount={installmentAmount}
                  color="#FF9800"
                />
                <div style={s.arrow}>→</div>
                <InstallmentBadge
                  num="3"
                  label="Final Payment"
                  date={fmt(date60)}
                  amount={installmentAmount}
                  color="#9E9E9E"
                />
              </div>

              <p style={s.klarnaNote}>
                🔔 Klarna will send you a reminder 2 days before each payment.
                No interest. No fees.
              </p>
            </div>
          )}

          {/* ── Order Summary ── */}
          {orderData && (
            <div style={s.summaryBox}>
              <p style={s.summaryTitle}>Order Summary</p>
              <div style={s.summaryRow}>
                <span>Name</span>
                <span>{orderData.firstName} {orderData.lastName}</span>
              </div>
              <div style={s.summaryRow}>
                <span>Email</span>
                <span>{orderData.email}</span>
              </div>
              <div style={s.summaryRow}>
                <span>Total Paid</span>
                <strong>£ {parseFloat(orderData.total).toFixed(2)}</strong>
              </div>
            </div>
          )}

          {/* ── Actions ── */}
          <div style={s.btnGroup}>
            <button style={s.btnPrimary} onClick={() => navigate("/")}>
              Back to Home
            </button>
           
          </div>
        </div>
      </div>
    );
  }

  // ── Failed ─────────────────────────────────────────────────────────────────
  return (
    <div style={s.page}>
      <div style={{ ...s.card, borderTop: "5px solid #f44336" }}>
        <div style={s.failIcon}>❌</div>
        <h2 style={{ ...s.title, color: "#c62828" }}>Payment Failed</h2>
        <p style={s.sub}>{errorMsg}</p>

        <div style={s.helpBox}>
          <p style={{ margin: 0, fontSize: "13px", color: "#555" }}>
            Need help? Email us at{" "}
            <a href="mailto:admin@smartlearner.com" style={{ color: "#0073e6" }}>
              admin@smartlearner.com
            </a>
          </p>
        </div>

        <div style={s.btnGroup}>
          <button style={s.btnPrimary} onClick={() => navigate("/")}>
            Try Again
          </button>
          <button style={s.btnSecondary} onClick={() => navigate("/")}>
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

// ── Small Components ──────────────────────────────────────────────────────────
const InstallmentBadge = ({ num, label, date, amount, color, paid }) => (
  <div style={{ flex: 1, textAlign: "center" }}>
    <div style={{
      width: "32px", height: "32px", borderRadius: "50%",
      backgroundColor: color, color: "#fff",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontWeight: "800", fontSize: "14px", margin: "0 auto 6px",
    }}>
      {paid ? "✓" : num}
    </div>
    <p style={{ margin: "0 0 2px", fontSize: "11px", color: "#888" }}>{label}</p>
    <p style={{ margin: "0 0 4px", fontSize: "13px", fontWeight: "700", color: "#333" }}>
      £{amount}
    </p>
    <p style={{ margin: 0, fontSize: "11px", color: "#666" }}>{date}</p>
  </div>
);

const KlarnaLogo = () => (
  <svg width="44" height="15" viewBox="0 0 71 24" fill="none"
       xmlns="http://www.w3.org/2000/svg">
    <path d="M9.728 0H6.2C6.2 3.25 4.71 6.2 2 8.19L0 9.71l6.36 8.67h4.39l-5.86-7.99
             c2.85-2.46 4.83-5.95 4.83-10.39zM12.31 18.38h3.66V0h-3.66v18.38z
             M25.74 5.47c-1.35 0-2.63.4-3.49 1.55V5.73h-3.49v12.65h3.53v-6.64
             c0-1.92 1.28-2.86 2.83-2.86 1.65 0 2.6 1 2.6 2.83v6.67h3.5V10.7
             c0-2.95-2.36-5.23-5.48-5.23zM38.55 5.47c-3.73 0-6.42 2.7-6.42 6.56
             s2.69 6.59 6.42 6.59 6.42-2.73 6.42-6.59-2.69-6.56-6.42-6.56z
             m0 9.97c-1.89 0-2.93-1.52-2.93-3.41s1.04-3.38 2.93-3.38
             2.93 1.49 2.93 3.38-1.04 3.41-2.93 3.41z
             M52.48 7.31V5.73h-3.53v12.65h3.56V11.8c0-2.1 2.26-3.23 3.83-3.23
             h.04V5.47c-1.61 0-3.1.78-3.9 1.84z
             M63.06 5.47c-1.74 0-3.36.55-4.26 1.63V5.73H55.3v12.65h3.53v-6.64
             c0-1.92 1.28-2.86 2.83-2.86 1.65 0 2.6 1 2.6 2.83v6.67H67.8V10.7
             c0-2.95-2.36-5.23-5.48-5.23h-.26z"
      fill="#17120F"/>
  </svg>
);

// ── Styles ────────────────────────────────────────────────────────────────────
const s = {
  page:         { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f5f5f5", padding: "20px" },
  card:         { backgroundColor: "#fff", borderRadius: "14px", padding: "36px 28px", maxWidth: "520px", width: "100%", boxShadow: "0 4px 24px rgba(0,0,0,0.10)", textAlign: "center" },
  spinnerWrap:  { display: "flex", justifyContent: "center", marginBottom: "20px" },
  spinner:      { width: "48px", height: "48px", border: "5px solid #eee", borderTop: "5px solid #FFB3C7", borderRadius: "50%", animation: "klarnaReturnSpin 1s linear infinite" },
  successIcon:  { fontSize: "52px", marginBottom: "10px" },
  failIcon:     { fontSize: "52px", marginBottom: "10px" },
  title:        { fontSize: "22px", fontWeight: "800", margin: "0 0 8px" },
  sub:          { color: "#666", fontSize: "15px", margin: "0 0 20px" },
  orderIdBox:   { display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#f0fff4", border: "1px solid #c8e6c9", borderRadius: "8px", padding: "12px 16px", marginBottom: "20px" },
  orderIdLabel: { fontSize: "13px", color: "#555", fontWeight: "600" },
  orderIdValue: { fontSize: "14px", fontWeight: "800", color: "#2e7d32" },
  klarnaBox:    { backgroundColor: "#fdf0f5", border: "2px solid #FFB3C7", borderRadius: "12px", padding: "18px", marginBottom: "20px", textAlign: "left" },
  klarnaHeader: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" },
  klarnaTitle:  { fontWeight: "700", fontSize: "14px", color: "#17120F" },
  installRow:   { display: "flex", alignItems: "flex-start", gap: "4px", marginBottom: "14px" },
  arrow:        { paddingTop: "10px", color: "#ccc", fontSize: "18px", flexShrink: 0 },
  klarnaNote:   { fontSize: "12px", color: "#777", margin: 0, borderTop: "1px solid #ffd6e7", paddingTop: "12px" },
  summaryBox:   { backgroundColor: "#f9f9f9", borderRadius: "8px", padding: "14px 16px", marginBottom: "20px", textAlign: "left" },
  summaryTitle: { fontWeight: "700", fontSize: "13px", color: "#333", marginBottom: "10px" },
  summaryRow:   { display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#555", padding: "5px 0", borderBottom: "1px solid #eee" },
  helpBox:      { backgroundColor: "#fff8e1", borderRadius: "8px", padding: "12px", marginBottom: "20px" },
  btnGroup:     { display: "flex", gap: "10px", justifyContent: "center" },
  btnPrimary:   { backgroundColor: "#FFB3C7", color: "#17120F", border: "none", borderRadius: "8px", padding: "12px 24px", fontSize: "14px", fontWeight: "700", cursor: "pointer" },
  btnSecondary: { backgroundColor: "#f0f0f0", color: "#333", border: "none", borderRadius: "8px", padding: "12px 24px", fontSize: "14px", fontWeight: "600", cursor: "pointer" },
};

// Inject spinner keyframe once
if (!document.getElementById("klarna-return-style")) {
  const tag = document.createElement("style");
  tag.id = "klarna-return-style";
  tag.innerHTML = `@keyframes klarnaReturnSpin { to { transform: rotate(360deg); } }`;
  document.head.appendChild(tag);
}

export default KlarnaReturn;