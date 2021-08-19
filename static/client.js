window.onload = function() {
    setTimeout(() => {
        $("#loading").fadeOut(500, function() {
            $("#bgv").trigger("play");
        });
    }, 1000)
    updateTime();
    setInterval(updateTime, 10000)
    function updateTime() {
        let date = new Date();
        let time = `${date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`;
        let fullDate = `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}-${((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1))}-${date.getFullYear()}`;
        $("#time").html(`${time}<br>${fullDate}`);
    };
    $("#taskbar").on("click", (e) => {
        if($(".startmenu").css("bottom") == "56px") 
                return $(".startmenu").css("bottom", "-40rem");
    })
    $("#start").on("click", (e) => {
        $(".startmenu").css("bottom") == "56px" ? 
        $(".startmenu").css("bottom", "-40rem") : 
        $(".startmenu").css("bottom", "3.5rem");
    });
}