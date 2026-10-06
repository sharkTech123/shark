const nodemailer = require("nodemailer");

class productEmailService {

  // ─── Helper: Build Klarna Installment Schedule ──────────────────────────────
  _buildInstallmentSchedule(total, klarnaData = null, paymentStatus = "") {
    const now = new Date();

    // If Stripe returned real Klarna installment data, use it
    if (
      klarnaData?.payment_method_details?.klarna?.installments?.length > 0
    ) {
      return klarnaData.payment_method_details.klarna.installments.map(
        (inst, i) => ({
          installmentNumber: i + 1,
          amount: (inst.amount / 100).toFixed(2),       // Stripe stores in pence
          dueDate: new Date(inst.due_date * 1000),       // Unix timestamp → Date
          status: inst.status || (i === 0 ? "Paid" : "Upcoming"),
        })
      );
    }

    // Fallback: calculate 3 equal installments ourselves
    const perInstallment = (parseFloat(total) / 3).toFixed(2);
    const lastInstallment = (
      parseFloat(total) -
      parseFloat(perInstallment) * 2
    ).toFixed(2); // absorb rounding

    return [
      {
        installmentNumber: 1,
        amount: perInstallment,
        dueDate: now,                                    // Today (paid now)
       status: paymentStatus === "Initiated"
    ? "Initiated"
    : "Paid Today",
      },
      {
        installmentNumber: 2,
        amount: perInstallment,
        dueDate: new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000), // +30 days
        status: "Upcoming",
      },
      {
        installmentNumber: 3,
        amount: lastInstallment,
        dueDate: new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000), // +60 days
        status: "Upcoming",
      },
    ];
  }

  // ─── Helper: Format Date ─────────────────────────────────────────────────────
  _formatDate(date) {
    return new Date(date).toLocaleDateString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    // e.g. "Monday, 4 May 2026"
  }

  // ─── Helper: Status Color ─────────────────────────────────────────────────────
  _getStatusColor(status) {
    switch (status?.toLowerCase()) {
      case "successful":  return { bg: "#e8f5e9", border: "#4CAF50", text: "#2e7d32" };
      case "failed":      return { bg: "#ffebee", border: "#f44336", text: "#c62828" };
      case "initiated":   return { bg: "#e3f2fd", border: "#2196F3", text: "#1565c0" };
      default:            return { bg: "#fff8e1", border: "#FFC107", text: "#f57f17" };
    }
  }

  // ─── Main Send Email ──────────────────────────────────────────────────────────
  async sendEmail(orderDetails, status, method, klarnaPaymentDetails = null) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "Smartlearnerdrivingschool@gmail.com",
        pass: "ghzf dspi ndeg ryqw",
      },
    });

    const isKlarna = method?.toLowerCase() === "klarna";
    const statusColors = this._getStatusColor(status);

    // ── Cart rows ──────────────────────────────────────────────────────────────
    let cartDetails = "";
    orderDetails.myCart.forEach((item) => {
      cartDetails += `
        <tr>
          <td style="padding:10px; border:1px solid #ddd;">${item.service}</td>
          <td style="padding:10px; border:1px solid #ddd; text-align:center;">${item.count}</td>
          <td style="padding:10px; border:1px solid #ddd;">£ ${parseFloat(item.price).toFixed(2)}</td>
        </tr>
      `;
    });

    // ── Klarna installment schedule rows ───────────────────────────────────────
    let installmentSection = "";
    if (isKlarna) {
      const schedule = this._buildInstallmentSchedule(
        orderDetails.total,
        klarnaPaymentDetails,status
      );

      const startDate   = schedule[0].dueDate;
      const nextDate    = schedule.find((s) => s.status === "Upcoming")?.dueDate;
      const finalDate   = schedule[schedule.length - 1].dueDate;

     const installmentRows = schedule
  .map((inst) => {
    const isPaid = inst.status === "Paid Today";
    const isProcessing = inst.status === "Initiated";
    
    const rowBg = isPaid
      ? "#f0fff4"
      : isProcessing
      ? "#e3f2fd"
      : "#ffffff";

    let statusBadge = "";

    if (isPaid) {
      statusBadge = `
        <span style="background:#4CAF50;color:#fff;padding:2px 10px;border-radius:12px;font-size:12px;">
          ✔ Paid
        </span>
      `;
    } else if (isProcessing) {
      statusBadge = `
        <span style="background:#2196F3;color:#fff;padding:2px 10px;border-radius:12px;font-size:12px;">
          ⏳ Processing
        </span>
      `;
    } else {
      statusBadge = `
        <span style="background:#FFF3CD;color:#856404;padding:2px 10px;border-radius:12px;font-size:12px;">
          ⏳ Upcoming
        </span>
      `;
    }

    return `
      <tr style="background:${rowBg};">
        <td style="padding:12px 10px; border:1px solid #ddd; font-weight:600;">
          Installment ${inst.installmentNumber} of ${schedule.length}
        </td>
        <td style="padding:12px 10px; border:1px solid #ddd; font-weight:700; color:#1a1a1a;">
          £ ${inst.amount}
        </td>
        <td style="padding:12px 10px; border:1px solid #ddd; color:#555;">
          ${this._formatDate(inst.dueDate)}
        </td>
        <td style="padding:12px 10px; border:1px solid #ddd; text-align:center;">
          ${statusBadge}
        </td>
      </tr>
    `;
  })
  .join("");

      installmentSection = `
        <!-- ═══ KLARNA INSTALLMENT SECTION ═══ -->
        <div style="margin:24px 0; padding:20px; background:#fdf0f5; border-radius:10px; border:2px solid #FFB3C7;">

          <!-- Klarna Header -->
          <div style="display:flex; align-items:center; margin-bottom:16px;">
            <div style="background:#FFB3C7; border-radius:8px; padding:6px 14px; display:inline-block;">
              <strong style="font-size:16px; color:#17120F; letter-spacing:1px;">KLARNA</strong>
              <span style="font-size:12px; color:#17120F; margin-left:6px;">Pay in ${schedule.length} Installments</span>
            </div>
          </div>

          <!-- Key Dates Summary -->
          <table style="width:100%; border-collapse:collapse; margin-bottom:16px; background:#fff; border-radius:8px; overflow:hidden;">
            <tr style="background:#FFB3C7;">
              <th colspan="2" style="padding:10px; text-align:left; color:#17120F; font-size:14px;">
                📅 Your Installment Schedule at a Glance
              </th>
            </tr>
            <tr>
              <td style="padding:10px 14px; border:1px solid #ffe0ec; font-weight:600; width:50%;">
                🟢 First Payment (Today)
              </td>
              <td style="padding:10px 14px; border:1px solid #ffe0ec; color:#2e7d32; font-weight:700;">
                ${this._formatDate(startDate)}
              </td>
            </tr>
            ${
              nextDate
                ? `<tr>
                    <td style="padding:10px 14px; border:1px solid #ffe0ec; font-weight:600;">
                      🔔 Next Payment Due
                    </td>
                    <td style="padding:10px 14px; border:1px solid #ffe0ec; color:#e65100; font-weight:700;">
                      ${this._formatDate(nextDate)}
                    </td>
                  </tr>`
                : ""
            }
            <tr>
              <td style="padding:10px 14px; border:1px solid #ffe0ec; font-weight:600;">
                🏁 Final Payment Due
              </td>
              <td style="padding:10px 14px; border:1px solid #ffe0ec; color:#555; font-weight:700;">
                ${this._formatDate(finalDate)}
              </td>
            </tr>
            <tr style="background:#f9f9f9;">
              <td style="padding:10px 14px; border:1px solid #ffe0ec; font-weight:600;">
                💷 Total Order Value
              </td>
              <td style="padding:10px 14px; border:1px solid #ffe0ec; font-weight:700; font-size:16px; color:#17120F;">
                £ ${parseFloat(orderDetails.total).toFixed(2)}
              </td>
            </tr>
          </table>

          <!-- Full Installment Breakdown Table -->
          <h4 style="margin:0 0 10px; color:#17120F;">📋 Full Installment Breakdown</h4>
          <table style="width:100%; border-collapse:collapse; border-radius:8px; overflow:hidden;">
            <thead>
              <tr style="background:#17120F; color:#FFB3C7;">
                <th style="padding:10px; text-align:left; border:1px solid #333;">Installment</th>
                <th style="padding:10px; text-align:left; border:1px solid #333;">Amount</th>
                <th style="padding:10px; text-align:left; border:1px solid #333;">Due Date</th>
                <th style="padding:10px; text-align:center; border:1px solid #333;">Status</th>
              </tr>
            </thead>
            <tbody>
              ${installmentRows}
            </tbody>
          </table>

          <!-- Klarna Notice -->
          <div style="margin-top:14px; padding:12px; background:#fff8e1; border-left:4px solid #FFC107; border-radius:4px; font-size:13px; color:#555;">
            ℹ️ <strong>How it works:</strong> Klarna will automatically charge your saved payment method on each due date above.
            You will receive a reminder email from Klarna 2 days before each payment.
            No interest is charged on Pay in 3 installments.
          </div>
        </div>
      `;
    }

    // ── Full HTML Email ────────────────────────────────────────────────────────
    const htmlContent = `
      <html>
        <body style="font-family:Arial,sans-serif; color:#333; margin:0; padding:0; background-color:#f9f9f9;">
          <div style="width:100%; max-width:620px; margin:20px auto; padding:20px; background:#ffffff; border:1px solid #ddd; border-radius:8px;">

            <!-- Logo -->
            <div style="text-align:center; margin-bottom:20px; padding:16px; background:#17120F; border-radius:6px;">
              <img src="https://smartlearner.com/static/media/White-Logo-Fixed-1024x174.36cf39f0d189481b24c1.png"
                   alt="SmartLearner Logo" style="width:180px;" />
            </div>

            <!-- Status Banner -->
            <div style="background:${statusColors.bg}; border:2px solid ${statusColors.border}; border-radius:8px; padding:16px; text-align:center; margin-bottom:20px;">
              <h2 style="margin:0; color:${statusColors.text}; font-size:20px;">
                Payment ${status}
              </h2>
              <p style="margin:6px 0 0; color:${statusColors.text}; font-size:14px;">
                Order #${orderDetails._id} &nbsp;|&nbsp; Method: <strong>${method}</strong>
              </p>
            </div>

            <!-- Greeting -->
            <div style="padding:0 4px;">
              <p style="font-size:15px;">
                <strong>Dear ${orderDetails.firstName} ${orderDetails.lastName},</strong>
              </p>
              <p style="color:#555;">
                Your payment for <strong>Order #${orderDetails._id}</strong> has been
                <strong style="color:${statusColors.text};">${status}</strong>.
              </p>
            </div>

            <!-- Klarna Installment Section (only for Klarna) -->
            ${installmentSection}

            <!-- Order Details Table -->
            <h3 style="color:#17120F; border-bottom:2px solid #FFB3C7; padding-bottom:6px;">📦 Order Details</h3>
            <table style="width:100%; border-collapse:collapse; margin-bottom:20px;">
              ${[
                ["First Name",   orderDetails.firstName],
                ["Last Name",    orderDetails.lastName],
                ["Email",        orderDetails.email],
                ["Phone No.",    orderDetails.phoneNumber],
                ["Order Notes",  orderDetails.ordernotes || "—"],
                ["Address",      `${orderDetails.streetAddress1} ${orderDetails.streetAddress2 || ""}`],
                ["City",         orderDetails.city],
                ["Postcode",     orderDetails.postcode],
                ["Subtotal",     `£ ${parseFloat(orderDetails.subtotal).toFixed(2)}`],
                ["Service Charge", `£ ${parseFloat(orderDetails.serviceCharge).toFixed(2)}`],
                ["Total",        `£ ${parseFloat(orderDetails.total).toFixed(2)}`],
              ]
                .map(
                  ([label, val]) => `
                  <tr>
                    <th style="padding:10px; background:#f2f2f2; border:1px solid #ddd; width:40%; text-align:left;">${label}</th>
                    <td style="padding:10px; border:1px solid #ddd;">${val}</td>
                  </tr>`
                )
                .join("")}
            </table>

            <!-- Product Details Table -->
            <h3 style="color:#17120F; border-bottom:2px solid #FFB3C7; padding-bottom:6px;">🛒 Product Details</h3>
            <table style="width:100%; border-collapse:collapse; margin-bottom:20px;">
              <thead>
                <tr style="background:#17120F; color:#fff;">
                  <th style="padding:10px; border:1px solid #444; text-align:left;">Service</th>
                  <th style="padding:10px; border:1px solid #444; text-align:center;">Qty</th>
                  <th style="padding:10px; border:1px solid #444; text-align:left;">Price</th>
                </tr>
              </thead>
              <tbody>${cartDetails}</tbody>
            </table>

            <!-- Thank You -->
            <p style="text-align:center; color:#555; padding:10px 0;">
              Thank you for choosing <strong>Smart Learner Driving School</strong>! We look forward to serving you.
            </p>

            <!-- Footer -->
            <div style="margin-top:20px; text-align:center; font-size:12px; color:#777; border-top:1px solid #eee; padding-top:12px;">
              <p>Questions? <a href="mailto:admin@smartlearner.com" style="color:#0073e6;">Contact us</a></p>
              <p>Smart Learner Driving School &copy; ${new Date().getFullYear()}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const mailOptions = {
      from: "admin@smartlearner.com",
      to: [orderDetails.email, "admin@smartlearner.com"],
      subject: `Payment ${status} - Order #${orderDetails._id} | ${method}${
        isKlarna ? " (Pay in 3 Installments)" : ""
      }`,
      html: htmlContent,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Error sending email:", error);
      throw new Error("Email sending failed");
    }
  }
}

module.exports = productEmailService;