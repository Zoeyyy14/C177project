let words = [
   { "input":5,
    "category":"Sports",
    "word":"Chess"
 },
 {
     "input":6,
     "category":"European Country Name",
     "word":"France"
 },
]
$(document).ready(function(){
displayWord()
})

$(function(){
    $(".input_field").keyup(function(){
        let id=$(this).attr("id")
        let input_number=id.split("_")[1]
        $(".rep_input").eq(input_number).html($(this).val())
    })
})
var gameOver=false

$(".clickable").click(function(){
    var correctGuess=false;
    let id=$(this).attr("id");
    var life=parseInt($("#life").text())
    for(var i=0;i<randomWord.word.length;i++){
        if (randomWord.word.charAt(i).toLowerCase()==id){
            if(life>0 && ($(".fill_blanks").eq(i).html()=="_" || $(".fill_blanks").eq(i).html()==id){
                $(".fill_blanks").eq(i).html(id);
                correctGuess=true;
                if($("#blanks").test()===randomWord.word.toLowerCase()){
                    $("result").text("You Win!!")
                    correctGuess=true;
                    gameOver=true
                }
            }
        }
    }
})
function displayWord(){
    const word=words[Math.floor(Math.random()*words.length)]

    $("#bank_word").empty()
    for(let i =0; i<story.words.length;i++){
        let html=`<button class="word_bank_button">${story.words[i]}</button>`
        $("#bank_words").append(html)
    }

    $("#input_fields").empty()
    for(let i =0; i<story.inputs;i++){
        let input_html=`<input type="text" class="input_field" id="input_${i}" placeholder="Input ${i+1}"/>`
        $("#input_fields").append(input_html)
    }

    $("#story_text").html(story.story)
}