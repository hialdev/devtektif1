
function toggleChangeBgColor(els) {
    var rect1 = els[0].getBoundingClientRect();
    var elemTop1 = rect1.top;
    var elemBottom1 = rect1.bottom;
    var distanceTop1 = window.scrollY + elemTop1;
    var distanceBottom1 = window.scrollY + elemBottom1;

    var rect2 = els[els.length - 1].getBoundingClientRect();
    var elemTop2 = rect2.top;
    var elemBottom2 = rect2.bottom;
    var distanceTop2 = window.scrollY + elemTop2;
    var distanceBottom2 = window.scrollY + elemBottom2;

    
    if ((window.scrollY >= distanceTop1) && (window.scrollY <= distanceBottom2)) {
        var nodes = document.getElementById('toggle').getElementsByTagName("span");
        for(var i=0; i<nodes.length; i++) {
            nodes[i].style.background = "#fff";
        }
    }else{
        var nodes = document.getElementById('toggle').getElementsByTagName("span");
        for(var i=0; i<nodes.length; i++) {
            nodes[i].style.background = "#1C1D1F";
        }
    }

}

let els = document.getElementsByClassName("dark-section");

window.onscroll = function() {
    toggleChangeBgColor(els);
    console.log('scrolling');
};

document.querySelector("#toggle").addEventListener("click",function(){
    this.classList.toggle("active");
})
