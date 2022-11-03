const fs = require('fs')

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

const tail = 
`    </div>
</body>
</html>`

const generateHTML = (team) => {
    const cardList=team.map(employee => generateCard(employee))
    const output = head + cardList.join('') + tail
    fs.writeFile('./dist/index.html',output,(err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      })
} 

const generateCard = (employee) => {
    const last_item=employee[Object.keys(employee)[Object.keys(employee).length - 1]]
    const card =
    `        <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${employee.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${employee.id}</li>
            <li class="list-group-item">${employee.email}</li>
            <li class="list-group-item">${last_item}</li>
          </ul>
    </div>
</div>`
    return card
}

module.exports  = {generateHTML, generateCard}