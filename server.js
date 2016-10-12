var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
'article-one':{
    title: 'Article one | Sunil George',
    heading: 'Article one',
    date: 'Sep 05,2016',
    content: `<p>
                This is the content of my first article.  This is the content of my first article.  This is the content of my first article. This is the content of my first article.   This is the content of my first article.  This is the content of my first article. This is the content of my first article.   
            </p>
            <p>
                This is the content of my first article.  This is the content of my first article.  This is the content of my first article. This is the content of my first article.   This is the content of my first article.  This is the content of my first article. This is the content of my first article.   
            </p>`
    
},
'article-two':{
    title: 'Article two | Sunil George',
    heading: 'Article two',
    date: 'Sep 10,2016',
    content: `<p>
                This is the content of my second article.  This is the content of my second article.  This is the content of my second article. This is the content of my second article.   This is the content of my second article.  This is the content of my second article. This is the content of my second article.   
            </p>`
   
},
'article-three':{
    title: 'Article three | Sunil George',
    heading: 'Article three',
    date: 'Sep 15,2016',
    content: `<p>
                This is the content of my third article.  This is the content of my third article.  This is the content of my third article. This is the content of my third article.   This is the content of my third article.  This is the content of my third article. This is the content of my third article.   
            </p>`
    
}
};

function createTemplate (data) {
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;

var htmltemplate = 
`
    <html>
        <head>
            <title>
               ${title}
            </title>
            <meta name= "viewport" content= "width = device-width, inital-scale =1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
             <div class="container">
                <div>
                    <a href="/">Home</a>
                    <a href="/article-one">Article  1</a>
                    <a href="/article-two">Article  2</a>
                    <a href="/article-three">Article  3</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                
                </div>
            </div>
        </body>
    </html>
`;
return htmltemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter= 0;
app.get('/counter', function (req,res){
   counter = counter + 1;
   res.send(counter.toString());
});


app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/sunil.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'sunil.png'));
});

var names = [];
app.get('/submit-name/:name', function(req, res) {
    var name = req.param.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
