var Todo = require('./models/todo');

var path    = require("path");

var idRow = 1;

function getTodos(res) {
    Todo.find(function (err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }
        console.log(todos);
        res.json(todos); // return all todos in JSON format
    });
};

function getExpenses(res) {
    Todo.find(function (err, expenses) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }
        
        console.log(expenses);
        res.json(expenses); // return all expenses in JSON format
    });
};

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/todos', function (req, res) {
        // use mongoose to get all todos in the database
        console.log(res);
        getTodos(res);
    });

    // get all expenses
    app.get('/api/expenses', function (req, res) {
        // use mongoose to get all todos in the database
        console.log("GET /api/expenses");
        getExpenses(res);
    });


    // create todo and send back all todos after creation
    app.post('/api/expenses', function (req, res) {

        let content = {
            "month":"Month1",
            "management": req.body["management-exp"],
            "taxes": req.body["taxes-exp"],
            "wsbo": req.body["wsbo-exp"],
            "development": req.body["development-exp"],
            "admin": req.body["admin-exp"],
            "business": req.body["business-exp"]
        }

        Todo.create({
            data: content,
            // _id: idRow++,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);

            
        });

        // redirect to 
        res.redirect('/form');
    });



   // update an expense row
   app.post('/api/tables/:expense_id', function (req, res) {

    console.log(req.query);
    let content = {
            "month":req.query.month,
            "management": req.query.management,
            "taxes": req.query.taxes,
            "wsbo": req.query.wsbo,
            "development": req.query.development,
            "admin": req.query.admin,
            "business": req.query.business
        };

        // create a todo, information comes from AJAX request from Angular
        Todo.update({
            data: content,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);
        });

        // get and return all the todos after you create another
        res.sendFile(path.join("C:/Users/Luis/Documents/Coding Projects/MEAN_Todo_Tutorial/startupfocus"+'/public/pages/tables.html'));
        // getTodos(res);
    });


    // delete an expense
    app.delete('/api/expenses/:expense_id', function (req, res) {
        console.log(req.params.expense_id);
        Todo.remove({
            _id: req.params.expense_id
        }, function (err, expense) {
            if (err)
                res.send(err);

            getTodos(res);
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
