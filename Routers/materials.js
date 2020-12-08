const express = require('express')
const router = express.Router()
const material = require('../models/material')

router.get('/',async(req,res)=>{
    try{
        const materials =await material.find()
        res.json(materials)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.get('/:id',async(req,res)=>{
    try{
        const materials =await material.findById(req.params.id)
        res.json(materials)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/filter/:mid',async(req,res)=>{
    try{
        const materials =await material.find(
            {
                'main_element':req.params.mid
            })
        res.json(materials)
    }catch(err){
        res.send('Error ' + err)
    }
})
 
router.get('/boronlessthan/:value',async(req,res)=>{
    try{
        const materials =await material.find(
            {
                'IsBoron_composition_average' : {$lt : req.params.value}
            })
        res.json(materials)
    }catch(err){
        res.send('Error ' + err)
    }
})


module.exports = router