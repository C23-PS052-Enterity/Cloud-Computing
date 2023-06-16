const { data_input } = require('../models');

const getAllDataInput = async (req, res) => {
  try {
    const allDataInput = await data_input.findAll();

    if (!allDataInput) {
      return res.status(404).json({
        code: 200,
        status: 'failed',
        message: 'Data Input not found',
      });
    }

    return res.status(200).json({
      code: 200,
      status: 'success',
      message: 'Data Input found',
      totalDataInput: allDataInput.length,
      data: allDataInput,
    });
  } catch (error) {
    return res.status(500).json({
      code: 200,
      status: 'failed',
      message: error.message,
    });
  }
};

module.exports = { getAllDataInput };
