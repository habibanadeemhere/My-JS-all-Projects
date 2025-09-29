var percentage = prompt("Enter your Percentege to See your Grade : ")

if (percentage >= 40 && percentage <= 50 ) {
    alert("You are Fail!")
    document.write("<br><br><br><br><br><br><b>You Failed!</b> <img class = 'img2' src = 'https://static.wixstatic.com/media/678cf5_65ddbef7abc54278a4cf3d1b8ca862e9~mv2.png/v1/fill/w_980,h_978,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/678cf5_65ddbef7abc54278a4cf3d1b8ca862e9~mv2.png'></img><br><br><img class = 'img1' src = 'https://img.freepik.com/premium-vector/fail-gamer-girl-expressions-emotes-vector-illustration_162048-628.jpg'></img> " )

}

else if (percentage >= 51 && percentage <= 60) {
    alert("Your Grade is C")
    document.write("<br><br><br><br><br><br><b>Your Grade is C</b><br><br><img class = 'img3' src = 'https://img.freepik.com/premium-vector/stressed-girl-sits-table-with-crumpled-papers-writes-story-book-depressed-female_159757-1317.jpg'></img> " )

     


} else if (percentage > 60 && percentage <= 70) {
    alert("Your Grade is C+")
   document.write("<br><br><br><br><br><br><b>Your Grade is C+</b><br><br><img class = 'img3' src = 'https://thumbs.dreamstime.com/b/girl-holding-paper-sheet-grade-sitting-desk-c-idea-education-learning-sad-female-bad-isolated-flat-vector-137207418.jpg'></img> " )


} else if (percentage > 70 && percentage <= 80) {
    alert("Your Grade is B")
   document.write("<br><br><br><br><br><br><b>Your Grade is B</b><br><br><img class = 'img3' src = 'https://png.pngtree.com/png-vector/20230922/ourmid/pngtree-3d-cute-student-character-bring-a-grade-b-result-png-image_10144060.png'></img> " )

} else if (percentage >= 80 && percentage <= 90) {
    alert("Contragulations! Your Grade is A")
     document.write("<br><br><br><br><br><br><b class = 'b1'>Contragulations! Your Grade is A</b><br><br><img class = 'img3' src = 'https://thumbs.dreamstime.com/b/happy-student-showing-paper-grade-cartoon-64177644.jpg'></img> " )

} else if (percentage >= 90 && percentage <= 100) {
    alert("Contragulations! Your Grade is A+")
        document.write("<br><br><br><br><br><br><b class = 'b1'>Contragulations! Your Grade is A</b><br><br><img class = 'img3' src = 'https://spaces-cdn.clipsafari.com/yrlkyv5lhqpgnc1i48tx0xtljj2e'></img> " )
} else {
    alert("Invalid percentage!")
document.write("<br><br><br><br><br><br><b class = 'b'>Invalid Percentage</b><br><br><br><img class = 'img5' src = 'https://www.shutterstock.com/shutterstock/videos/1060063328/thumb/9.jpg?ip=x480'></img> " )

} 







