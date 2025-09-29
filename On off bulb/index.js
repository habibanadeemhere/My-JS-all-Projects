function changeimg(e) {
    console.log(e.target.src);
    e.target.src = 'onimg.png'
}


function resetimg(e) {
    e.target.src = 'offbulb.png'
}
