$(document).ready(function () {

    // Built by LucyBot. www.lucybot.com

    $("#section").on("change", function (data) {

        $("header").addClass("header-active");



        // if (screen.width > 599) {
        //     $("header").css({ "height": "150px" });
        //     $(".contents").css({ "height": "150px" })
        //     $(".ny-logo").css({ "transform": "scale(0.4)" })
        // }
        // else if (screen.width > 1000) {
        //     $(".contents").css({ "transform": "scale(0.5)", "height": "200px", })
        // }

        // ==============   =======
        // else {


        // $("header").css({ "transform": "scale(0.7)", "height": "350px", })


        // }


        $("#loader").show();
        $("#news li").remove();


        var selected = $("#section").val();

        var url = "https://api.nytimes.com/svc/topstories/v2/" + selected + ".json";
        url += '?' + $.param({
            'api-key': "64cca612ef9b4f8cb1bd909039043090"
        });

        $.ajax({
            url: url,
            method: 'GET',
            dataType: 'json'
        })
            .done(function (data) {

                var dataResults = data.results;

                // new array based on dataResults, filter out items in the array that don't have any images and trim the results to 12
                var filteredResults = dataResults.filter(function (index) {
                    return index.multimedia.length;
                }).slice(0, 12);

                $.each(filteredResults, function (index, value) {


                    var filteredImage = value.multimedia[4].url;
                    var filteredAbstract = value.abstract;
                    var filterdLink = value.url;




                    $("#news").append("<li> <a href=" + [filterdLink] + "> <div class='newsbox' id='newssquare" + index + "' style='background-image: url(" + filteredImage + ")'></div> </a> </li>");
                    $("#newssquare" + index).append("<p class='abstract'> " + [filteredAbstract] + " </p>");

                    $("#loader").hide();

                });







            });


    })
    // .fail(function (err) {
    //     throw err;
    // });

})















// // loop through the filtere array
// for (var index = 0; index < filteredResults.length; index++) {

//     // console.log(filteredImage);
//     // var articleImage = dataResults[index].multimedia[4].url;
//     // console.log(articleImage);
//     console.log(filteredResults[index].multimedia[4].url);
// }


