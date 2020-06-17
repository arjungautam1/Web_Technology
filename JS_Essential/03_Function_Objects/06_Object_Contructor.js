//Contructor Object 
function Course(title,instructor,level,published,views)
{
    this.title=title;
    this.instructor=instructor;
    this.level=level;
    this.published=published;
    this.views=views;
    this.updateViews=function()
    {
        return ++this.views;
    };
}


// var course01=new Course("JS Trainging","Arjun",1,true,0)
// var course02=new Course("Physics","Pooja",0,false,1)

// console.log(course01);
// console.log(course02);

// This can be used as a whole as array 

var courses=[
    new Course("JS Training","Arjun",1,true,0),
    new Course("Physics","Pooja",0,false,1)
];
console.log(courses);
console.log(courses[1].updateViews());