function Filter() {
    // Declare variables
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].querySelectorAll("#title")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}



const deleteBt = document.querySelectorAll("#deleteBt");

for(let i = 0 ; i < deleteBt.length; i++)
{
    deleteBt[i].onclick = (e)=>{
        if(!confirm('Are you sure to delete?')) 
        {
            e.preventDefault();
        }
    }
}

const GrantOrRevokeBt = document.querySelectorAll("#GrantOrRevokeBt");

for(let i = 0 ; i < GrantOrRevokeBt.length; i++)
{
    GrantOrRevokeBt[i].onclick = (e)=>{
        if(!confirm('Are you sure?')) 
        {
            e.preventDefault();
        }
    }
}

