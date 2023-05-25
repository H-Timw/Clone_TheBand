/* Take picture wanna show by: 
const nameOfSlideShow = document.getElementsByClassName("classOfPicture");
    Next use
document.addEventListener("load", slideShow(nameOfSlideShow,time_delay));
    to run slide show
*/
const slideShow_1 = document.getElementsByClassName("slide_1");
function waitforme(millisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, millisec);
    })
}
async function slideShow(_slideShow,time_delay)
{
    const slides = _slideShow;
    for(let i = 1; i < slides.length; i++)
    {
        await waitforme(time_delay);
        if(i==0)
        {
            slides[i].style.display = "block";
            slides[slides.length-1].style.display = "none";
        }
        else
        {
            slides[i].style.display = "block";
            slides[i-1].style.display = "none";
            if(i==(slides.length -1)) i=-1;     
        } 
    }      
}
document.addEventListener("load", slideShow(slideShow_1,3000));