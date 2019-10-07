$(document).ready(function() {
    // This file just does a GET request to figure out which parking spots are reserved
    // and updates the HTML on the page
    $.get("/api/user_reservations").then(function(data) {
      $(".spot-reserved").text(data.id);
      $(".spot-reserved").text(data.car);
      $(".spot-reserved").text(data.owner);
      $(".spot-reserved").text(data.license);
    });
  });
  