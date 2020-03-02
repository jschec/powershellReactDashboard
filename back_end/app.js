var express = require('express'); // package allowing us to create endpoints at a url
const Shell = require('node-powershell'); // package allowing us to execute powershell script
var app = express();


// go to end point (localhost:4000/runPs1) to trigger the execution of this script
app.get('/runPs1', function (req, res) {
    /*
        commands need to be initalized every time this end pont
        is triggered otherwise the script hangs after first call (cannot return new results).
    */
    let ps = new Shell({
        executionPolicy: 'Bypass',
        noProfile: true
    })
    // We trigger a script in the "ps_scripts" directory that returns
    // all of the drives you have in your computer
    ps.addCommand('./ps_scripts/test_script.ps1', [
        { ComputerName: 'localhost' }
    ]);
    //ps.invoke() will execute this script
    ps.invoke()
    .then(output => {
        // res.json will take the resulting json and emit it for
        // the front end to pick it up
        res.json({
            data: output
        });
    }).catch(err => {
        // if something goes wrong the command is stopped and an error is
        // logged in console
        console.log(err);
        ps.dispose();
    })
});

//application is hosted on port 4000 (localhost:4000)
app.listen(4000, function () {
    console.log('Example app listening on port 4000!');  
})