// This will create the target="_blank " where ever it finds https 
var extLinks=document.querySelectorAll('a[href^="http"]');

for(var i=0;i<extLinks.length;i++)
{
   if(!extLinks[i].hasAttribute("target")){
       extLinks[i].setAttribute("target","_blank");
   }
}
