// product list button

function product_button()
 {
   const button = document.getElementById("product_list");
   button.style.display = "block";

 }

function opensidebar(){
  const sidebar = document.getElementById("barcontent");
  sidebar.style.width= "160px";
  
}

function closesidebar()
{
  const sidebar = document.getElementById("barcontent");
  sidebar.style.width = "0";
  
}