const User = require("../models/User");
const Income = require("../models/Income");

// Add Income Source
exports.addIncome = async (req, res) => {
  const userId = req.user.id;
  try {
    const { icon, source, amount, date } = req.body;

    if (!source || !amount || !date)
      return res.status(400).json({ message: "All fields are required" });

    const newIncome = new Income({
      userId,
      icon,
      source,
      amount,
      date,
    });

    await newIncome.save();

    res.status(201).json(newIncome);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error while adding Income", error: err.message });
  }
};

// Get All Income
exports.getAllIncome = async (req, res) => {
  const userId = req.user.id;

  try {
    const allIncomes = await Income.find({ userId }).sort({ date: -1 });
    console.log("allIncomes is:", allIncomes);
    res.json(allIncomes);
  } catch (err) {
    res
      .status(500)
      .json({ message: "User is Ghareeb and Jobless", error: err.message });
  }
};

// Delete Income by id
exports.deleteIncome = async (req, res) => {};

// Download the Income in an Excel sheet
exports.downloadIncomeExcel = async (req, res) => {};

// {
//     userId: {
//       type: mongoose.Schema.Types.ObjectId, ref: "User", required: true,
//     },
//     icon: { type: String },
//     source: { type: String, required: true },
//     amount: { type: Number, required: true },
//     date: { type: Date, default: Date.now() },
//   },
//   { timestamps: true }
