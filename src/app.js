const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geoCode = require('./utils/geocode')
const forCast = require('./utils/forecast')
const foreCast = require('./utils/forecast')


const app = express()
const port = process.env.PORT || 3000


// Define paths for Express consig
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partailsPath = path.join(__dirname,'../templates/partials')

// Setup handleBars engine and view location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partailsPath)


//Setup static directory to server
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Abhinav'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        name: 'Abhinav'
    })
})
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        name: 'Abhinav'
    })
})

app.get('/weather', (req,res)=>{
    if(!req.query.address){
        return res.send({
            error: "Enter address to get result"
        })
    }
    geoCode(req.query.address, (error, {latitude, longitude, location}={})=>{
        if(error){
            return res.send({
                error: error
            })
        }
        foreCast(latitude, longitude, (error, forecast)=>{
            if(!error){
               return res.send({
                    forecast: forecast,
                    location: location,
                    address: req.query.address

                })
            }
            return res.send({error})
        })
    })
})


app.get('/help/*',(req,res)=>{
    res.render('404',{
        title: 'Not Found',
        name: 'Abhinav Ranjan',
        errorMessage: 'Article not found'
    })
})

app.get('*', (req, res)=>{
    res.render('404',{
        title: '404',
        name: 'Abhinav Ranjan',
        errorMessage: 'Page not found'
    })
})



app.listen(port, () => {
    console.log('Server is running on port ' + port)
})
