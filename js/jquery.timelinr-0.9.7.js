

// JQUERY PLUGIN
jQuery.fn.timelinr = function(options){
  // default plugin settings
  settings = jQuery.extend({
    orientation:              'horizontal', 
    containerDiv:             '#timeline',  
    datesDiv:                 '#dates',     
    datesSelectedClass:       'selected',  
    datesSpeed:               'normal',    
    issuesDiv:                '#issues',    
    issuesSelectedClass:      'selected',   
    issuesSpeed:              'fast',       
    issuesTransparency:       0.2,       
    issuesTransparencySpeed:  500,         
    prevButton:               '#prev',      
    nextButton:               '#next',     
    arrowKeys:                'false',      
    startAt:                  1,            
    autoPlay:                 'false',      
    autoPlayDirection:        'forward',    
    autoPlayPause:            2000        
  }, options);

  $(function(){
   
    if ($(settings.datesDiv).length > 0 && $(settings.issuesDiv).length > 0) {
      // setting variables... many of them
      var howManyDates = $(settings.datesDiv+' li').length;
      var howManyIssues = $(settings.issuesDiv+' li').length;
      var currentDate = $(settings.datesDiv).find('a.'+settings.datesSelectedClass);
      var currentIssue = $(settings.issuesDiv).find('li.'+settings.issuesSelectedClass);
      var widthContainer = $(settings.containerDiv).width();
      var heightContainer = $(settings.containerDiv).height();
      var widthIssues = $(settings.issuesDiv).width();
      var heightIssues = $(settings.issuesDiv).height();
      var widthIssue = $(settings.issuesDiv+' li').width();
      var heightIssue = $(settings.issuesDiv+' li').height();
      var widthDates = $(settings.datesDiv).width();
      var heightDates = $(settings.datesDiv).height();
      var widthDate = $(settings.datesDiv+' li').width();
      var heightDate = $(settings.datesDiv+' li').height();
      // set positions!
      if(settings.orientation == 'horizontal') {
        $(settings.issuesDiv).width(widthIssue*howManyIssues);
        $(settings.datesDiv).width(widthDate*howManyDates).css('marginLeft',widthContainer/2-widthDate/2);
        var defaultPositionDates = parseInt($(settings.datesDiv).css('marginLeft').substring(0,$(settings.datesDiv).css('marginLeft').indexOf('px')));
      } else if(settings.orientation == 'vertical') {
        $(settings.issuesDiv).height(heightIssue*howManyIssues);
        $(settings.datesDiv).height(heightDate*howManyDates).css('marginTop',heightContainer/2-heightDate/2);
        var defaultPositionDates = parseInt($(settings.datesDiv).css('marginTop').substring(0,$(settings.datesDiv).css('marginTop').indexOf('px')));
      }

      $(settings.datesDiv+' a').click(function(event){
        event.preventDefault();
        // first vars
        var whichIssue = $(this).text();
        var currentIndex = $(this).parent().prevAll().length;
        // moving the elements
        if(settings.orientation == 'horizontal') {
          $(settings.issuesDiv).animate({'marginLeft':-widthIssue*currentIndex},{queue:false, duration:settings.issuesSpeed});
        } else if(settings.orientation == 'vertical') {
          $(settings.issuesDiv).animate({'marginTop':-heightIssue*currentIndex},{queue:false, duration:settings.issuesSpeed});
        }
        $(settings.issuesDiv+' li').animate({'opacity':settings.issuesTransparency},{queue:false, duration:settings.issuesSpeed}).removeClass(settings.issuesSelectedClass).eq(currentIndex).addClass(settings.issuesSelectedClass).fadeTo(settings.issuesTransparencySpeed,1);
        
        if(howManyDates == 1) {
          $(settings.prevButton+','+settings.nextButton).fadeOut('fast');
        } else if(howManyDates == 2) {
          if($(settings.issuesDiv+' li:first-child').hasClass(settings.issuesSelectedClass)) {
            $(settings.prevButton).fadeOut('fast');
            $(settings.nextButton).fadeIn('fast');
          }
          else if($(settings.issuesDiv+' li:last-child').hasClass(settings.issuesSelectedClass)) {
            $(settings.nextButton).fadeOut('fast');
            $(settings.prevButton).fadeIn('fast');
          }
        } else {
          if( $(settings.issuesDiv+' li:first-child').hasClass(settings.issuesSelectedClass) ) {
            $(settings.nextButton).fadeIn('fast');
            $(settings.prevButton).fadeOut('fast');
          }
          else if( $(settings.issuesDiv+' li:last-child').hasClass(settings.issuesSelectedClass) ) {
            $(settings.prevButton).fadeIn('fast');
            $(settings.nextButton).fadeOut('fast');
          }
          else {
            $(settings.nextButton+','+settings.prevButton).fadeIn('slow');
          }
        }
        // now moving the dates
        $(settings.datesDiv+' a').removeClass(settings.datesSelectedClass);
        $(this).addClass(settings.datesSelectedClass);
        if(settings.orientation == 'horizontal') {
          $(settings.datesDiv).animate({'marginLeft':defaultPositionDates-(widthDate*currentIndex)},{queue:false, duration:'settings.datesSpeed'});
        } else if(settings.orientation == 'vertical') {
          $(settings.datesDiv).animate({'marginTop':defaultPositionDates-(heightDate*currentIndex)},{queue:false, duration:'settings.datesSpeed'});
        }
      });

      $(settings.nextButton).bind('click', function(event){
        event.preventDefault();
        // bugixed from 0.9.54: now the dates gets centered when there's too much dates.
        var currentIndex = $(settings.issuesDiv).find('li.'+settings.issuesSelectedClass).index();
        if(settings.orientation == 'horizontal') {
          var currentPositionIssues = parseInt($(settings.issuesDiv).css('marginLeft').substring(0,$(settings.issuesDiv).css('marginLeft').indexOf('px')));
          var currentIssueIndex = currentPositionIssues/widthIssue;
          var currentPositionDates = parseInt($(settings.datesDiv).css('marginLeft').substring(0,$(settings.datesDiv).css('marginLeft').indexOf('px')));
          var currentIssueDate = currentPositionDates-widthDate;
          if(currentPositionIssues <= -(widthIssue*howManyIssues-(widthIssue))) {
            $(settings.issuesDiv).stop();
            $(settings.datesDiv+' li:last-child a').click();
          } else {
            if (!$(settings.issuesDiv).is(':animated')) {
              // bugixed from 0.9.52: now the dates gets centered when there's too much dates.
              $(settings.datesDiv+' li').eq(currentIndex+1).find('a').trigger('click');
            }
          }
        } else if(settings.orientation == 'vertical') {
          var currentPositionIssues = parseInt($(settings.issuesDiv).css('marginTop').substring(0,$(settings.issuesDiv).css('marginTop').indexOf('px')));
          var currentIssueIndex = currentPositionIssues/heightIssue;
          var currentPositionDates = parseInt($(settings.datesDiv).css('marginTop').substring(0,$(settings.datesDiv).css('marginTop').indexOf('px')));
          var currentIssueDate = currentPositionDates-heightDate;
          if(currentPositionIssues <= -(heightIssue*howManyIssues-(heightIssue))) {
            $(settings.issuesDiv).stop();
            $(settings.datesDiv+' li:last-child a').click();
          } else {
            if (!$(settings.issuesDiv).is(':animated')) {
              // bugixed from 0.9.54: now the dates gets centered when there's too much dates.
              $(settings.datesDiv+' li').eq(currentIndex+1).find('a').trigger('click');
            }
          }
        }
        // prev/next buttons now disappears on first/last issue | bugfix from 0.9.51: lower than 1 issue hide the arrows
        if(howManyDates == 1) {
          $(settings.prevButton+','+settings.nextButton).fadeOut('fast');
        } else if(howManyDates == 2) {
          if($(settings.issuesDiv+' li:first-child').hasClass(settings.issuesSelectedClass)) {
            $(settings.prevButton).fadeOut('fast');
            $(settings.nextButton).fadeIn('fast');
          }
          else if($(settings.issuesDiv+' li:last-child').hasClass(settings.issuesSelectedClass)) {
            $(settings.nextButton).fadeOut('fast');
            $(settings.prevButton).fadeIn('fast');
          }
        } else {
          if( $(settings.issuesDiv+' li:first-child').hasClass(settings.issuesSelectedClass) ) {
            $(settings.prevButton).fadeOut('fast');
          }
          else if( $(settings.issuesDiv+' li:last-child').hasClass(settings.issuesSelectedClass) ) {
            $(settings.nextButton).fadeOut('fast');
          }
          else {
            $(settings.nextButton+','+settings.prevButton).fadeIn('slow');
          }
        }
      });

      $(settings.prevButton).click(function(event){
        event.preventDefault();
        // bugixed from 0.9.54: now the dates gets centered when there's too much dates.
        var currentIndex = $(settings.issuesDiv).find('li.'+settings.issuesSelectedClass).index();
        if(settings.orientation == 'horizontal') {
          var currentPositionIssues = parseInt($(settings.issuesDiv).css('marginLeft').substring(0,$(settings.issuesDiv).css('marginLeft').indexOf('px')));
          var currentIssueIndex = currentPositionIssues/widthIssue;
          var currentPositionDates = parseInt($(settings.datesDiv).css('marginLeft').substring(0,$(settings.datesDiv).css('marginLeft').indexOf('px')));
          var currentIssueDate = currentPositionDates+widthDate;
          if(currentPositionIssues >= 0) {
            $(settings.issuesDiv).stop();
            $(settings.datesDiv+' li:first-child a').click();
          } else {
            if (!$(settings.issuesDiv).is(':animated')) {
              // bugixed from 0.9.54: now the dates gets centered when there's too much dates.
              $(settings.datesDiv+' li').eq(currentIndex-1).find('a').trigger('click');
            }
          }
        } else if(settings.orientation == 'vertical') {
          var currentPositionIssues = parseInt($(settings.issuesDiv).css('marginTop').substring(0,$(settings.issuesDiv).css('marginTop').indexOf('px')));
          var currentIssueIndex = currentPositionIssues/heightIssue;
          var currentPositionDates = parseInt($(settings.datesDiv).css('marginTop').substring(0,$(settings.datesDiv).css('marginTop').indexOf('px')));
          var currentIssueDate = currentPositionDates+heightDate;
          if(currentPositionIssues >= 0) {
            $(settings.issuesDiv).stop();
            $(settings.datesDiv+' li:first-child a').click();
          } else {
            if (!$(settings.issuesDiv).is(':animated')) {
              // bugixed from 0.9.54: now the dates gets centered when there's too much dates.
              $(settings.datesDiv+' li').eq(currentIndex-1).find('a').trigger('click');
            }
          }
        }
        // prev/next buttons now disappears on first/last issue | bugfix from 0.9.51: lower than 1 issue hide the arrows
        if(howManyDates == 1) {
          $(settings.prevButton+','+settings.nextButton).fadeOut('fast');
        } else if(howManyDates == 2) {
          if($(settings.issuesDiv+' li:first-child').hasClass(settings.issuesSelectedClass)) {
            $(settings.prevButton).fadeOut('fast');
            $(settings.nextButton).fadeIn('fast');
          }
          else if($(settings.issuesDiv+' li:last-child').hasClass(settings.issuesSelectedClass)) {
            $(settings.nextButton).fadeOut('fast');
            $(settings.prevButton).fadeIn('fast');
          }
        } else {
          if( $(settings.issuesDiv+' li:first-child').hasClass(settings.issuesSelectedClass) ) {
            $(settings.prevButton).fadeOut('fast');
          }
          else if( $(settings.issuesDiv+' li:last-child').hasClass(settings.issuesSelectedClass) ) {
            $(settings.nextButton).fadeOut('fast');
          }
          else {
            $(settings.nextButton+','+settings.prevButton).fadeIn('slow');
          }
        }
      });
      // keyboard navigation, added since 0.9.1
      if(settings.arrowKeys=='true') {
        if(settings.orientation=='horizontal') {
          $(document).keydown(function(event){
            if (event.keyCode == 39) {
                 $(settings.nextButton).click();
              }
            if (event.keyCode == 37) {
                 $(settings.prevButton).click();
              }
          });
        } else if(settings.orientation=='vertical') {
          $(document).keydown(function(event){
            if (event.keyCode == 40) {
                 $(settings.nextButton).click();
              }
            if (event.keyCode == 38) {
                 $(settings.prevButton).click();
              }
          });
        }
      }
      // default position startAt, added since 0.9.3
      $(settings.datesDiv+' li').eq(settings.startAt-1).find('a').trigger('click');
      // autoPlay, added since 0.9.4
      if(settings.autoPlay == 'true') {
        // set default timer
        var timer = setInterval(autoPlay, settings.autoPlayPause);
        // pause autoplay on hover
        $(settings.containerDiv).hover(function(ev){
          clearInterval(timer);
        }, function(ev){
          // start again timer on mouse out
          timer = setInterval(autoPlay, settings.autoPlayPause);
        });
        
      }
    }
  });
}

// autoPlay, added since 0.9.4
function autoPlay(){
  var currentDate = $(settings.datesDiv).find('a.'+settings.datesSelectedClass);
  if(settings.autoPlayDirection == 'forward') {
    if(currentDate.parent().is('li:last-child')) {
      $(settings.datesDiv+' li:first-child').find('a').trigger('click');
    } else {
      currentDate.parent().next().find('a').trigger('click');
    }
  } else if(settings.autoPlayDirection == 'backward') {
    if(currentDate.parent().is('li:first-child')) {
      $(settings.datesDiv+' li:last-child').find('a').trigger('click');
    } else {
      currentDate.parent().prev().find('a').trigger('click');
    }
  }
}
