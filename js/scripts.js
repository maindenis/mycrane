function getCellHeight() {
    $(".inner_table_6").css({
        "height" : "auto"
    });
    $(".cells_cols").each(function (e) {
        parentHeight = $(this).height();
        $(this).find(".inner_table_6").css({
            "height" : parentHeight + "px"
        });
    });
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).on("load", function() {
    getCellHeight();
});

$(window).resize(function() {
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    getCellHeight();
});

$(document).scroll(function() {});

$(document).ready(function() {

    $(".s_btn").on("click", function(e) {
        e.preventDefault();
        $(".content_templ").toggleClass("hidden");
        $(this).toggleClass("active");
    });

    // -------------

    $(".tab_link").on("click", function(e) {
      parent = $(this).closest(".tab_list");
      parent.find(".tab_link").removeClass("active");
      $(this).addClass("active");
    });

    // -------------

    $(".resp_btn").click(function(e) {
      e.preventDefault();
      if( $("#resp_nav").is(":hidden") ) {
          $("#resp_nav").fadeIn(300);
          $(".resp_bg").fadeIn(300);
          $(".x_btn").fadeIn(300);
          $(this).addClass("active");
            div = document.createElement('div');
            div.style.overflowY = 'scroll';
            div.style.width = '50px';
            div.style.height = '50px';
            div.style.visibility = 'hidden';
            document.body.appendChild(div);
            scrollWidth = div.offsetWidth - div.clientWidth;
            document.body.removeChild(div);
            topCoord = $(document).scrollTop();
            $("body").addClass("fixed");
            $("body").css({
                "top" :  -1 * topCoord + "px",
                "padding-right" : scrollWidth + "px"
            });
      } else {
          $("#resp_nav").fadeOut(300);
          $(".resp_bg").fadeOut(300);
          $(".x_btn").fadeOut(300);
          $(this).removeClass("active");
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").removeClass("fixed");
            if (curTop !== 0) {
            $("html").scrollTop(curTop);
            }
            $("body").attr("style", "");
      }
    });
    
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#resp_nav").hasClass("active") &&
            bodyWidth <= 900) {
            $("#resp_nav").fadeOut(300);
            $(".resp_bg").fadeOut(300);
            $(".x_btn").fadeOut(300);
            $(".resp_btn").removeClass("active");
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").removeClass("fixed");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").attr("style", "");
        }
    });

    $(".x_btn, .resp_bg").on("click", function(e) {
        e.preventDefault();
        $("#resp_nav").fadeOut(300);
        $(".resp_bg").fadeOut(300);
        $(".x_btn").fadeOut(300);
        $(this).removeClass("active");
        curTop = $("body").css("top");
        curTop = Math.abs(parseInt(curTop, 10));
        $("body").removeClass("fixed");
        if (curTop !== 0) {
        $("html").scrollTop(curTop);
        }
        $("body").attr("style", "");
    });

    // ---------------

    $(".scroll_x").mCustomScrollbar({
        axis:"x",
        scrollButtons:{
            enable:true
        },
        callbacks:{
            onInit: function(){
                $(".scroll_x_wrapp").each(function () {
                    coord = $(this).find(".coord");
                    topCoord = coord.offset().top;
                    parentCoord = $(this).offset().top;
                    res = topCoord - parentCoord;
                    arrowLeft = $(this).find(".mCSB_buttonLeft");
                    arrowLeft.css({
                        "margin-top" : "-"+res + "px"
                    });
                    arrowRight = $(this).find(".mCSB_buttonRight");
                    arrowRight.css({
                        "margin-top" : "-"+res + "px"
                    });
                });
            }
        }
    });

    $(".del_btn").on("click", function(e) {
        e.preventDefault();
        greyTag = $(this).closest(".grey_tag");
        parent = greyTag.closest("div");
        parent.remove();
    });

    // --------------

    $(".dropdown_title").on("click", function(e) {
      e.preventDefault();
      parent = $(this).closest(".dropdown_box");
      sl = parent.find(".dropdown_list");
      if(sl.is(":hidden")) {
        parent.addClass("active");
        sl.slideDown(300);
      } else {               
        sl.slideUp(300);
        setTimeout(function() {
          parent.removeClass("active");
        },500); 
      }
    });

    $(".val").on("click", function(e) {
      e.preventDefault();
      parent = $(this).closest(".dropdown_box");
      dr = parent.find(".dropdown_list");
      activeVal = parent.find(".active_val");
      parent.find(".hide_val").val($(this).attr("data-val"));
      activeVal.html($(this).html());
      dr.slideUp(300);
      parent.removeClass("active");
    });

    $(this).keydown(function(eventObject){
      if (eventObject.which == 27) {
        $(".dropdown_box").each(function() {
          dr = $(this).find(".dropdown_list");
          dr.slideUp(300);
          $(this).removeClass("active");
        });
      }
    });

    $(document).on("mouseup", function(e) {
        e.preventDefault();
        hide_element = $(".dropdown_list");
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
            hide_element.each(function() {
            parent = hide_element.closest(".dropdown_box");
            if(parent.hasClass("active")) {
              dr = parent.find(".dropdown_list");
              dr.slideUp(300);
              parent.removeClass("active");
            }
          });
        }
    });

    // -------------

    document.querySelectorAll('.date').forEach((element) => {
       new AirDatepicker(element, {
        locale:{
            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            today: 'Today',
            clear: 'Clear',
            dateFormat: 'dd.MM.yyyy',
            timeFormat: 'hh:mm aa',
            firstDay: 0
        }
       });
    });

    // --------------

    $(".count_box button").click(function(e) {
        e.preventDefault();
        parentBlock = $(this).closest(".count_box");
        var countInput = parentBlock.find("input");
        var countVal = countInput.val();
        if( $(this).hasClass("minus_btn") && countVal > 1 ) {
            countVal--;
        } else if( $(this).hasClass("plus_btn")) {
            countVal++;
        }
        if(countVal == "") {
            countVal = 1;
        }
        countInput.val(countVal);
    });

    // -------------

    $(".ch_childrens input").on("change", function() {
      parentBlock = $(this).closest(".checkboxes_array");
      chChildrens = parentBlock.find(".ch_childrens input");
      mainCheckbox = parentBlock.find(".main_checkbox input");
      chChildrens.each(function() {
        if (!$(this).is(":checked")) {
          mainCheckbox.prop("checked", false);
          return false;
        } else {
          mainCheckbox.prop("checked", true);
        }
      });
      getPrice(parentBlock);
    });

    $(".main_checkbox input").on("change", function() {
      parentBlock = $(this).closest(".checkboxes_array");
      chChildrens = parentBlock.find(".ch_childrens input");
      if (!$(this).is(":checked")) {
        chChildrens.prop("checked", false);
      } else {
        chChildrens.prop("checked", true);
      }
    });

    // -------------

    $("#users").on("click", function(e) {
        e.preventDefault();
        $("#chat").toggleClass("active");
    });

    // -------------

    $(document).on("click", "[data-popup-link]",  function(e) {
      e.preventDefault();
      popupName = $(this).attr("data-popup-link");
      div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.visibility = 'hidden';
      document.body.appendChild(div);
      scrollWidth = div.offsetWidth - div.clientWidth;
      document.body.removeChild(div);
      topCoord = $(document).scrollTop();
      $("body").addClass("fixed");
      $("body").css({
          "top" :  -1 * topCoord + "px",
          "padding-right" : scrollWidth + "px"
      });
      $(".popup_bg").fadeIn(300);
      $("[data-popup = '"+ popupName +"']").fadeIn(300);
    });
    $(document).on("click", ".close, .popup_bg, .close_2", function(e) {
      e.preventDefault();
      curTop = $("body").css("top");
      curTop = Math.abs(parseInt(curTop, 10));
      $("body").removeClass("fixed");
      if (curTop !== 0) {
          $("html").scrollTop(curTop);
      }
      $("body").attr("style", "");
      $("[data-popup]").fadeOut(300);
      $(".popup_bg").fadeOut(300);
    });
    $(this).keydown(function(eventObject){
      if (eventObject.which == 27 && $("body").hasClass("fixed")) {
        curTop = $("body").css("top");
        curTop = Math.abs(parseInt(curTop, 10));
        $("body").removeClass("fixed");
        if (curTop !== 0) {
            $("html").scrollTop(curTop);
        }
        $("body").attr("style", "");      
        $(".popup_bg").fadeOut(300);
        $("[data-popup]").fadeOut(300);
      }
    });
    $(document).on("mouseup", function(e) {
      if($(".popup").is(":visible")) {
        e.preventDefault();
        hide_element = $(".popup_content");
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").removeClass("fixed");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").attr("style", "");    
            $(".popup_bg").fadeOut(300);
            $("[data-popup]").fadeOut(300);
        }
      }
    });

    // --------------

    $(".stars li").on("click", function(e) {
        e.preventDefault();
        index = $(this).index("li");
        parent = $(this).closest(".stars");
        parent.find("li").removeClass("active");
        parent.find("li").each(function() {
            if($(this).index("li") <= index) {
                $(this).addClass("active");
            } else {
                return;
            }
        });
    });

    // -------------

    var parent, input, filter, ul, li, a, i, txtValue;

    $(".search_title input").on("keyup", function() {
        input = $(this);
        filter = this.value.toUpperCase();
        parent = input.closest(".search_wrapp");
        ul = parent.find(".ul");
        li = ul.find(".li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByClassName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    });

    // --------------

    $(document).on("change", "[data-fileinput]", function() {;
        name = $(this).attr("data-fileinput");
        list = $("[data-fileslist = '"+name+"']");
        templ = "";
        for (var i = 0; i < this.files.length; i++) {
            templ += "<li>" + this.files[i].name + "</li>";
        }   
        list.append(templ);
    });

    $(document).on("change", "[data-fileinputsingle]", function() {;
        name = $(this).attr("data-fileinputsingle");
        list = $("[data-fileslist = '"+name+"']");
        templ = "";
        for (var i = 0; i < this.files.length; i++) {
            templ = "<li>" + this.files[i].name + "</li>"; 
        }
        list.html(templ);
    });
});