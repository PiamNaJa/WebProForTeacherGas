function Filter() {
    // Declare variables
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("songsSearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("songtable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].querySelectorAll("#song-title")[0];
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

function confirmBox() {
    if (confirm('Are you sure you want to delete it?')) {
        return true;
    } else {
        event.stopPropagation();
        event.preventDefatrt();
    }
}