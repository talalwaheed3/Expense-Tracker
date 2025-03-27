const express = require("express");
const {
  addIncome,
  getAllIncome,
  deleteIncome,
  downloadIncomeExcel,
} = require("../controller/incomeController");
const { protect } = require("../middleware/authMiddleware")

const router = express.Router();

router.post("/addIncome", protect, addIncome);
router.post("/getIncome", protect, getAllIncome);
router.post("/:id", protect, deleteIncome);
router.post("/downloadIncome", protect, downloadIncomeExcel);

module.exports = router;
