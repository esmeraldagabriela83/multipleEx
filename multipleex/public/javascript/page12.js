console.log("hello from page 12 js");

//https://www.w3schools.com/howto/howto_css_fixed_sidebar.asp

//https://www.w3schools.com/howto/howto_js_vertical_tabs.asp

//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_vertical_tabs

//Vertical Tabs

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


  //https://getbootstrap.com/docs/5.2/components/scrollspy/


  //https://www.w3schools.com/bootstrap/bootstrap_scrollspy.asp
  //https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_scrollspy2&stacked=h