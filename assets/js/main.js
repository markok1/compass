$(".custompopup .cont .closebtn").click(function (e) {
  e.preventDefault();
  $(".custompopup").removeClass("custompopup_active");
  $(".navbar").removeClass("navbar_active");
  $(".topnav").removeClass("topnav_active");
});

$(".showbluepopup").click(function (e) {
  e.preventDefault();
  $(".custompopup").addClass("custompopup_active");
  $(".navbar").addClass("navbar_active");
  $(".topnav").addClass("topnav_active");
});

$(".searchadd .placeforinput input").click(function () {
  $(this).css("background", "#fff");
  $(this).parent().parent().find("p").addClass("activated");
});


$( ".pastprojects .cont .tableplace .containerradio input" ).change(function() {
  if($(this).hasClass("checked")){
    $(this).removeClass("checked");
  }else{
    $(this).addClass("checked");
  }

  var om = 1;
  $('.pastprojects .cont .tableplace .containerradio input').each(function(){
      if($(this).hasClass("checked")){
        om++
      }
  });
  if(om > 1){
    $(".pastprojects .cont .titlearea .mainbtn").addClass("mainbtn_activated");
  }else{
    $(".pastprojects .cont .titlearea .mainbtn").removeClass("mainbtn_activated");
  }

  if(om > 2){
    $(".pastprojects .cont .titlearea .mainbtn a").html("REORDER PROJECTS");
  }else{
    $(".pastprojects .cont .titlearea .mainbtn a").html("REORDER PROJECT");
  }
});











// custom select box


// Iterate over each select element
$('select').each(function () {

    // Cache the number of options
    var $this = $(this),
        numberOfOptions = $(this).children('option').length;

    // Hides the select element
    $this.addClass('s-hidden');

    // Wrap the select element in a div
    $this.wrap('<div class="select"></div>');

    // Insert a styled div to sit over the top of the hidden select element
    $this.after('<div class="styledSelect"></div>');

    // Cache the styled div
    var $styledSelect = $this.next('div.styledSelect');

    // Show the first select option in the styled div
    $styledSelect.text($this.children('option').eq(0).text());

    // Insert an unordered list after the styled div and also cache the list
    var $list = $('<ul />', {
        'class': 'options'
    }).insertAfter($styledSelect);

    // Insert a list item into the unordered list for each select option
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    // Cache the list items
    var $listItems = $list.children('li');

    // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
    $styledSelect.click(function (e) {
        e.stopPropagation();
        $('div.styledSelect.active').each(function () {
            $(this).removeClass('active').next('ul.options').hide();
        });
        $(this).toggleClass('active').next('ul.options').toggle();
    });

    // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
    // Updates the select element to have the value of the equivalent option
    $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        /* alert($this.val()); Uncomment this for demonstration! */
    });

    // Hides the unordered list when clicking outside of it
    $(document).click(function () {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});