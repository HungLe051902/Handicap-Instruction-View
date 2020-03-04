
// hàm để responsive khi thu nhỏ kích thước màn hình
function myFunction() {
    var x = document.getElementById("sidebar_menu");
    if (x.className === "sticky-top border border-dark sidebar_") {
      x.className += " responsive";
    } else {
      x.className = "sticky-top border border-dark sidebar_";
    }
  }

  //hàm khi kích ra ngoài mobile sidebar
  document.getElementById('main_content').onclick = function(e) {
    document.getElementById('mobile-sidebar').style.display = "none";
    document.getElementById("main").classList.remove('opacity-sidebar');
  }



//hàm để mở rộng thành phần con ở trong sidebar
function expand(){
    var y = document.getElementById("myChild");
    var z = document.getElementById("icon_angle");
    if (y.className === "child") {
        y.className = "displayBlock";
        z.className = "fas fa-angle-up";
    } else {
        y.className = "child";
        z.className = "fas fa-angle-down";
    }
}

function new_expand(){
  var y = document.getElementById("myNewChild");
  var z = document.getElementById("new_icon_angle");
  if (y.className === "child") {
      y.className = "displayBlock";
      z.className = "fas fa-angle-up";
  } else {
      y.className = "child";
      z.className = "fas fa-angle-down";
  }
}

function expandSideMenu(){
  var x = document.getElementById("mobile-sidebar");
  var y = document.getElementById("main");
  if (x.style.display == "none"){
    x.style.display = "block";
    y.classList.add('opacity-sidebar');
    
  }
  else{
    x.style.display = "none";
    y.classList.remove('opacity-sidebar');
  }
}


// hàm để đóng mobile menu sidebar
function closeSideMenu(){
  var x = document.getElementById("header");
  x.style.display = "mobile-sidebar";
}


