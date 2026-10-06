const DrivenBefore = require("../models//drivenForm");

const drivenBeforeForm = async (req, res) => {
  try {
    const response = req.body;
    await DrivenBefore.create(response);
    return res.status(200).json({ message: "message send successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "message not delivered" });
  }
};

module.exports = drivenBeforeForm;