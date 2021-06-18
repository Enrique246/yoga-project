const router = require('express').Router();
const { Classes } = require('../../models');

// The `/api/categories` endpoint

// Excersie 23 API -13-ORM-
router.get('/', async (req, res) => {
  // find all categories
  try{
    const classesData = await Classes.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

module.exports = router;