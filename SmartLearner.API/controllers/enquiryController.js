const { processForm } = require('../services/emailService');

const submitForm = async (req, res) => {
  const { formType, ...formData } = req.body;

  try {
    const result = await processForm(formType, formData);

    if (result.success) {
      return res.status(200).json({ success: true, message: `${formType} submitted successfully!` });
    } else {
      return res.status(400).json({ success: false, message: result.error || 'Error processing form' });
    }
  } catch (error) {
    console.error('Error in form submission:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports = {
  submitForm
};
