    getData = () =>
    {

        var res = document.getElementById("result");
        fetch("http://localhost:3000/users").then(response => response.json()).then( (data) => {
            var str = `<html><body><table><tr><th>ID</th><th>Name</th><th>Branch</th></tr>`
            data.forEach( item => {
                str += `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.branch}</td></tr>`
            });
            str += `</table></body></html>`;
            res.innerHTML = str;
        });
    }
    Delete = () =>
    {
        var id = parseInt(document.getElementById("id").value);
        var url = "http://localhost:3000/users/"+id;
        fetch(url,{
            method:"DELETE"
        }).then(response => response.json()).then(res => getData());
    }
    insert = () =>
    {
        var id = document.getElementById("id").value;
        var name = document.getElementById("name").value;
        var branch = document.getElementById("branch").value;
        const obj = {
            id:id,
            name:name,
            dept:branch
        }
        fetch("http://localhost:3000/users",{
            method:"POST",
            body:JSON.stringify(obj)
         });//.then(response => response.json()).then(res => getData());
    }