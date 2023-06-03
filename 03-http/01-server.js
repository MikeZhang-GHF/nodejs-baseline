const http = require('http');

// http.createServer((req, res) => {
//     // accept request and send response core web app handling
//     // req - request

//     // res - response
//     // res.write('hello browser');
//     // set header
//     // res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
//     res.write(`
//         <html>
//             <b>Hello World</b>
//         </html>
//     `)
//     // res.end('\nend'); // avoid timeout
//     res.end();
// }).listen(6270, () => {
//     console.log('server start!');
// });

// data
const todos = [
    { id: 1, text: 'Todo One' },
    { id: 2, text: 'Todo Two' },
    { id: 3, text: 'Todo Three' },
];

http.createServer((req, res) => {
    // req

    // set header
    // res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    // res.setHeader('Content-Type', 'text/html');
    // res.write(`
    //     <html>
    //         <b>Hello World</b>
    //     </html>
    // `);
    const { method, url } = req;
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('X-Powered-By', 'Node.js');
    res.end(
        JSON.stringify({
            success: false,
            err: 'not found',
            data: null,
        })
    );
}).listen(6270, () => {
    console.log('server start!');
});
