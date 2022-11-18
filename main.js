var images = 
[
    "canada1.jpg",
    "canada2.jpg",
    "canada3.jpg",
    "canada4.jpg",
    "canada5.jpg",
];
var picture = 1;
var picture_log = 2;
function cycle()
{
    if(picture == 5)
    {
        picture = 0;
        picture_log = 1;
    }
    document.getElementById("images").src = images[picture];
    picture++;
    console.log("At Image #"+picture_log);
    picture_log++;
}