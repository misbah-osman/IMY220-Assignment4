$(document).ready(function() {
    $(".submit").on("click", function() {
        
        var message = $("#message").val();
       
        if (message.trim() !== "") {
            var newDiv = $("<div>").addClass("col-4 offset-4 rounded-bottom mb-3");

            if ($(this).attr("id") === "left") {
                newDiv.css("background-color", "lightblue");
            } else {
                newDiv.css("background-color", "lightgreen");
            }

            newDiv.text(message);

            if (message.match(/https?:\/\/(www\.)?youtube\.com\/watch\?v=[A-Za-z0-9_-]+/)) {
                var videoId = getVideoId(message);
                var iframe = $("<iframe></iframe>",{
                    "width": "100%",
                    "height": "315",
                    "src": "https://www.youtube.com/embed/" + videoId,
                    "frameborder": "0",
                    "allowfullscreen": "true"
                });
                newDiv.append(iframe);
            }

            $(".messages").append(newDiv);

            $("#message").val("");
        }
    });

    function getVideoId(link) {

        var ID = link.match((/[?&]v=([A-Za-z0-9_-]+)/)
        );

        if (ID[1] && ID) {
            return ID[1];
        } 
    }

});
