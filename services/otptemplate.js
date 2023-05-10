module.exports=({Name,OTP})=>{
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Download | InShare - File Sharing Made Easy</title>
        <link rel="stylesheet" href="/css/style.css">
    </head>
    
    <body>
        <h3>hey ${Name}</h3>
        <p>your inshare otp is ${OTP}</p>
    </body>
    
    </html>`;
}