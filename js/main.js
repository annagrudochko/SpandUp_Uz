document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    // Add event listener for closing the sidenav when a link is clicked
    var sidenavLinks = document.querySelectorAll('.sidenav-close');
    sidenavLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var sidenavInstance = M.Sidenav.getInstance(document.querySelector('.sidenav'));
            sidenavInstance.close();
        });
    });
});

{/* <script>
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    // Add event listener for closing the sidenav when a link is clicked
    var sidenavLinks = document.querySelectorAll('.sidenav-close');
    sidenavLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var sidenavInstance = M.Sidenav.getInstance(document.querySelector('.sidenav'));
            sidenavInstance.close();
        });
    });
});
</script> */}
