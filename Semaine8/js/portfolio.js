    $(function () {
        
        var filterList = {
        
            init: function () {
            
                // Plugin Mixitup, qui permet de filtrer les vignettes par catégorie
                $('#portfoliolist').mixitup({
                    targetSelector: '.portfolio',
                    filterSelector: '.filter',
                    effects: ['fade'],
                    easing: 'snap',
                    // call the hover effect
                    onMixEnd: filterList.hoverEffect()
                });             
            
            },
            
            hoverEffect: function () {
            
                // Fonction pour l'effet "hover"
                $('#portfoliolist .portfolio').hover(
                    function () {
                        $(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
                        $(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');             
                    },
                    function () {
                        $(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
                        $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');                               
                    }       
                );              
            
            }
        };
        
        // Lance les deux fonctions "hover" et "filtre"
        filterList.init();
        
        
    }); 
    