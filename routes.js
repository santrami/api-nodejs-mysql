const express= require('express')
const routes= express.Router()

//routes
routes.get('/',(req, res)=>{
    req.getConnection((err,conn)=>{
        if(err){
            return res.send(err)
        }else{
            conn.query('SELECT * from books',(err,rows)=>{
                if(err){
                    return res.send(err)
                }else{
                    res.json(rows)
                }
            })
        }
    })
})

routes.post('/',(req, res)=>{
    req.getConnection((err,conn)=>{
        if(err){
            return res.send(err)
            
        }
        
        else{
            conn.query('INSERT INTO books SET ? ',[req.body],(err,rows)=>{
                if(err){
                    return res.send(err)
                }else{
                    res.json(rows)
                }
            })
        }
    })
})


module.exports= routes