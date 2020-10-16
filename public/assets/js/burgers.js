$(function () {
    $(".change-eaten").on("click", function (event) {
        var id = $(this).data("id");
        var newSleep = $(this).data("iseaten");

        var newEatenState = {
            eaten: isEaten
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBuger = {
            name: $("#ca").val().trim(),
            eaten: $("[name=eaten]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function (event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                location.reload();
            }
        );
    });
});