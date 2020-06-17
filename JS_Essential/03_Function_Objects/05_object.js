// Object
var course=new Object();

// course.title="JS Training ";
// course.instructor="Arjun Gautam";
// course.level=1;
// course.published=true;
// course.views=0;

var course={
    title:"JS Training",
    instructor:"Arjun Gautam",
    level:1,
    published:true,
    views:0,
    updateViews:function()
    {
        return ++course.views;
    }
}
// console.log(course);
// console.log(course.title);
console.log("Before Updating:",course.views);
course.updateViews();
console.log("After Updating:",course.views);