function getURL(URL){
    var p1 = new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET",URL);
        xhr.send();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    var Data = JSON.parse(xhr.responseText); 
                    resolve(Data)
                } else{
                    reject("Failed to load.");
                }
            }
        };
    });
    return p1;
}

function task3(){
    var URL = "https://jsonplaceholder.typicode.com/users";
    getURL(URL)
    .then(data => {
        let table = `<table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Website</th>
                            </tr>
                        </thead>
                        <tbody>`;
        
        data.forEach(user => {
            table += `<tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.username}</td>
                        <td>${user.email}</td>
                        <td>${user.phone}</td>
                        <td>${user.website}</td>
                      </tr>`;
        });
        
        table += `</tbody></table>`;
        document.getElementById("tableContainer").innerHTML = table;
    })
    .catch(error => {
        document.getElementById("tableContainer").innerHTML = `<p>Error: ${error}</p>`;
    });
}
