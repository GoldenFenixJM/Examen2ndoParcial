const express = require('express') //El objeto que manda la librería de express guárdalo en express
const 
{
    getuserdata,
    updateuseradress
} =require('../controllers')

const router = express.Router( )
router.get('/get-user-data/:id', getuserdata)
router.put('/update-user-address/:id', updateuseradress)
//router.post('/account/:id/order', Order)
module.exports={
    router
}