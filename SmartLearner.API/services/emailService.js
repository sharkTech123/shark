const nodemailer = require("nodemailer");

// Send Email function
const sendEmail = async (subject, message) => {
  const transporter = nodemailer.createTransport({
   service:"gmail",
    auth: {
      user: "Smartlearnerdrivingschool@gmail.com", // Your email
        pass: "ghzf dspi ndeg ryqw", // Use an app password or OAuth2 for production
    },
   
  });

  const mailOptions = {
    from: "admin@smartlearner.com", // Sender's email
    to: "admin@smartlearner.com", // Admin's email
    subject,
    html: message, // Send HTML formatted message
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
};

// Handle Contact Us Form
const handleContactForm = (formData) => {
  return `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }

 /* Light Mode */
            @media (prefers-color-scheme: light) {
              body {
                background-color: #f9f9f9;
                color: #333;
              }
              .header img {
                content: url('https:/smartlearner.com/static/media/smartlearnerLogo-removebg-preview.447bcd88c37d91ddc949.png');
              }
            }

            /* Dark Mode */
            @media (prefers-color-scheme: dark) {
              body {
                background-color: #333;
                color: #f9f9f9;
              }
              .header img {
                content: url('https://smartlearner.com/static/media/White-Logo-Fixed-1024x174.36cf39f0d189481b24c1.png');
              }
            }


          .container { width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd; }
          .header { text-align: center; }
          .header img { width: 150px;background-color: black;}
          .body { padding: 10px 0; }
          .body h2 { color: #444; }
          .body p { margin: 5px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://smartlearner.com/static/media/White-Logo-Fixed-1024x174.36cf39f0d189481b24c1.png" alt="Company Logo" />
          </div>
          <div class="body">
            <h2>New Contact Us Form Submission</h2>
            <p><strong>First Name:</strong> ${formData.firstName}</p>
            <p><strong>Last Name:</strong> ${formData.lastName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Address:</strong> ${formData.address}</p>
            <p><strong>Postcode:</strong> ${formData.postcode}</p>
            <p><strong>Phone:</strong> ${formData.phoneNumber}</p>
            <p><strong>Instructor Type:</strong> ${formData.instructorType}</p>
            <p><strong>Tuition Type:</strong> ${formData.tutionType}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

// Handle Callback Form
const handleCallbackForm = (formData) => {
  return `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }

 /* Light Mode */
            @media (prefers-color-scheme: light) {
              body {
                background-color: #f9f9f9;
                color: #333;
              }
              .header img {
                content: url('https:/smartlearner.com/static/media/smartlearnerLogo-removebg-preview.447bcd88c37d91ddc949.png');
              }
            }

            /* Dark Mode */
            @media (prefers-color-scheme: dark) {
              body {
                background-color: #333;
                color: #f9f9f9;
              }
              .header img {
                content: url('https://smartlearner.com/static/media/White-Logo-Fixed-1024x174.36cf39f0d189481b24c1.png');
              }
            }

          .container { width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd; }
          .header { text-align: center; }
          .header img { width: 150px;background-color: black;}
          .body { padding: 10px 0; }
          .body h2 { color: #444; }
          .body p { margin: 5px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://smartlearner.com/static/media/White-Logo-Fixed-1024x174.36cf39f0d189481b24c1.png" alt="Company Logo" />
          </div>
          <div class="body">
            <h2>New Callback Form Submission</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phoneNumber}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

// Handle Enquiry Form
const handleEnquiryForm = (formData) => {
  return `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }

 /* Light Mode */
            @media (prefers-color-scheme: light) {
              body {
                background-color: #f9f9f9;
                color: #333;
              }
              .header img {
                content: url('https:/smartlearner.com/static/media/smartlearnerLogo-removebg-preview.447bcd88c37d91ddc949.png');
              }
            }

            /* Dark Mode */
            @media (prefers-color-scheme: dark) {
              body {
                background-color: #333;
                color: #f9f9f9;
              }
              .header img {
                content: url('https://smartlearner.com/static/media/White-Logo-Fixed-1024x174.36cf39f0d189481b24c1.png');
              }
            }




          .container { width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd; }
          .header { text-align: center; }
          .header img { width: 150px; background-color: black;}
          .body { padding: 10px 0; }
          .body h2 { color: #444; }
          .body p { margin: 5px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://smartlearner.com/static/media/White-Logo-Fixed-1024x174.36cf39f0d189481b24c1.png" alt="Company Logo" />
          </div>
          <div class="body">
            <h2>New Enquiry Form Submission</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phoneNumber}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

// Process the form based on formType
const processForm = async (formType, formData) => {
  let message;
  if (formType === "EnquiryForm") {
    message = handleEnquiryForm(formData);
  // } else if (formType === "drivenForm") {
  //   message = handleDrivenForm(formData);
  } else if (formType === "callbackForm") {
    message = handleCallbackForm(formData);
  } else if (formType === "contactUsForm") {
    message = handleContactForm(formData);
  } else {
    return { success: false, error: "Invalid form type" };
  }

  // Send email with the appropriate message
  const emailResult = await sendEmail(`New ${formType} Submission`, message);
  return emailResult;
};
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
// Configure the transport for email sending
const transporter = nodemailer.createTransport({
  
  service:'gmail',
  auth: {
    user: "Smartlearnerdrivingschool@gmail.com", // Your email
    pass: "ghzf dspi ndeg ryqw", // Use an app password or OAuth2 for production
  },
 
});

// Function to send email
const sendRegisterEmail = async (to, subject, htmlContent) => {
  const mailOptions = {
    from: "admin@smartlearner.com",
    to: to,
    subject: subject,
    html: htmlContent, // Send HTML content for rich formatting
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

// Send welcome email to the user
const sendWelcomeEmail = async (userData) => {
  const { email, username } = userData;
  const subject = "Welcome to SmartLearner";
  const htmlContent = `
  <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }

 /* Light Mode */
            @media (prefers-color-scheme: light) {
              body {
                background-color: #f9f9f9;
                color: #333;
              }
              .header img {
                content: url('https:/smartlearner.com/static/media/smartlearnerLogo-removebg-preview.447bcd88c37d91ddc949.png');
              }
            }

            /* Dark Mode */
            @media (prefers-color-scheme: dark) {
              body {
                background-color: #333;
                color: #f9f9f9;
              }
              .header img {
                content: url('https://smartlearner.com/static/media/White-Logo-Fixed-1024x174.36cf39f0d189481b24c1.png');
              }
            }



          .container { width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd; }
          .header { text-align: center; }
          .header img { width: 150px; background-color: black;}
          .body { padding: 10px 0; }
          .body h2 { color: #444; }
          .body p { margin: 5px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://smartlearner.com/static/media/White-Logo-Fixed-1024x174.36cf39f0d189481b24c1.png" alt="Company Logo" />
          </div>
          <div class="body">
           <h1>Welcome, ${username}!</h1>
    <p>Thank you for registering with SmartLearner. We're excited to have you on board!</p>
    <p>If you need any assistance, feel free to reach out to our support team at admin@smartlearner.com</p>
          </div>
        </div>
      </body>
    </html>
  
  `;

  await sendRegisterEmail(email, subject, htmlContent);
};

// Send registration details to the admin
const sendAdminNotification = async (username, email, phoneNumber, roleName ) => {
  
  
  const subject = "New User Registration";
  const htmlContent = `
   <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }

 /* Light Mode */
            @media (prefers-color-scheme: light) {
              body {
                background-color: #f9f9f9;
                color: #333;
              }
              .header img {
                content: url('https:/smartlearner.com/static/media/smartlearnerLogo-removebg-preview.447bcd88c37d91ddc949.png');
              }
            }

            /* Dark Mode */
            @media (prefers-color-scheme: dark) {
              body {
                background-color: #333;
                color: #f9f9f9;
              }
              .header img {
                content: url('https://smartlearner.com/static/media/White-Logo-Fixed-1024x174.36cf39f0d189481b24c1.png');
              }
            }



          .container { width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd; }
          .header { text-align: center; }
          .header img { width: 150px; background-color: black;}
          .body { padding: 10px 0; }
          .body h2 { color: #444; }
          .body p { margin: 5px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://smartlearner.com/static/media/White-Logo-Fixed-1024x174.36cf39f0d189481b24c1.png" alt="Company Logo" />
          </div>
          <div class="body">
           <h1>New User Registered</h1>
    <p><strong>Username:</strong> ${username}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone Number:</strong> ${phoneNumber}</p>
   <p><strong>Role Selected:</strong> ${roleName}</p>
    <p>Welcome to SmartLearner!</p>
          </div>
        </div>
      </body>
    </html>
  `;

  // Send email to the admin
  await sendRegisterEmail(
    "admin@smartlearner.com",
    subject,
    htmlContent
  ); // Replace with actual admin email
};



module.exports = {
  processForm,
  sendWelcomeEmail,
  sendAdminNotification,
  
};
