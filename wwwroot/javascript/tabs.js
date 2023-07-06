
    function openTab(evt, Services, arrows) {
            var i, tabcontent, tablinks, tabArrow;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
            }

    tabArrow = document.getElementsByClassName("arrow");
    for (i = 0; i < tabArrow.length; i++) {
        tabArrow[i].style.display = "none";
            }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
            }

    document.getElementById(arrows).style.display = "block";
    document.getElementById(Services).style.display = "block";
    evt.currentTarget.className += " active";
        }
    // Get the element with id="defaultOpen" and click on it

    document.getElementById("defaultOpen").click();
