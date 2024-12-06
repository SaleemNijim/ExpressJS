// 1-Create a Folder
// 2-npm init -y
// 3-npm i express
// 4-first step import ExpressJS
// 5-create an inestance
// 6-Provide Port :8000
// 7-Basic Route "/"


import express from 'express';
import products from './products.js';
import userCredentials from './middleware/logs.js';
import path, { join } from 'path'
import router from './routes/route.js';

// 5-create an inestance
const app = express()

{//Basic Routing
    // app.get('/', (req, res) => {
    //     res.send("<h1>Welcome to the Home</h1>");
    // });

    // app.get('/about', (req, res) => {
    //     res.send("<h1>About Section</h1>")
    // })
    // app.get('/contact', (req, res) => {
    //     res.send("<h1>Contact Page </h1>")
    // })
}
{//Http Methods

    // GET  >> Retrive Data
    // POST >> Create/Insert Data
    // PUT >> Completely Update Data
    // PATCH >> Parially update Data
    // DELETE >> Delete Data
    // All >> Any http Request Method
}
{// String Pattern Path


    // Practical Use Case:
    // This pattern is useful when you want to account for slight variations in the URL without defining multiple routes explicitly. For example:

    // Supporting paths with or without specific query parameters.
    // Allowing optional versioning or parameters in URLs.



    // app.get('/ab?cd', (req, res) => {
    //     res.send("<h1>if the user hit (acd) or (abcd) then this will run</h1>")
    // })
}
{// Regex ==>( regular expression)

    // This approach is useful when you want to handle requests dynamically based on patterns in the URL. For example:

    // app.get(/x/, (req, res) => {
    //     res.send("<h1>if the path incudes the letters (x) it will work</h1>")
    // })
}
{// Nestted Route


    // app.get('/products/iphone', (req, res) => {
    //     res.send("<h1>This code will only run if you provide /product/iphone </h1>")
    // })
}
{// Call Back Function
    console.clear()
    // we can't use double callback fun twisebut if we used next() it well work cuz it;s allow us to jump to the next callback Function

    // app.get('/double-cd', (req, res, next) => {
    //     console.log('First callback');
    //     next()

    // }, (req, res) => {
    //     res.send("second CallBack")
    // })


    // const cd1 = (req, res, next) => {
    //     console.log('first Callback');
    //     next()

    // }
    // const cd2 = (req, res, next) => {
    //     console.log('second Callback');
    //     next()

    // }
    // const cd3 = (req, res, next) => {
    //     console.log('third Callback');
    //     res.send("Array of Callbacks ")

    // }
    // app.get('/array-cd', [cd1, cd2, cd3])

    // _________________________________

    // const cd1 = (req, res, next) => {
    //     console.log('first Callback');
    //     next()

    // }
    // const cd2 = (req, res, next) => {
    //     console.log('second Callback');
    //     next()

    // }

    // app.get('/crazyness', [cd1, cd2], (req, res, next) => {
    //     console.log('third callback');
    //     next()

    // }, (req, res) => {
    //     console.log('forth callback');

    //     res.send("Crazyness")
    // })

}
{// ugly code

    // app.get('/student', (req, res) => {
    //     res.send("All Student")
    // })
    // app.post("/student", (req, res) => {
    //     res.send("Add New Student")
    // })
    // app.put('/student', (req, res) => {
    //     res.send("updata Student")
    // })
    // app.delete('/student', (req, res) => {
    //     res.send("Delete Student")
    // })
}
{// Refactor

    //app.route()}

    // app.route("/student")
    //     .get((req, res) => res.send("All Students"))
    //     .post((req, res) => res.send("Add New Student"))
    //     .put((req, res) => res.send("updata Student"))
    //     .delete((req, res) => res.send("Delete Student"))
}


// Now We begin

// 1.Crate routes folder and put routes in a saperate File.
// 2.create instance of express.Router().
// 3.Instance of app.method change that to "router.method".
// 4.Export router .
// 5.Import router.
// 6.use the (app.use) built-in middleware & provide your routes.

// ________________________________

{// Route Params
    // ecom/products/iphone/:id

    // app.get('/product/:category/:id', (req, res) => {
    //     const { category, id } = req.params
    //     res.send(`<h1>product Category ${category} and it's id  ${id}<h1/>`)

    // })

    // app.param("id", (req, res, next, id) => {
    //     console.log(`id : ${id}`);
    //     next()

    // })

    // app.get('/user/:id', (req, res) => {
    //     console.log('This is user id Path');
    //     res.send("Response Ok")

    // })
}
{// Controllers
    // import students from './routes/student.js'

    // app.use('/students', students)
}
{// Query String


    app.get('/product', (req, res) => {
        const { category, id } = req.query
        res.send(`Response Ok ${category} and it's id ${id}`)
    })
}
{// Sending JSON


    // app.get('/products', (req, res) => {
    //     res.json(products)
    // })

    // app.use(userCredentials) >>>Middleware
    // app.get('/', (req, res) => {
    //     res.send('<h2>Hello Admin</h2>')
    // })


    // app.get('/about', (req, res) => {
    //     res.send('<h2>About section</h2>')
    // })

    // app.get('/contact', (req, res) => {
    //     res.send('<h2>contact page</h2>')
    // })

}
{// Serving Static Files 

    /*
    sendFile يُستخدم لإرسال ملفات مباشرة من النظام مثل HTML، PDF، أو ملفات نصية إلى المتصفح.
    بينما res.send يُستخدم لإرسال نصوص أو JSON كاستجابة مباشرة.
    */



    // app.use(express.static('./public'))
    // app.get("/", (req, res) => {
    //     res.sendFile(path.join(process.cwd(), './public/index.html'))
    // })
}
{// Template Engine Setup

    app.set('view engine', 'ejs');


    app.use('/', router)

}
app.listen(8000, () => console.log('server up')
)

