
// slide bar

let slideindex = 1;

showslide(slideindex);

function plus_slide(n)
{
 showslide(slideindex += n);

}

function current_slide (n)
{
 showslide(slideindex =n);
}

function  showslide(n)
{ 
const slides = document.getElementsByClassName("slides");
const dots = document.getElementsByClassName("dot");
   if(n>slides.length)
   {
     slideindex = 1
   }

   if(n<1)
   {
     slideindex =slides.length;
   }

   for(i = 0; i<slides.length; i++)
   {
     slides[i].style.display = "none";
   }

   for(i = 0; i<dots.length; i++)
   {
     dots[i].classList.remove("active");
   }


   slides[slideindex-1].style.display ="block";
   dots[slideindex-1].classList.add ("active");
}

// for featured product

