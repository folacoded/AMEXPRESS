const selectElement = (element) => document.querySelector(element);
const header = selectElement ('header');
const mainContent =selectElement('main');
selectElement('.hamburger') .addEventListener('click', () => {
    header.classList.toggle('active');
    mainContent.classList.toggle('active');

});
window.onclick = (event) => {
    if(event.target.matches('.active')){
     if(header.classList.contains('active')){
         header.classList.remove('active');
         mainContent.classList.remove('active');
         
     }   
    }
};
$(document).ready(function(){
    $(".btn").click(function(){
      $("input[type='text'], textarea").val("");
    });
});