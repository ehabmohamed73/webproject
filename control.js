function sin() {
    let s = document.getElementById('sinup');
    s.style.display = "block";
}

function hideDiv() {
    let s = document.getElementById('sinup');
    s.style.display = "none";
}
document.getElementById('book-Now').addEventListener("click", function() {
    document.getElementById('navul').style.display = "block";
});
document.getElementById('navul').addEventListener("mouseleave", function() {
    document.getElementById('navul').style.display = "none"
});