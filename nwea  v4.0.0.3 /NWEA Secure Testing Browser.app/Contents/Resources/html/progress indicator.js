/*
Progress indicator by Hawkman. http://www.phantomgorilla.com/
based on  Apple's NSProgressIndicator in OS X. http://www.apple.com/
tested in Safari 2.0.3, FireFox (Mac) 1.0.7, IE:Mac.
*/

/* This is all the javascript you'll need. Either reference this or incorporate it into your own javascript files. You'll also need the included "progress indicator.css" (again, referenced or incorporated into your files), and "progress indicator.html" (incorporated into your html file). I'd appreciate it if you leave my name at the top of the section, but there's no compulsion; this is free code! */


// Global variables, to be accessed from multiple functions
var progressIndicatorImages;
var index = 0;
var progressIndicatorTimer;
var progressIndicatorIdentity;


// If you're running this on the web, you may want to un-comment-out these next
// two lines; they run the image loader script when the page loads, so that they
// get cached and there's no delay when the spinner starts while we wait for
// them. If they're stored locally, the loading is speedy enough already.
// loadProgressIndicatorImages('large');
// loadProgressIndicatorImages('small');


// Loads the images to be used in the progress indicator, and stores them in an
// array for easy access. We could contruct a method to call them later
// during animateProgressIndicator() instead, but this way we also load them
// before we actually need them, which prevents image flickering.
// 2 birds + 1 stone = :)
function loadProgressIndicatorImages(size)
{
    // set up the array to hold the images (12 of them, 0-11)
    progressIndicatorImages = new Array(12);
    // start a "for" loop, incrementing values of i between 0 and 11, to save
    // us some writing!
    for (var i=0;i < 12; i++)
    {
        // make a new image in progressIndicatorImages, the position of which
        // is determined by i (which increments by 1 each time, remember)
        progressIndicatorImages[i] = new Image();
        // set the source based on the value of i, generating references of the
        // type "images/indicator_small_3.png", for instance.
        // If you change the image names or locations you'll have to alter this
        // section accordingly.
        progressIndicatorImages[i].src = "images/indicator_"+size+"_"+(i)+".png";
    }
}


// Call this function to start the progress indicator spinning. It calls the
// function to load the images, and calls another function at intervals (to
// change the image). Allows passing of a size attribute, either "large" or
// "small", and the id of an image to use. eg. calling
// startProgressIndicator("small", "image_id"). Default values are "large" and
// "progress_indicator".
function startProgressIndicator(size, id)
{
    // checks for an id (which should have been passed when the function is
    // called) and if none is found, an arbitrary one of "progress_indicator"
    // is set
    if (!id)
    {   id = "progress_indicator";   }
    // passes it to a global variable, so that startProgressIndicator can use it
    progressIndicatorIdentity = id;
    // checks for a size (again, should have been passed), and assigns "large"
    // if none is found
    if (!size)
    {   size = "large";   }
    // calls the loadProgressIndicatorImages() function above
    // must also pass a size of indicator to use, "large" or "small"
    loadProgressIndicatorImages(size);
    // calls animateProgressIndicator() at intervals of 42 milliseconds
    // - that works out at 2 cycles/second, which is what Apple use in
    // NSProgressIndicator
    progressIndicatorTimer = setInterval('animateProgressIndicator()', 42);
}


// Call this function to stop the indicator. It clears the timer, hides it again
// and resets it to the start position
function stopProgressIndicator()
{
    // clears the timer
	clearInterval(progressIndicatorTimer);
	// sets the timer to null, to provide an easy way of checking whether the
	// timer is running or not, ie.:
	// if (progressIndicatorTimer==null) :: timer is not running
	// if (progressIndicatorTimer!=null) :: timer is running
	// Useful if you want the same action to start/stop the indicator, just call
	// an intermediate function which checks the value of the timer
    progressIndicatorTimer=null;
    // hides the indicator
    document.getElementById(progressIndicatorIdentity).style.display = "none";
    // resets the index global variable (it's not 0, despite our definition
    // above, because animateProgressIndicator() has been messing with it), so
    // the animation will start from the top next time as expected
    index=0;
    // reset the global variable, just in case
    progressIndicatorIdentity = null;
}


// This function does the actual animation, swapping the images in the indicator
// when it's called at intervals by startProgressIndicator(). No need to call
// this directly, it won't work in the same way.
function animateProgressIndicator()
{
    // change the source of the indicator image to another of those held in the
    // progressIndicatorImages array (determined by the current value of index)
    document.getElementById(progressIndicatorIdentity).src = progressIndicatorImages[index].src;
    // set the indicator to block display (the CSS has it hidden to start with).
    // We call it here after the first image has been shown, because it saves us
    // a line explicitly resetting the indicator to the start position in
    // stopProgressIndicator(), as well as making it immaterial whether we call
    // the same size indicator each time
    document.getElementById(progressIndicatorIdentity).style.display = "block";
    // if index is 11 - the last image - change it to 0, to start another cycle
    if (index==11)
    { index=0 }
    // otherwise, increment it by 1, so that the next image in sequence is shown
    // next time animateProgressIndicator() is called (in 42 milliseonds' time!)
    else
    { index=index+1 }
}