// Question 1
// Write a statement that will turn the comments blue
    // <ul class="comments">
    //   <li class="comment">Here is one comment</li>
    //   <li class="comment">And here is another</li>
    // </ul>

// Question 2
// What generates the DOM??



// Question 3
// What does JavaScript do that Ruby On Rails can't do?


// Question 4
// Write block of code that will create a Cat
// and give it a name. Then display that cat's name
// in the console.


// Question 5
// Given the following piece of code, why won't it work

$(document).ready(function() {
 var addComment = function(event){
    var comment = $('.new-comment-text').val();
    $('.comments').append('<li class=\"comment\">' +
                          comment +
                          '</li>');
    $('.new-comment-text').val("");
    event.preventDefault();
  };

  $('.new-comment')
      .submit(addComment());
});
