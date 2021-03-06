// Refer to jquery.html to answer these questions (but do not modify it).

$(document).ready(function(){
  ///// Question 1
  // Add the class "highlighted" to all quotes (<q> elements) within articles.

  $('#articles q').addClass('highlighted');

  ///// Question 2
  // Make the "Toggle Articles" link hide or show the content, and only the
  // content, of all articles.


  $('#toggle-articles').click(function() {
    $('.content').toggle('slow');
  });

  ///// Question 3
  // Make the "close" links in the alerts at the top of the page remove the
  // corresponding alert from the page entirely (don't just hide it).

  $('.dismiss-alert').click(function(event) {
    // debugger;
    $(this).closest('div').remove();
  });


  ///// Question 4
  // Make the comment form functional: Typing something into the input and
  // pressing Enter or clicking the Comment button should add a new list item to
  // the list of comments, containing that text.

  var addComment = function(event){
    var comment = $('.new-comment-text').val();
    $('.comments').append('<li class=\"comment\">' +
                          comment +
                          '</li>');
    $('.new-comment-text').val("");
    event.preventDefault();
  };

  $('.new-comment')
      .submit(addComment);

  ///// Question 5
  // Make it so clicking on a comment list item toggles the class "favorite" on
  // it, including comments that were added after the page loaded.

  var makeFavorites = function(event) {
    $(this).toggleClass('favorite');
    event.preventDefault();
  };

  $('.comments').on('click', 'li.comment', makeFavorites);
});
