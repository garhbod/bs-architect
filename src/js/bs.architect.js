(function($){
    $(document).ready(function($){
        $(window).on("resize", function () {
            var archDtect = $('<div id="arch-d-tect"></div>');
            $('body').append(archDtect);
            var xs = archDtect.css("width") === "0px";
            var sm = archDtect.css("width") === "768px";
            var md = archDtect.css("width") === "992px";
            var lg = archDtect.css("width") === "1200px";
            var size = (lg ? "lg" : md ? "md" : sm ? "sm" : "xs");
            var count = 0;
            $(".arch-wrap-fix").children().each(function() {
                $( this ).removeClass('arch-clear-both');
                var applied, current_xs = false, current_sm = false, current_md = false, current_lg = false;
                var splitClassName = $( this ).attr('class').split(/\s+/);
                for (var j in splitClassName) {
                    var className = splitClassName[j];
                    if (className.indexOf("col-lg-") > -1) {
                        current_lg = parseInt(className.replace("col-lg-", ""), 10);
                    }
                    else if (className.indexOf("col-md-") > -1) {
                        current_md = parseInt(className.replace("col-md-", ""), 10);
                    }
                    else if (className.indexOf("col-sm-") > -1) {
                        current_sm = parseInt(className.replace("col-sm-", ""), 10);
                    }
                    else {
                        current_xs = parseInt(className.replace("col-lg-", ""), 10);
                    }
                }
                if (size === "lg") {
                    applied = current_lg ? current_lg : current_md ? current_md : current_sm ? current_sm : current_xs ? current_xs : 12 ;
                    count += applied;
                }
                if (size === "md") {
                    applied = current_md ? current_md : current_sm ? current_sm : current_xs ? current_xs : 12 ;
                    count += applied;
                }
                if (size === "sm") {
                    applied = current_sm ? current_sm : current_xs ? current_xs : 12 ;
                    count += applied;
                }
                if (size === "xs") {
                    applied = current_xs ? current_xs : 12 ;
                    count += applied;
                }
                if (count > 12) { $( this ).addClass('arch-clear-both'); count = applied; }
            });
            archDtect.remove();
        }).resize();
    });
})(jQuery);