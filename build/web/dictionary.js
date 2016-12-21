/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var dictionary = (function () {
    return{
        sendToController: function () {
            var input = $('#term').val();
            $.post('DictionaryController', {
                'word': input
            }, function (data) {
                var str;
                if (data.length === 0) {
                    console.log("here it comes");
//                    $("#meaning").has('ol').detach();
                    $("#meaning").html("Sorry! Couldn't find the meaning for the entered word");
                } else {
                    str = '<h2>' + $('#term').val() + '</h2>';
                    str += '<ol>';
                    for (var i in data) {

                        var entries = data[i];
//                         str += '<dt>' + '</dt>';
                        str += '<li>';
                        if (entries.wordType !== '') {
                            str += "(" + entries.wordType + ")::" + entries.definition + '</li>' + '\n';
                        } else {
                            str += "::" + entries.definition + '</li>' + '\n';
                        }
                    }
                    str += '</ol>';
//                    str += '</dl>';
                }

                $('#meaning').html(str);
                //console.log(str);
            },
                    'json'
                    );
        }
    };
})();


$(document).ready(function () {
    $("#lookup").click(function () {
        if (!$('#term').val()) {
            console.log("here in empty val");
            $('#meaning').html("No keys pressed, please enter some");
        } else {
            dictionary.sendToController();
        }
    });

    $(document).keypress(function (e) {
        if (e.which === 13) {
            if (!$('#term').val()) {
                $('#meaning').html("No keys or words entered, please enter some");
            } else {
                dictionary.sendToController();
            }
        }
    });
});