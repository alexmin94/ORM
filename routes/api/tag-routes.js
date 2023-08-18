const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include:[
      {
        model:Product,
        through:ProductTag
      }
    ]
  })
  .then((tags)=>res.status(200).json(tags))
  .catch((error)=>res.status(500).json(error))
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where:{
      id:req.params.id
    },
    include:[
      {
        model:Product,
        through:ProductTag
      }
    ]
  })
  .then((tags)=>res.status(200).json(tags))
  .catch((error)=>res.status(500).json(error))
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  Tag.create(req.body)
  .then((tags)=>res.status(200).json(tags))
  .catch((error)=>res.status(500).json(error))
  // create a new tag
});

router.put('/:id', (req, res) => {
  Tag.update(req.body,{
    where:{
      id:req.params.id
    },
    
  })
  .then((tags)=>res.status(200).json(tags))
  .catch((error)=>res.status(500).json(error))
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where:{
      id:req.params.id
    },
    
  })
  .then((tags)=>res.status(200).json(tags))
  .catch((error)=>res.status(500).json(error))
  // delete on tag by its `id` value
});

module.exports = router;
