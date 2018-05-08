$(document).ready(function () {
    let randomvariable = "Hello";

    // Built by LucyBot. www.lucybot.com

    $("#section").on("change", function (data) {

        $("header").addClass("header-active");
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

                let dataResults = data.results;

                // new array based on dataResults, filter out items in the array that don't have any images and trim the results to 12
                let filteredResults = dataResults.filter(function (index) {
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
    $(function () {
        $("#section").selectric();
    });


})
