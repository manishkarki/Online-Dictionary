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

                if (jQuery.isEmptyObject(data)) {
                    console.log("NO DATA!");
                }
                var str = null;
                if (data.size() === 0) {
                    str = "Sorry,not found";
                } else {
                    str = '<h2>' + $('#term').val() + '</h2>';
                    str += '<ol>';
                    for (var i in data) {
                        console.log("data size" + data[i]);
                        var entries = data[i];
//                         str += '<dt>' + '</dt>';
                        str += '<li>' + "(" + entries.wordType + ")::" + entries.definition + '</li>';
                    }
                    str += '</ol>';
//                    str += '</dl>';
                }
                if (str === null)
                    str += "Sorry not found!";
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
//        console.log("here it comes");
        dictionary.sendToController();
    });
});