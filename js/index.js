var url = "index.xml";

$.get(url).done(function(result){
    var ret = $('item', result);
    console.log(ret);

    for( var i = 0; i < 3 ; ++i ) {
        var item = ret[i];
        var $card = $("#col" + ( i + 1 ));
        $card.find( ".card-img-top" ).attr("src" , $('enclosure', item).attr("url") )
        $card.find( ".card-title" ).text( $('title', item).text() )
    }
}).fail(function(result){

});