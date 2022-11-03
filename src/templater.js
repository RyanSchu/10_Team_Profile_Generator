let head = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link href="../src/style.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar">
        <div class="container-fluid d-flex justify-content-center">
            <h1>Your Team</h1>
        </div>
    </nav>
    
    <div class="container-fluid py-5 d-flex justify-content-center">`



const generateHTML = (team) => {
    team.map(employee => generateCard(employee))
} 

const generateCard = (employee) => {
    console.log(employee.getRole())
}

module.exports  = {generateHTML, generateCard}