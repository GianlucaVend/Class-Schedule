const express=require('express')

// const masterSchedule=require('./schedule.js')
// const classList = masterSchedule.classList;
// const weeklySchedule = masterSchedule.weeklySchedule;
// const dailySchedule = masterSchedule.dailySchedule;

const {classList,weeklySchedule,dailySchedule} = require('./schedule')

const app=express()

app.listen(3000)

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/home.html")
})


app.get("/schedule/:day?",(req,res)=>{
    let result = weeklySchedule;
    if (req.params.day)
    {
        let requestedDay = req.params.day.toLowerCase();
        result = dailySchedule[requestedDay]
    }
    res.send(result)
})

//localhost:3000/labs
app.get("/labs", (req,res)=>{

let result=[];
weeklySchedule.forEach((item)=>{
    if(item.type=="Lab")
    {
    result.push(item)
    }
})
    res.send(result);
})

//localhost:3000/codes
app.get("/codes", (req,res)=>{

    result= [];
    weeklySchedule.forEach((item)=>{
        result.push(item.code + ", " + item.day + ", " + item.start);
    })

    res.send(result);
})

//localhost:3000/lectures
app.get("/lectures", (req,res)=>{

    let result=[];
    weeklySchedule.forEach((item)=>{
        if(item.type=="Lecture")
        {
        result.push(item)
        }
    })
        res.send(result);
    })