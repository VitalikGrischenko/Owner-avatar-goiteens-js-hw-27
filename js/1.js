$(document).ready(function() {
    var currentIndex = 0;
    var $images = $(".image");
    var numImages = $images.length;

    function showImage(index) {
        $images.hide();
        $images.eq(index).show();
    }

    showImage(currentIndex);

    $(document).keydown(function(e) {
        if (e.keyCode === 37) {
            currentIndex = (currentIndex - 1 + numImages) % numImages;
            showImage(currentIndex);
        } else if (e.keyCode === 39) {
            currentIndex = (currentIndex + 1) % numImages;
            showImage(currentIndex);
        }
    });
});