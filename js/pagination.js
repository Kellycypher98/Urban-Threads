var itemsPerPage = 4;
var currentPage = 1;
var totalPages = Math.ceil(
  $("#data-container .item-entry").length / itemsPerPage
);

// Hide all items except the first itemsPerPage
$("#data-container .item-entry").slice(itemsPerPage).hide();

// Update page buttons and content visibility based on currentPage
function updatePage() {
  // Disable previous button if we're on the first page
  if (currentPage == 1) {
    $("#prev").addClass("disabled");
  } else {
    $("#prev").removeClass("disabled");
  }

  // Disable next button if we're on the last page
  if (currentPage == totalPages) {
    $("#next").addClass("disabled");
  } else {
    $("#next").removeClass("disabled");
  }

  // Hide all items and show only items for current page
  $("#data-container .item-entry").hide();
  var startIndex = (currentPage - 1) * itemsPerPage;
  var endIndex = startIndex + itemsPerPage;
  $("#data-container .item-entry").slice(startIndex, endIndex).show();

  // Update page button styles
  $("#pagination-btn .page").removeClass("active");
  $("#pagination-btn .page")
    .eq(currentPage - 1)
    .addClass("active");
}

// Handle previous button click
$("#prev").on("click", function (event) {
  event.preventDefault();
  if (currentPage > 1) {
    currentPage--;
    updatePage();
  }
});

// Handle next button click
$("#next").on("click", function (event) {
  event.preventDefault();
  if (currentPage < totalPages) {
    currentPage++;
    updatePage();
  }
});

// Handle page button click
$("#nav .page").on("click", function (event) {
  event.preventDefault();
  var pageNumber = $(this).text();
  if (pageNumber != currentPage) {
    currentPage = pageNumber;
    updatePage();
  }
});

// Initialize page buttons and content visibility
updatePage();
