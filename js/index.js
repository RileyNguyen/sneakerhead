// $('.navbar-brand').click(function () {
//     $('.home').show();
// })
// $('#view-shop').click(function () {
//     $('.shop').show(function () {
//         $('.home').hide();
//     })
// })
$(".owl-carousel").owlCarousel({
  items: 2.3,
  loop: true,
  left: true,
  margin: 10,
  URLhashListener: true,
  autoplayHoverPause: true,
  startPosition: "URLHash"
});
var myFullpage = new fullpage("#fullpage", {
  anchors: ["firstPage", "secondPage", "3rdPage"],
  menu: "#menu",
  lazyLoad: true
});
var link = $(".link");
link.on("click", function() {
  link.removeClass("is_active");
  $(this).addClass("is_active");
});
$(".sel").each(function() {
  $(this)
    .children("select")
    .css("display", "none");

  var $current = $(this);

  $(this)
    .find("option")
    .each(function(i) {
      if (i == 0) {
        $current.prepend(
          $("<div>", {
            class: $current.attr("class").replace(/sel/g, "sel__box")
          })
        );

        var placeholder = $(this).text();
        $current.prepend(
          $("<span>", {
            class: $current.attr("class").replace(/sel/g, "sel__placeholder"),
            text: placeholder,
            "data-placeholder": placeholder
          })
        );

        return;
      }

      $current.children("div").append(
        $("<span>", {
          class: $current.attr("class").replace(/sel/g, "sel__box__options"),
          text: $(this).text()
        })
      );
    });
});

// Toggling the `.active` state on the `.sel`.
$(".sel").click(function() {
  $(this).toggleClass("active");
});

// Toggling the `.selected` state on the options.
$(".sel__box__options").click(function() {
  var txt = $(this).text();
  var index = $(this).index();

  $(this)
    .siblings(".sel__box__options")
    .removeClass("selected");
  $(this).addClass("selected");

  var $currentSel = $(this).closest(".sel");
  $currentSel.children(".sel__placeholder").text(txt);
  $currentSel.children("select").prop("selectedIndex", index + 1);
});
const c = document.querySelector(".pagination-page");
const indexs = Array.from(document.querySelectorAll(".index"));
let cur = -1;
indexs.forEach((index, i) => {
  index.addEventListener("click", e => {
    // clear
    c.className = "pagination-page";
    void c.offsetWidth; // Reflow
    c.classList.add("open");
    c.classList.add(`i${i + 1}`);
    if (cur > i) {
      c.classList.add("flip");
    }
    cur = i;
  });
});
$(".pagination-inner a").on("click", function() {
  $(this)
    .siblings()
    .removeClass("pagination-active");
  $(this).addClass("pagination-active");
});
const one = {
  template: `<z-view style="background: none">
    <img slot="image" src="img/product/air-jordan_burned.png" width="80%" height="50%" />
    <section slot="extension">
      <z-spot 
        button
        :angle="-45"  
        size="medium" 
        to-view="mix">
        <img slot="image" src="img/product/air-jordan_burned.png" width="80%" height="50%" />
      </z-spot>
      <z-spot 
        :angle="180"  
        size="medium" 
        to-view="mix">
        <img slot="image" src="img/product/air-jordan_burned.png" width="80%" height="50%" />
      </z-spot>
      <z-spot 
        :angle="45"  
        size="medium" 
        to-view="mix">
        <img slot="image" src="img/product/air-jordan_burned.png" width="80%" height="50%" />
      </z-spot>
    </section>
</z-view>`
};
const mix = {
  name: "mix",
  template: `<z-view>
      
          <img slot="image" src="img/product/air-jordan_burned.png" width="80%" height="55%" />
    
  </z-view>`
};
new Vue({
  el: "#app",
  components: {
    one,
    mix
  },
  mounted() {
    this.$zircle.setView("one");
  }
});
