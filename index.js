const http = require('http');
const express = require('express');
const app = express();

const server = http.createServer(app);
const PORT = 3000;

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.render('home', {
        locals: {
            pageTitle: 'Home Page',
            pageHeader : 'This is header 1',
            
        },
        partials: {
            nav: 'partials/nav',
            header: 'partials/header',
            footer: 'partials/footer',
        } 
    });
})

app.get('/blog', (req, res) => {
    const blogHTML = blogData.map((post) => `<h2>${post.title}</h2><p>${post.content}</p>`);

    res.render('blog', {
        locals: {
            pageTitle: 'the blog page',
            blogPosts: blogHTML,
        },
        partials: {
            nav: 'partials/nav',
            header: 'partials/header',
            footer: 'partials/footer',
        } 
    })
})

const blogData = [
    {
        title: 'first blog',
        content: 'lorem ipsum'
    },
    {
        title: '2 blog',
        content: 'lorem ipsum'
    },
    {
        title: 'THird blog',
        content: 'lorem ipsum'
    }
]

server.listen(3000)