'use strict';

var tweetShortener = {
  wordSubstituter: function(sentence){
    var result = sentence;

    var substitutions = {
    'hello': 'hi',
    'to'   : '2',
    'two'  : '2',
    'too'  : '2',
    'for'  : '4',
    'four' : '4',
    'be'   : 'b',
    'you'  : 'u',
    'at'   : '@',
    'and'  : '&'
    };

    var keys = Object.keys(substitutions);
    var pattern = RegExp("\\b" + keys.join('\\b|\\b') + "\\b", "gi");

    return sentence.replace(pattern, function(match) {
      return substitutions[match.toLowerCase()];
    })
  },

  bulkShortener: function(tweets){
    return tweets.map(function(tweet) {
      return this.wordSubstituter(tweet);
    }, this)
  },

  selectiveShortener: function(sentence){
    if (sentence.length < 140) return sentence;

    return this.wordSubstituter(sentence);
  },

  shortenedTruncator: function(sentence){
    if (sentence.length < 140) return sentence;

    return sentence.slice(0, 137) + '...';
  },
};
