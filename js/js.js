$(function(){
    $(window).load(function(){
        $(window).bind('scroll resize', function(){
            var $this = $(this);
            var $this_Top=$this.scrollTop();
            if($this_Top < 100){
                var top_bar = document.getElementById('top-bar');
                top_bar.style['background-color'] = '';
                top_bar.style['position'] = '';
            }
            if($this_Top > 100){
                var top_bar = document.getElementById('top-bar');
                top_bar.style['background-color'] = 'white';
                top_bar.style['position'] = 'fixed';
            }
        }).scroll();

        
    });
});

