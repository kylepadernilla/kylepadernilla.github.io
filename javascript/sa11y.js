var Sa11y = new Sa11y();
function Sa11y() {
/* When checked, save to LocalStorage. Keeps checker active when navigating between pages until it is toggled off.
Added setTimeout function to (unscientifically) give a little time to load any other content or slow post-rendered JS, iFrames, etc. */

$(function() {

    //Bind enter key to checkbox.
    $('#sa11y-checkbox').keydown(function(ev){
      if(ev.keyCode == 13) $(ev.target).click();
    })

    var data = localStorage.getItem("start-sa11y");
    if (data !== null) {
            $("input[name='start-sa11y']").prop('checked', true);
            $(".sa11y-main-toggle-style").addClass("loading-spinner");
                    setTimeout(function() {
                        Sa11y.checkAll();
                    },1200);
                }
        $("input[name='start-sa11y']").change(function () {
                if ($(this).is(":checked")) {
                    localStorage.setItem("start-sa11y", $(this).val());
                    Sa11y.checkAll();
                } else {
                    localStorage.removeItem("start-sa11y");
                    Sa11y.checkAll();
                }
    });
});

/* Templated SVG icons from FontAwesome 5 for better cross-browser support and minimize conflicting libraries. */
var MainToggleIcon = "<svg role='img' focusable='false' width='35px' height='35px' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='#ffffff' d='M256 48c114.953 0 208 93.029 208 208 0 114.953-93.029 208-208 208-114.953 0-208-93.029-208-208 0-114.953 93.029-208 208-208m0-40C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 56C149.961 64 64 149.961 64 256s85.961 192 192 192 192-85.961 192-192S362.039 64 256 64zm0 44c19.882 0 36 16.118 36 36s-16.118 36-36 36-36-16.118-36-36 16.118-36 36-36zm117.741 98.023c-28.712 6.779-55.511 12.748-82.14 15.807.851 101.023 12.306 123.052 25.037 155.621 3.617 9.26-.957 19.698-10.217 23.315-9.261 3.617-19.699-.957-23.316-10.217-8.705-22.308-17.086-40.636-22.261-78.549h-9.686c-5.167 37.851-13.534 56.208-22.262 78.549-3.615 9.255-14.05 13.836-23.315 10.217-9.26-3.617-13.834-14.056-10.217-23.315 12.713-32.541 24.185-54.541 25.037-155.621-26.629-3.058-53.428-9.027-82.141-15.807-8.6-2.031-13.926-10.648-11.895-19.249s10.647-13.926 19.249-11.895c96.686 22.829 124.283 22.783 220.775 0 8.599-2.03 17.218 3.294 19.249 11.895 2.029 8.601-3.297 17.219-11.897 19.249z'/></svg>",
ErrorIcon = "<svg xmlns='http://www.w3.org/2000/svg' role='img' focusable='false' aria-hidden='true' viewBox='0 0 576 576' width='24px' height='24px'><path fill='#ffffff' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'></path></svg><span class='sr-only'>Error</span>",
PassIcon = "<svg xmlns='http://www.w3.org/2000/svg' role='img' focusable='false' aria-hidden='true' viewBox='0 0 512 512' width='24px' height='24px'><path fill='#ffffff' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/></svg><span class='sr-only'>Pass</span>",
WarningIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='28px' height='28px' role='img' focusable='false' aria-hidden='true' viewBox='0 0 512 512'><path fill='#505050' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z'/></svg><span class='sr-only'>Warning</span>",
PanelCheckIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24px' height='24px' role='img' focusable='false' aria-hidden='true' viewBox='0 0 512 512' ><path fill='#359E56' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/></svg>",
PanelWarningIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24px' height='24px' role='img' focusable='false' aria-hidden='true' viewBox='0 0 512 512'><path fill='#d39c00' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z'/></svg>",
PanelErrorIcon = "<svg xmlns='http://www.w3.org/2000/svg' role='img' focusable='false' aria-hidden='true' viewBox='0 0 576 512' width='24px' height='24px'><path fill='#d30017' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'></path></svg>",
CloseIcon = "<svg width='20px' height='20px' xmlns='http://www.w3.org/2000/svg' role='img' focusable='false' aria-hidden='true' viewBox='0 0 352 512'><path fill='#4d4d4d' d='M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z'/></svg><span class='sr-only'>Close Popup</span>"

    // States of the outlines, used to toggle the outlines.
    this.showingHeaders = false;
    this.showingLinkText = false;
    this.showingAltText = false;
    this.showingQA = false;

    // Sets working document to current page document object.
    this.workingDoc = document;

    // Sets the working document to an iframe
    this.setDocument = function (iframeID) {
        var iframe = document.getElementById(iframeID);
        this.workingDoc = iframe.contentDocument || iframe.contentWindow.document;
    };


    // Create a floating button and hidden divs that contain success/warning message.
    var sa11ycontainer = document.createElement("div");
    sa11ycontainer.setAttribute("id", "sa11y-container");
    //Main button uses checkbox input to pass value for localstorage.
    sa11ycontainer.innerHTML = "<label class='sa11y-main-toggle-style' for='sa11y-checkbox'>"+MainToggleIcon+"<span class='sr-only'>Check Accessibility</span></label><input class='sa11y-hide-native-checkbox' id='sa11y-checkbox' type='checkbox' name='start-sa11y'>"

         + "<div id='sa11y-panel' class='sa11y-panel'>"

                + "<div id='sa11y-page-outline' class='sa11y-outline-header'><span id='page-outline-header' class='sa11y-bold'>Page outline</span><ul id='sa11y-outline-list' tabindex='-1' aria-labelledby='page-outline-header'></ul></div>"

    			+ "<div id='sa11y-no-errors' role='alert' class='sa11y-panel-header'><div class='sa11y-th-img'>"+PanelCheckIcon+"</div><div class='sa11y-td-msg'>No accessibility errors found!</div></div>"

    			+ "<div id='sa11y-warnings' role='alert' class='sa11y-panel-header'><div class='sa11y-th-img'>"+PanelWarningIcon+"</div><div class='sa11y-td-msg'>No accessibility errors found, but please check warnings!</div></div>"

                + "<div id='sa11y-errors-found' role='alert' class='sa11y-panel-header'><div class='sa11y-th-img'>"+PanelErrorIcon+"</div><div class='sa11y-td-msg'>Accessibility errors found!<br><a href='https://www.ryerson.ca/websupport/seo-accessibility/' target='_blank'>Need help?</a></div></div>"

                + "<button type='button' aria-expanded='false' id='sa11y-summary-toggle'>Show Outline</button>"

            +"</div>";

    $('body').prepend(sa11ycontainer);

    // State of errors on page. Used to toggle pass message.
    this.noErrors = true;
    this.anyWarning = false;
    this.panelActive = false;

    // Toggles the outline of all headers, link texts, and images.
    this.checkAll = function () {
    	this.checkHeaders();
        this.checkLinkText();
        this.checkAltText();
        this.checkQA();

        if (this.panelActive) {
        	Sa11y.reset();
        	this.panelActive = false;
        } else {
        	this.displayPanel();
        	this.panelActive = true;
        }
    };

    $("#sa11y-summary-toggle").click(function() {
      $(this).toggleClass("sa11y-btn-active");
      $("#sa11y-page-outline").toggleClass("sa11y-active");
      $(this).text(function(i, v){
               return v === 'Show Outline' ? 'Hide Outline' : 'Show Outline'
            });
      $(this).attr('aria-expanded', function (i, attr) {
            return attr == 'true' ? 'false' : 'true'
        });
      $("#sa11y-outline-list").focus();
    });

    this.displayPanel = function () {
        if (this.noErrors) {
        	$("#sa11y-panel").addClass("sa11y-active");
            $("#sa11y-summary-toggle").addClass("sa11y-active");
            $(".sa11y-main-toggle-style").addClass("sa11y-toggle-active");

			// Display a warning message if only warnings are found.
			if(this.anyWarning) {
				$("#sa11y-no-errors").removeClass("sa11y-active");
				$("#sa11y-warnings").addClass("sa11y-active");
                $(".sa11y-main-toggle-style").addClass("sa11y-toggle-active");
			}

			// Display success message.
			else if (!this.anyWarning) {
				$("#sa11y-warnings").removeClass("sa11y-active");
				$("#sa11y-no-errors").addClass("sa11y-active");
                $(".sa11y-main-toggle-style").addClass("sa11y-toggle-active");
			}

            else {
				$("#sa11y-warnings").removeClass("sa11y-active");
				$("#sa11y-no-errors").removeClass("sa11y-active");
			}

			$("#allytogglebtn").click(function(event) {
				event.stopPropagation();
			});

        } else {
            $("#sa11y-panel").addClass("sa11y-active");
            $("#sa11y-summary-toggle").addClass("sa11y-active");
            $("#sa11y-errors-found").addClass("sa11y-active");
            $("#sa11y-no-errors").removeClass("sa11y-active");
            $("#sa11y-warnings").removeClass("sa11y-active");
            $(".sa11y-main-toggle-style").addClass("sa11y-toggle-active");
        }
    }

    // Resets all changes made by the tool. Removing outlines and additional spans.
    this.reset = function () {
        this.clearEverything();
        this.showingAltText = false;
        this.showingHeaders = false;
        this.showingLinkText = false;
        this.showingQA = false;
        this.noErrors = true; //Reset page to "no errors" instead of refreshing page.
        this.anyWarning = false;
    };

    this.clearEverything = function() {
       var $body = $(this.workingDoc.getElementsByTagName("body"));

        //Remove error outlines
        $body.find(".sa11y-text-warning").removeClass("sa11y-text-warning");
        $body.find(".sa11y-uppercase-warning").contents().unwrap();
        $body.find(".sa11y-error-border").removeClass("sa11y-error-border");
        $body.find(".sa11y-warning-border").removeClass("sa11y-warning-border");
        $body.find(".sa11y-headings-fail").removeClass("sa11y-headings-fail");
        $body.find(".sa11y-link-text-fail").removeClass("sa11y-link-text-fail");

        //Remove buttons
        $body.find(".sa11y-error-btn").remove();
        $body.find(".sa11y-error-text-btn").remove();
        $body.find(".sa11y-link-warning-btn").remove();
        $body.find(".sa11y-warning-btn").remove();
        $body.find(".sa11y-pass-btn").remove();

        //Remove panels
        $body.find(".sa11y-error-message").remove();
        $body.find(".sa11y-pass-message").remove();
        $body.find(".sa11y-warning-message").remove();
        $body.find("#sa11y-panel").removeClass("sa11y-active");
        $body.find("#sa11y-summary-toggle").removeClass("sa11y-active");
        $body.find(".sa11y-popover").remove();
        $body.find("#sa11y-outline-list li").remove();
        $body.find(".sa11y-main-toggle-style").removeClass("allytogglefocus");
        $body.find(".sa11y-main-toggle-style").removeClass("sa11y-toggle-active");
        $body.find("#sa11y-errors-found").removeClass("sa11y-active");
        $body.find("#sa11y-no-errors").removeClass("sa11y-active");
        $body.find("#sa11y-warnings").removeClass("sa11y-active");
   }

/*================== HEADING STRUCTURE MODULE ===================*/

    this.checkHeaders = function () {
        if (this.showingHeaders) {
            this.clearEverything();
            this.showingHeaders = false;
        } else {
            this.outlineHeaders();
            this.showingHeaders = true;
        }
    };

    this.outlineHeaders = function () {

        // Fetch all headers from the working document.
        let $headings = $(this.workingDoc.querySelectorAll("h1, h2, h3, h4, h5, h6"));
        let prevLevel;

        // Test each header level for accessibility issues.
        $headings.each((i, el) => {
            let $el = $(el);
            let level = +$el.prop("tagName").slice(1);
            let error = null;
            let headingLength = $el.text().trim().length;

            // Tests 4 cases of inaccesibility.
            if (i === 0 && level !== 1) {
                error = "First heading on page is not a Heading 1. Heading 1 should be the start of the main content section, and is the main heading that describes the overall purpose of the page.";
            } else if (i !== 0 & level === 1) {
                error = "There must only be one Heading 1 per page. Heading 1 is the main heading that describes the overall purpose of the page.";
            } else if (prevLevel && level - prevLevel > 1) {
                error = "Non-consecutive heading level used. Headings should never skip levels, or go from <strong>Heading "+prevLevel+"</strong> to <span class='sa11y-red-text sa11y-bold'>Heading "+level+".</span>";
            } else if ($el.text().trim().length < 1) {
                error = "Empty heading found! Please remove empty heading from text component. This may have been caused from pressing the Enter key after creating a heading.";
                $el.addClass("sa11y-link-text-fail");
            } else if ($el.text().trim().length > 130) {
                error = "Heading is too long! Headings are used to organize content and convey structure. They should be brief, clear, informative and unique. Please keep headings less than 130 characters (no more than a sentence).<hr aria-hidden='true'>Character count: <span class='sa11y-bold sa11y-red-text'>"+headingLength+"</span>"
            }

            prevLevel = level;

            //If the heading error is within a hyperlink, make sure to append button after anchor tag.
            if (error != null && $el.closest("a").length > 0) {
                this.noErrors = false;
                $el.addClass("sa11y-headings-fail");
                $el.closest('a').after(ErrorPopupStart + error + Sa11yPopupEnd);
                var li = "<li class='sa11y-outline-"+level+" sa11y-red-text'><span class='sa11y-bold'><span aria-hidden='true'>&times;</span><span class='sr-only'>Error</span> H"+level+":</span> "+$el.text()+"</li>"; //Generate page outline.
                $("#sa11y-outline-list").append(li); //Generate page outline.
            }

            // Outline element based on error.
           else if (error != null) {
            	this.noErrors = false;
                $el.addClass("sa11y-headings-fail");
                $el.before(ErrorPopupStart + error + Sa11yPopupEnd);
                var li = "<li class='sa11y-outline-"+level+" sa11y-red-text'><span class='sa11y-bold'><span aria-hidden='true'>&times;</span><span class='sr-only'>Error</span> H"+level+":</span> "+$el.text()+"</li>"; //Generate page outline.
                $("#sa11y-outline-list").append(li); //Generate page outline.
            }

            else if (error == null){
                var li = "<li class='sa11y-outline-"+level+"'><span class='sa11y-bold'>H"+level+":</span> "+$el.text()+"</li>"; //Generate page outline.
                $("#sa11y-outline-list").append(li); //Generate page outline.
            }
        });
    };

/*====================== LINK TEXT MODULE =======================*/

    // Toggles the outline of all inaccessible link texts.
    this.checkLinkText = function() {
        if (this.showingLinkText) {
            this.clearEverything();
            this.showingLinkText = false;
        }
        else {
            this.outlineLinkText();
            this.showingLinkText = true;
        }
    };

    this.outlineLinkText = function() {


        let $links = $("body").find("a[href]").not(".sa11y-exclude");

        /* Example: Find all links within the main content area, and exclude all links with the class....
        let $links = $("main").find("a[href]").not(".calendar-component a"); */

        $links.each((i, el) => {
            let $el = $(el);

            // error is any words that are making this link text inaccessible.
            var error = this.containsLinkTextStopWords($el.text().trim());

            // Tests to see if this link is empty
            if ($el.children().length == 0 && $el.text().length == 0) {
            	this.noErrors = false;
                linkErrorMessage = 'Found an empty hyperlink without any text!'
                $el.addClass("sa11y-link-text-fail");
                $el.after(ErrorPopupStart + linkErrorMessage + Sa11yPopupEnd);
            }
            // if link contains any link text stop words, then it fails.
            else if (error != null) {
            	this.noErrors = false;
                $el.addClass("sa11y-link-text-fail");
                stopWordMessage = 'Link text may not be descriptive enough, consider changing word: <span class="sa11y-red-text sa11y-bold">'+error+'</span><hr><strong>Tip!</strong> Link text should always be unique and meaningful so it could be understood out of context.'
                $el.after(ErrorPopupStart + stopWordMessage + Sa11yPopupEnd);
            }
        });
    };

    // Checks if text is not descriptive and returns the word(s) that are making the text inaccessible.
    //Partial stop words: If the hyperlink contains ANY of these words flag as error.
    //Total stop words: Hyperlinks that contain the following words only.
    this.containsLinkTextStopWords = function(textContent){

        let partialStopWords = ["click here", "click", "<", ">", "http://", "https://", ".aspx", ".html", ".php"];
        let totalStopWords = ["learn more", "learn", "more", "this page", "check out", "learn to", "view", "view our", "read more", ".", ",", ":", "page", "this page", "download", "form", "link", "here", "this"];
        var hit = null;

        // First check for partial words.
        $.each(partialStopWords, function(index, word) {
            if (textContent.toLowerCase().indexOf(word) >= 0){
                hit = word;
                return false;
            }
        });

        // If no partial words were found, then check for total words.
        if (hit == null){
            $.each(totalStopWords, function(index, word) {
                if (textContent.length === word.length && textContent.toLowerCase().indexOf(word) >= 0){
                    hit = word;
                    return false;
                }
            });
        }
        return hit;
    };

/*================== ALTERNATIVE TEXT MODULE ====================*/

    // Toggles the outline of images.
    this.checkAltText = function() {
        if (this.showingAltText) {
            this.clearEverything();
            this.showingAltText = false;
        }
        else {
            this.outlineAltText();
            this.showingAltText = true;
        }
    };

    this.outlineAltText = function() {

        let $images = $("body").find("img").not(".sa11y-exclude");
        /* Example: Find all images within the main content area only, and exclude images containing a path.
        let $images = $("main img").not("[src*='/global/template/etc']"); */

        // Test each image for alternative text.
        $images.each((i, el) => {
            let $el = $(el);
            let text = $el.attr("alt");

            // Checks to see if image contains an alt attribute. If not, then image fails.
            if (text == undefined) {
            	this.noErrors = false;

                // Image fails if it is used as a link and is missing an alt attribute.
            	//if ($el.parent().prop("tagName") == "A") {
                if ($el.parents().is("a[href]")) {

                    //Image contains both hyperlink
                    if ($el.parents("a").text().trim().length > 1) {
            			$el.addClass("sa11y-error-border");
            			missingAltLinkButHasTextError = 'Image is being used as a hyperlink with surrounding text, although the alt attribute should be marked as decorative or null.'
                        $el.closest("a").before(ImageErrorPopupStart + missingAltLinkButHasTextError + Sa11yPopupEnd);
            		}

                    else if ($el.parents("a").text().trim().length == 0) {
            			$el.addClass("sa11y-error-border");
            			missingAltLinkError = 'Image is being used as a hyperlink but is missing alt text! Please ensure alt text describes where the link takes you.'
                        $el.closest('a').before(ImageErrorPopupStart + missingAltLinkError + Sa11yPopupEnd);
            		}

            	}
            	// General failure message if Image is missing an alt attribute.
            	else {
            		$el.addClass("sa11y-error-border");
                    missingAltError = 'Missing alt text! If the image conveys a story, a mood or important information - be sure to describe the image.'
                    $el.before(ImageErrorPopupStart + missingAltError + Sa11yPopupEnd);
            	}
            }

            // If alt attribute is present, further tests are done.
            else {
                let altText = text.replace(/'/g,"&#39;"); //replace apostrophe with HTML ascii to prevent breaking popover.
            	let error = this.containsAltTextStopWords(altText);
                let altLength = text.length;

            	// Image fails if a stop word was found
            	if (error != null && $el.parents().is("a[href]")) {
            		this.noErrors = false;
            	    $el.addClass("sa11y-error-border");
                    LinkedImageHasBadAltWord = "Detected poor alt text in hyperlinked image. Ensure alt text describes destination of link, not a literal description of the picture. Remove word: <span class='sa11y-red-text sa11y-bold'>"+error+"</span>. <hr aria-hidden='true'> The alt text for this image is: <strong>"+altText+"</strong>"
                    $el.closest('a').before(ImageErrorPopupStart + LinkedImageHasBadAltWord + Sa11yPopupEnd);
            	}

                else if (error != null) {
            		this.noErrors = false;
            	    $el.addClass("sa11y-error-border");
                    AltHasBadWord = 'Poor alt text found. It is not necessary to include words like <em>image</em>, <em>graphic</em> or the file extension. Consider removing the word: <span class="sa11y-red-text sa11y-bold">'+error+'</span>. <hr aria-hidden="true"> The alt text for this image is: <strong>'+altText+'</strong>'
                    $el.before(ImageErrorPopupStart + AltHasBadWord + Sa11yPopupEnd);
            	}

            	// Image fails if it is marked decorative and used as a link.
            	else if (text == "" && $el.parents().is("a[href]")) {

            		// First checks to see if the parent anchor link has text. If it does, then it is marked as a pass.
            		if ($el.parents().text().trim() != "") {
                        LinkHasAltMessage = 'Great! Image is marked as decorative, although link is using surrounding text as label.'
            	    	$el.closest('a').before(PassPopupStart + LinkHasAltMessage + Sa11yPopupEnd);
            		}

					// If there is no link text present, it is marked as a fail.
					else {
						this.noErrors = false;
            			$el.addClass("sa11y-error-border");
                        ImageLinkNullAltNoText = 'Image within hyperlink is marked as decorative and there is no link text. Please add alt text to image that describes destination of link.'
                        $el.closest('a').before(ImageErrorPopupStart + ImageLinkNullAltNoText + Sa11yPopupEnd);
            		}
            	}

            	// Image warning if it is decorative and is not a link.
            	else if (text == "" && $el.parents().not("a[href]")) {
                    decorativePassMessage = 'Image marked as <strong>decorative.</strong> However, if the image conveys a story, a mood or important information - be sure to add alt text.'
                    $el.before(PassPopupStart + decorativePassMessage + Sa11yPopupEnd);
            	}

            	// Image warning if it is a link and contains an alt text.
            	else if (text.length > 125 && $el.parents().is("a")) {
            		this.noErrors = false;
                    $el.addClass("sa11y-error-border");
                    HyperlinkAltLengthWarning = "Alt text description on hyperlinked image is <strong>too long</strong>. The alt text on hyperlinked images should describe where the link takes you, not a literal description of the image. <span class='sa11y-bold'>Consider using the title of the page it links to as the alt text.</span> <hr aria-hidden='true'> The alt text is <span class='sa11y-red-text sa11y-bold'>"+altLength+"</span> characters: <span class='sa11y-red-text sa11y-bold'>"+altText+"</span>"
                    $el.closest('a').before(ImageErrorPopupStart + HyperlinkAltLengthWarning + Sa11yPopupEnd);
            	}

                // Image warning if it is a link and contains an alt text.
            	else if (text != "" && $el.parents().is("a") && $el.parents("a").text().trim().length == 0) {
            		this.anyWarning = true;
                    $el.addClass("sa11y-warning-border");
                    ImageLinkAltTextWarning = "Image link contains alt text, although please ensure alt text describes the destination page. <span class='sa11y-bold'>Consider using the title of the page it links to as the alt text.</span> Does the alt text describe where the link takes you? <hr aria-hidden='true'>Alt text: <strong>"+altText+"</strong>"
                    $el.closest('a').before(ImageWarningPopupStart + ImageLinkAltTextWarning + Sa11yPopupEnd);
            	}

                // Image warning if it is a link, contains alt text AND surrounding link text.
            	else if (text != "" && $el.parents().is("a") && $el.parents("a").text().trim().length > 1) {
            		this.anyWarning = true;
                    $el.addClass("sa11y-warning-border");
                    AnchorLinkAndAlt = "Image link contains <span class='sa11y-bold'>both alt text and surrounding link text.</span> If this image is decorative and is being used as a functional link to another page, consider marking the image as decorative or null - the surrounding link text should suffice. <hr aria-hidden='true'>Alt text: <strong>"+altText+"</strong>"
                    $el.closest('a').before(ImageWarningPopupStart + AnchorLinkAndAlt + Sa11yPopupEnd);
            	}


                // Image error if alt text is too long.
                else if (text.length > 125) {
                    this.noErrors = false;
            	    $el.addClass("sa11y-error-border");
                    AltTooLong = "Alt text description is <strong>too long</strong>. Alt text should be concise, yet meaningful like a <em>tweet</em> (around 100 characters). If this is a complex image or a graph, consider putting the long description of the image in text below or in an accordion component. <hr aria-hidden='true'> The alt text is <span class='sa11y-red-text sa11y-bold'>"+altLength+"</span> characters: <span class='sa11y-red-text sa11y-bold'>"+altText+"</span>"
                    $el.before(ImageErrorPopupStart + AltTooLong + Sa11yPopupEnd);
            	}

            	// Image pass if it contains alt text.
            	else if (text != "") {
            	    altErrorMessage = 'The alt text for this image is: <strong>'+altText+'</strong>'
                    $el.before(PassPopupStart + altErrorMessage + Sa11yPopupEnd);
            	}
            }
        });
    };

    // Checks if text is not descriptive and returns the word(s) that are making the text inaccessible.
    this.containsAltTextStopWords = function(textContent) {
        let stopWords = [".png", "DSC", ".jpg", ".jpeg", "image of", "graphic of", "picture of" , "alt", "placeholder"];
        var hit = null;
        $.each(stopWords, function(index, word){
            if (textContent.toLowerCase().indexOf(word) >= 0) {
                hit = word;
                return word;
            }
        });
        return hit;
    };

/*================== QUALITY ASSURANCE MODULE ===================*/

    this.checkQA = function() {
        if (this.showingQA) {
            this.clearEverything();
            this.showingQA = false;
        }
        else {
            this.outlineQA();
            this.showingQA = true;
        }
    };

    this.outlineQA = function() {

        //Warn users to provide captions for videos.
        let $findVideos = $("video, iframe[src*='youtube.com'], iframe[src*='vimeo.com']");
        $findVideos.each((i, el) => {
            let $el = $(el);
            this.anyWarning = true;
            $el.addClass("sa11y-warning-border");
            MissingCaptionsWarning = "Please ensure <strong>all videos have closed captioning.</strong> Providing captions for all audio and video content is a mandatory Level A requirement. Captions are meant to support people who are deaf or hard-of-hearing."
            $el.before(WarningPopupStart + MissingCaptionsWarning + Sa11yPopupEnd);
        });


        //Warning: Make sure all podcasts have captions.
        var soundcloudWarning = $('audio, iframe[src*="soundcloud.com"]');
        if (soundcloudWarning.length > 0) {
            this.anyWarning = true;
            soundcloudWarning.addClass("sa11y-warning-border");
            SoundCloudMessage = 'Please ensure to provide a <strong>transcript for all podcasts.</strong> Providing transcripts for audio content is mandatory. Transcripts are meant to support people who are deaf or hard-of-hearing, but can benefit everyone. Consider placing the transcript below or within an accordion panel.'
            soundcloudWarning.before(WarningPopupStart + SoundCloudMessage + Sa11yPopupEnd);
        }

        //Warning: Check Google Data Studio widget.
        var dataStudioWarning = $('iframe[src*="datastudio.google.com"]');
        if (dataStudioWarning.length > 0) {
            this.anyWarning = true;
            dataStudioWarning.addClass("sa11y-warning-border");
            dataStudioWarningMessage = "Google Data Studio widgets can be problematic for people who use a keyboard to navigate and people who have difficulty perceiving visual content. Please <strong>provide a text alternative</strong> immediately below the Data Studio frame. Visit [this website for an example]."
            dataStudioWarning.before(WarningPopupStart + DataStudioWarningMessage + Sa11yPopupEnd);
        }

        //Warning: Discourage use of Twitter timelines.
        let $twitterWarning = $('[id^=twitter-widget]');
        $twitterWarning.each((i, el) => {
            let $el = $(el);
            var numberofTweets = $el.contents().find(".timeline-TweetList-tweet").length;
            if (numberofTweets > 3) {
                this.noErrors = false;
                $el.addClass("sa11y-link-text-fail");
                error = 'Twitter timeline needs to be optimized for accessibility and usability. The default Twitter timeline may cause accessibility issues for keyboard users. Secondly, the inline scrolling of the Twitter timeline may cause usability issues for mobile. Please go to the <em>SEO and Accessibility</em> section of the Web Support site to learn how to optimize.'
                $el.parent().before(ErrorPopupStart + error + Sa11yPopupEnd);
            }
        });

        // Warn users of TARGET BLANK within main content.
        let $linksTargetBlank = $("body").find("a[href]").not("a[href$='.pdf']").not("a[href$='.docx']").not("#sa11y-container a").not(".sa11y-exclude");
        $linksTargetBlank.each((i, el) => {
            let $el = $(el);
            var hasTarget = $el.attr("target");
            if (hasTarget === "_blank") {
            	this.anyWarning = true;
                $el.addClass("sa11y-text-warning");
                WarningNewTab = "Please use the <em>Open in new window</em> option <strong>sparingly.</strong> Opening links in new tabs or windows can be very disorienting for people, especially for people who have difficulty perceiving visual content."
                $el.after(WarningPopupStart + WarningNewTab + Sa11yPopupEnd);
            }
        });

        //Error: Find all links pointing to development environment. Customize as needed.
        let $badDevLinks = $("body").find("a[href^='https://www.dev.']");
        $badDevLinks.each((i, el) => {
            let $el = $(el);
            this.noErrors = false;
            $el.addClass("sa11y-link-text-fail");
            BadLinkMessage = "Bad link found. Link appears to point to a development environment. Make sure the link does not contain <em>dev</em> in the URL. It is best to use relative hyperlinks. <hr aria-hidden='true'>This link points to: <span class='sa11y-bold sa11y-red-text'>"+el+"</span>"
            $el.after(ErrorPopupStart + BadLinkMessage + Sa11yPopupEnd);
        });

        //Warning: Find all PDFs. Although only append warning icon to first PDF on page.
        var checkPDF = $("a[href$='.pdf']");
        let firstPDF = $("a[href$='.pdf']:first");
        if (checkPDF.length > 0){
            this.anyWarning = true;
            checkPDF.addClass("sa11y-text-warning");
            checkPDF.has("img").removeClass("sa11y-text-warning");
            WarningPDFMessage = "PDF files are considered web content and must be made accessible as well. If this file is a form, consider using the Adobe AEM Forms component or Google Forms as an accessible alternative. If this PDF file is a document, consider converting it into a web page instead. Otherwise, please <span class='sa11y-bold'>check file for accessibility in Acrobat DC.</span>"
            firstPDF.after(WarningPopupStart + WarningPDFMessage + Sa11yPopupEnd);
        }

        //Warning: Check for UPPERCASE or all caps. If all caps word is greater than 5 characters, then flag as issue.
        $('h1, h2, h3, h4, h5, h6, p, li, span, blockquote').each(function(){
                var pattern = /(?!<a[^>]*?>)([A-Z]{5,})(?![^<]*?<\/a>)/g;
                var before = "<span class='sa11y-uppercase-warning'>";
                var after = "</span><button class='sa11y-popover-toggle sa11y-link-warning-btn' aria-haspopup='true' aria-expanded='false'><svg xmlns='http://www.w3.org/2000/svg' width='28px' height='28px' role='img' focusable='false' aria-hidden='true' viewBox='0 0 512 512'><path fill='#505050' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z'/></svg><span class='sr-only'>Warning</span></button><div aria-label='Warning Pop-up' class='sa11y-popover'><div class='sa11y-popover-inner'><span class='sa11y-popover-header'>Warning</span>ALL CAPS DETECTED. It is best practice to avoid typing sentences or phrases in ALL CAPITALS. Lengthy segments of capitalized content is more difficult to read and it may seem like you are SHOUTING. Secondly, some screen readers may interpret all capital text as an acronym.<hr>If this word is an acronym, please ignore this warning. But be sure to also provide the expanded form of the acronym at least once on the page.<button class='sa11y-popover-close'><svg width='20px' height='20px' xmlns='http://www.w3.org/2000/svg' role='img' focusable='false' aria-hidden='true' viewBox='0 0 352 512'><path fill='#4d4d4d' d='M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z'/></svg><span class='sr-only'>Close Popup</span></button></div><span class='sa11y-popover-arrow'></span></div>"
                $(this).html($(this).html().replace(pattern, before+"$1"+after));
        });
        if ($('span.sa11y-uppercase-warning').length > 0) {
            this.anyWarning = true;
        }

        //Check for blockquotes used as headings. If it's less than 25 characters - it's definitely not a quote.
        let $blockquotes = $(this.workingDoc.getElementsByTagName("blockquote"));
        $blockquotes.each((i,el) => {
           let $el = $(el);
            if ($el.text().trim().length < 25) {
                this.noErrors = false;
                $el.addClass("sa11y-error-border")
                BlockquoteError = "Blockquotes should be used for quotes only. They should never be used as headings. Please replace with a semantic heading (e.g. Heading 2 or Heading 3)."
                $el.before(ErrorPopupStart + BlockquoteError + Sa11yPopupEnd);
            }
        });

        //Check if a table has a table header.
        let $tablesCheck = $("body").find("table");
        $tablesCheck.each((i,el) => {
           let $el = $(el);
           let findTHeaders = $el.find("th");
           let findHeadingTags = $el.find("h1, h2, h3, h4, h5, h6");
            if (findTHeaders.length == 0) {
                this.noErrors = false;
                $el.addClass("sa11y-link-text-fail");
                MissingHeadingsError = 'Missing table headers! Accessible tables need HTML markup that indicates header cells and data cells which defines their relationship. This information provides context to people who use assistive technology. Tables should be used for tabular data only. Learn more about <a href="https://www.w3.org/WAI/tutorials/tables/" target="_blank">creating accessible tables<span class="sr-only">, opens new tab</span>.</a>'
                $el.before(ErrorPopupStart + MissingHeadingsError + Sa11yPopupEnd);
            }
            if (findHeadingTags.length > 0) {
                findHeadingTags.addClass("sa11y-headings-fail");
                SemanticHeadingTableError = 'Semantic headings such as Heading 2 or Heading 3 should only be used for sections of content; <strong>not</strong> in HTML tables. Indicate table headings using the <span class="sa11y-bold">th</span> element instead. Learn more about <a href="https://www.w3.org/WAI/tutorials/tables/" target="_blank">creating accessible tables<span class="sr-only">, opens new tab</span>.</a>'
                findHeadingTags.before(ErrorPopupStart + SemanticHeadingTableError + Sa11yPopupEnd);
            }
        });

        //Make sure all table headers are not empty.
        let $thCheck = $(this.workingDoc.getElementsByTagName("th"));
        $thCheck.each((i,el) => {
           let $el = $(el);
            if ($el.text().trim().length < 1) {
               $el.addClass("sa11y-link-text-fail");
               EmptyTableHeaderError = 'Empty table header found! Table headers should <em>never</em> be empty. It is important to designate row and/or column headers to convey their relationship. This information provides context to people who use assistive technology. Please keep in mind that tables should be used for tabular data only. Learn more about <a href="https://www.w3.org/WAI/tutorials/tables/" target="_blank">creating accessible tables<span class="sr-only">, opens new tab</span>.</a>'
               $el.append(ErrorPopupStart + EmptyTableHeaderError + Sa11yPopupEnd);
            }
        });

        //Example Warning: Make sure people don't use too many announcements on one page.
            var announcementCheck = $('.resAnnouncement').length;
            if (announcementCheck > 1) {
            	this.anyWarning = true;
                AnnouncementWarningMessage = 'More than one <em>Announcement</em> component found! The Announcement component should be used <span class="sa11y-bold">strategically and sparingly</span>. It should be used to get attention or warn users about something <span class="sa11y-bold">important.</span> Misuse of this component makes it less effective or impactful. Secondly, this component is semantically labeled as an Announcement to people who use screen readers.'
                $('.resAnnouncement:gt(0)').addClass("sa11y-warning-border");
                $('.resAnnouncement:gt(0)').before(WarningPopupStart + AnnouncementWarningMessage + WarningPopupEnd);
         }

          //Error: Check for duplicate IDs.
          var ids = {};
          var found = false;
          $('[id]').each(function() {
            if (this.id && ids[this.id]) {
              found = true;
              this.noErrors = false;
              $(this).addClass("sa11y-link-text-fail");
              duplicateIDMessage = "Found <strong>duplicate ID</strong>. Duplicate ID errors are known to cause problems for assistive technologies when they are trying to interact with content. <hr>Please remove or change the following ID: <span class='sa11y-bold sa11y-red-text'>"+this.id+"</span>"
              $(this).append(ErrorPopupStart + duplicateIDMessage + Sa11yPopupEnd);
            }
            ids[this.id] = 1;
          });

         //Error: Missing language tag.
         var lang = $("html").attr("lang");
         if (lang === undefined) {
           this.noErrors = false;
           $('#sa11y-container').after("<div class='sa11y-error-message'>"+ErrorIcon+"<br> Page language not declared! Please <a href='https://www.w3.org/International/questions/qa-html-language-declarations' target='_blank'>declare language on HTML tag.<span class='sr-only'>(opens new window)</span></a></div>");
         }

        //Error: Missing language tag.
         var userScalable = $("meta").attr("user-scalable");
         if (userScalable == "no" || userScalable == "0" || $("meta[content~='user-scalable=no']").length > 0) {
           this.noErrors = false;
           $('#sa11y-container').after("<div class='sa11y-error-message'>"+ErrorIcon+"<br> Remove <span class='sa11y-bold'>user-scalable=&quot;no&quot;</span> paramater from the meta element to allow zooming. This can be very problematic for people with low vision!</div>");
         }

    }

/*========================== Styling ============================*/

    //CSS hack to ensure Sa11y styles do not get overwritten.
    $('body').attr('id','sa11y-css-important');

    var style = document.createElement('style');
    style.innerHTML = '@import url(https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap);#sa11y-css-important button.sa11y-error-btn{width:50px!important;height:50px!important;border-radius:50%!important;position:absolute!important;margin:-20px!important;z-index:8888!important;border:none!important;display:inline-flex!important;padding:12px!important;vertical-align:middle!important;background-color:#d30017!important;cursor:pointer!important;-moz-box-shadow:0 0 16px 0 #0000004f!important;-webkit-box-shadow:0 0 16px 0 #0000004f!important;box-shadow:0 0 16px 0 #0000004f!important;transition:all .2s ease-in-out!important;min-width:0!important}#sa11y-css-important button.sa11y-error-btn:hover,#sa11y-css-important button.sa11y-error-btn:focus{background-color:#ff0000!important}#sa11y-css-important button.sa11y-error-btn:focus{box-shadow:inset 0 0 0 2px #d30017!important;-moz-box-shadow:inset 0 0 0 2px #d30017!important;-webkit-box-shadow:inset 0 0 0 2px #d30017!important;outline:0}#sa11y-css-important button.sa11y-pass-btn{width:50px!important;height:50px!important;border-radius:50%!important;border:none!important;margin:-20px!important;position:absolute!important;z-index:8888!important;padding:12px!important;vertical-align:middle!important;background-color:#36844e!important;cursor:pointer!important;-webkit-box-shadow:0 0 16px 0 #0000004f!important;-moz-box-shadow:0 0 16px 0 #0000004f!important;box-shadow:0 0 16px 0 #0000004f!important;transition:all .2s ease-in-out!important;min-width:0!important}#sa11y-css-important button.sa11y-pass-btn:focus,button.sa11y-pass-btn:hover{background-color:#38a459!important}#sa11y-css-important button.sa11y-pass-btn:focus{box-shadow:inset 0 0 0 2px #36844e!important;-moz-box-shadow:inset 0 0 0 2px #36844e!important;-webkit-box-shadow:inset 0 0 0 2px #36844e!important;outline:0}#sa11y-css-important button.sa11y-warning-btn{margin:-20px!important;padding:10px!important;width:50px!important;height:50px!important;border-radius:50%!important;border:none!important;position:absolute!important;z-index:8888!important;vertical-align:middle!important;background-color:#ffc800!important;-moz-box-shadow:0 0 16px 0 #0000004f!important;-webkit-box-shadow:0 0 16px 0 #0000004f!important;box-shadow:0 0 16px 0 #0000004f!important;cursor:pointer!important;transition:all .2s ease-in-out!important;min-width:0!important}#sa11y-css-important button.sa11y-warning-btn:focus,#sa11y-css-important button.sa11y-warning-btn:hover{background-color:#ffd042!important}#sa11y-css-important button.sa11y-warning-btn:focus{box-shadow:inset 0 0 0 2px #ffc800!important;-moz-box-shadow:inset 0 0 0 2px #ffc800!important;-webkit-box-shadow:inset 0 0 0 2px #ffc800!important;outline:0}#sa11y-css-important button.sa11y-link-warning-btn{padding:0px!important;width:50px!important;height:50px!important;border-radius:50%!important;border:none!important;position:absolute!important;margin:-10px 10px!important;z-index:8888!important;vertical-align:middle!important;background-color:#ffc800!important;-moz-box-shadow:0 0 16px 0 #0000004f!important;-webkit-box-shadow:0 0 16px 0 #0000004f!important;box-shadow:0 0 16px 0 #0000004f!important;cursor:pointer!important;transition:all .2s ease-in-out!important;min-width:0!important}#sa11y-css-important button.sa11y-link-warning-btn:focus,#sa11y-css-important button.sa11y-link-warning-btn:hover{background-color:#ffd226!important}#sa11y-css-important button.sa11y-link-warning-btn:focus{box-shadow:inset 0 0 0 2px #ffc800!important;-moz-box-shadow:inset 0 0 0 2px #ffc800!important;-webkit-box-shadow:inset 0 0 0 2px #ffc800!important;outline:0}#sa11y-css-important button.sa11y-error-text-btn{width:50px!important;height:50px!important;margin:-10px 10px!important;border-radius:50%!important;border:none!important;position:relative!important;z-index:8888!important;padding:12px!important;vertical-align:middle!important;background-color:#d30017!important;cursor:pointer!important;-moz-box-shadow:0 0 16px 0 #0000004f!important;-webkit-box-shadow:0 0 16px 0 #0000004f!important;box-shadow:0 0 16px 0 #0000004f!important;transition:all .2s ease-in-out!important;min-width:0!important}#sa11y-css-important button.sa11y-error-text-btn:hover,#sa11y-css-important button.sa11y-error-text-btn:focus{background-color:#ff0000!important}#sa11y-css-important button.sa11y-error-text-btn:focus{box-shadow:inset 0 0 0 2px #d30017!important;-moz-box-shadow:inset 0 0 0 2px #d30017!important;-webkit-box-shadow:inset 0 0 0 2px #d30017!important;outline:0}#sa11y-css-important .sa11y-headings-fail{color:#c22326!important}#sa11y-css-important .sa11y-error-border{border-color:#c22326!important;border-style:solid!important;border-radius:.25em!important;border-width:5px!important}#sa11y-css-important .sa11y-link-text-fail{background-color:#c22326!important;border-radius:.25em!important;padding:5px!important;color:white!important}#sa11y-css-important .sa11y-text-warning,#sa11y-css-important .sa11y-uppercase-warning{background-color:#ffc800!important;border-radius:.25em!important;padding:5px!important}#sa11y-css-important .sa11y-warning-border{border-color:#ffc800!important;border-style:solid!important;border-width:5px!important;border-radius:.25em!important}#sa11y-container svg,.sa11y-link-warning-btn svg{overflow:hidden!important;vertical-align:middle!important}#sa11y-container .sa11y-panel{font-family:"Roboto",sans-serif;z-index:8890;box-shadow:0 0 5px rgba(0,0,0,.15);background:#fafafa;-webkit-box-shadow:0 0 5px rgba(0,0,0,.15);-moz-box-shadow:0 0 5px rgba(0,0,0,.15);position:fixed;bottom:60px;right:55px;width:310px;text-align:left;overflow:hidden;transform:scale(0);transform-origin:100% 100%;border-radius:.25em;opacity:0;transition:transform .2s,opacity .2s}#sa11y-container .sa11y-panel a{text-decoration:underline!important;color:#004c9b!important;border-bottom:0px!important}#sa11y-container .sa11y-panel a:hover,#sa11y-container .sa11y-panel a:focus{text-decoration:none!important}#sa11y-container .sa11y-panel.sa11y-active{height:auto;opacity:1;visibility:visible;transform:scale(1);transition:transform .2s,opacity .2s}#sa11y-container .sa11y-panel-header{padding:15px 15px 15px 15px!important;color:#4d4d4d!important;line-height:22px!important}#sa11y-container .sa11y-outline-header{padding:5px 15px 0 15px!important;color:#4d4d4d!important;line-height:22px!important}#sa11y-css-important .sa11y-bold{font-weight:700!important}#page-outline-header{font-size:16px!important}#sa11y-no-errors,#sa11y-warnings,#sa11y-errors-found,#sa11y-page-outline{opacity:0;display:none}#sa11y-no-errors.sa11y-active,#sa11y-warnings.sa11y-active,#sa11y-errors-found.sa11y-active,#sa11y-page-outline.sa11y-active,#sa11y-summary-toggle.sa11y-active{opacity:1;display:table}#sa11y-page-outline{padding-bottom:0px!important;width:100%;transition:all .60s ease}#sa11y-container .sa11y-th-img svg{margin:5px 15px 0 0}#sa11y-container .sa11y-hide-native-checkbox{position:fixed;bottom:50px;right:40px;overflow:hidden;margin:0;padding:0;border:0;outline:0;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);opacity:0}#sa11y-container .sa11y-main-toggle-style{position:fixed!important;bottom:50px!important;right:40px!important;background-color:#4b4b4b!important;color:#fff!important;border-radius:50px!important;box-shadow:2px 2px 20px #0000005c!important;-moz-box-shadow:2px 2px 20px #0000005c!important;-webkit-box-shadow:2px 2px 20px #0000005c!important;cursor:pointer!important;padding:10px!important;margin:0px!important;z-index:99999!important;transition:all .2s ease-in-out}#sa11y-container .sa11y-main-toggle-style:hover,#sa11y-container .sa11y-toggle-active{background-color:#0077C8!important}#sa11y-container .allytogglefocus{transform:scale(1.1);background-color:#0077c8!important}#sa11y-css-important .sa11y-warning-message{font-family:"Roboto",sans-serif;font-size:16px!important;padding:15px;background-color:#ffc802;text-align:center;color:#4b4b4b;border-radius:0.25em!important}#sa11y-css-important .sa11y-error-message{font-family:"Roboto",sans-serif;font-size:16px!important;padding:15px;background-color:#c22326!important;text-align:center;color:#fff}#sa11y-css-important .sa11y-error-message a{color:#fff!important;text-decoration:underline!important;border:0!important}#sa11y-css-important .sa11y-error-message a:hover,#sa11y-css-important .sa11y-error-message a:focus{text-decoration:none!important}#sa11y-css-important .sa11y-pass-message{font-family:"Roboto",sans-serif;font-size:16px!important;padding:15px;background-color:#35844e;text-align:center;color:#fff;border-radius:0.25em!important}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}100%{border:4px solid rgba(255,255,255,.05)}}@keyframes rotate{0%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}100%{border:4px solid rgba(255,255,255,.05)}}#sa11y-container .loading-spinner:before{content:"";position:absolute;display:inline-block;box-sizing:border-box;width:100%;height:100%;border-radius:50%;margin:-10px;border:4px solid rgba(255,255,255,.9);border-top:4px solid transparent;border-bottom:4px solid transparent;-webkit-animation:rotate 2s ease;animation:rotate 2s ease;animation-fill-mode:forwards}.sr-only{position:absolute;clip:rect(1px,1px,1px,1px);padding:0;border:0;height:1px;width:1px;overflow:hidden;display:block;white-space:nowrap;clip-path:inset(50%)}#sa11y-container .sa11y-td-msg{vertical-align:middle;display:table-cell;font-size:16px!important}#sa11y-container .sa11y-th-img{vertical-align:middle;display:table-cell}#sa11y-css-important .sa11y-red-text,#sa11y-css-important .sa11y-red-text strong{color:#ba0013!important;font-family:"Roboto",sans-serif!important;font-size:15px!important}#sa11y-outline-list .sa11y-outline-2{margin-left:15px!important}#sa11y-outline-list .sa11y-outline-3{margin-left:30px!important}#sa11y-outline-list .sa11y-outline-4{margin-left:45px!important}#sa11y-outline-list .sa11y-outline-5{margin-left:60px!important}.sa11y-outline-6{margin-left:75px!important}#sa11y-outline-list{list-style-type:none!important;margin:0!important;padding:0 0 10px 0px!important;outline:0!important;max-height:350px!important;overflow-y:scroll!important;border-bottom:1px solid #dbdbdbbf!important}#sa11y-outline-list li,#sa11y-outline-list ul{padding:0!important;font-size:15px!important}::-webkit-scrollbar{-webkit-appearance:none;width:7px}::-webkit-scrollbar-thumb{border-radius:5px;background-color:rgba(0,0,0,.5);-webkit-box-shadow:0 0 1px rgba(255,255,255,.5)}#sa11y-summary-toggle{opacity:0;display:none;border-radius:0!important;background:#ececec!important;width:100%!important;padding:0px!important;color:#4d4d4d!important;font-size:15px!important;border-bottom:0!important;border-top:1px solid #d7d7d7!important;border-left:0!important;border-right:0!important;outline:0!important;cursor:pointer!important;font-weight:400!important;height:30px!important;line-height:0!important}button#sa11y-summary-toggle:focus,button#sa11y-summary-toggle:hover{box-shadow:inset 0 0 5px #0000002e;background:#e1e1e1}#sa11y-css-important .sa11y-btn-active{box-shadow:inset 0 0 5px #0000002e}#sa11y-css-important .sa11y-popover-toggle{display:inline-block}';
	$('head').prepend(style);


    //Add focus state to main toggle button to accommodate custom checkbox button.
    $('input#sa11y-checkbox').on("focus", function(){
      var allyCheckInput = $(this);
      var allyLabelClass = $('.sa11y-main-toggle-style')
      allyLabelClass.addClass('allytogglefocus');
      allyCheckInput.on("blur", function(){
        allyLabelClass.removeClass('allytogglefocus');
        allyCheckInput.off("blur");
      });
    });


/*========================== Custom Pop-up ============================*/
/* Feel free to use this custom lightweight tooltip, otherwise it's recommended to use
your own tooltip library.*/

var popupStyle = document.createElement('style');
popupStyle.innerHTML = '#sa11y-css-important .sa11y-popover{position:absolute!important;min-width:300px!important;max-width:350px!important;z-index:8889;visibility:hidden;opacity:0;transition:visibility 0s 0.3s,opacity 0.3s}#sa11y-css-important .sa11y-popover.sa11y-pop-active{visibility:visible;opacity:1;transition-delay:0s}#sa11y-css-important .sa11y-popover.sa11y-pop-clicked{visibility:visible;opacity:1;transition-delay:0s}#sa11y-css-important .sa11y-popover-inner{font-family:"Roboto",sans-serif!important;display:block!important;font-size:16px!important;letter-spacing:normal!important;text-align:left!important;line-height:140%;box-sizing:border-box;max-width:380px;padding:15px 15px 15px 15px;border-radius:5px;box-shadow:0 0 30px rgba(0,0,0,.6);color:#4d4d4d!important;background-color:#fafafa}#sa11y-css-important .sa11y-popover-inner strong{color:#4d4d4d!important}#sa11y-css-important .sa11y-popover-header{font-weight:600!important;display:block!important;font-size:19px!important;padding-bottom:7px!important}#sa11y-css-important .sa11y-popover-inner strong{font-weight:600!important}#sa11y-css-important .sa11y-popover-inner a{text-decoration:underline!important;color:#006edd!important;}#sa11y-css-important .sa11y-popover-inner a:hover, .sa11y-popover-inner a:focus {text-decoration:none!important;color:#004d9b!important;} #sa11y-css-important .sa11y-popover-inner hr{border-bottom:solid 1px #dddddd!important;margin:15px 0!important}#sa11y-css-important button.sa11y-popover-close{position:absolute!important;top:0px!important;right:0px!important;padding:5px!important;margin:5px!important;min-width:44px!important;max-width:44px!important;min-height:44px!important;max-height:44px!important;height:44px!important;border:0px!important;-webkit-box-shadow:!important;-moz-box-shadow:!important;box-shadow:none!important;background-color:#fafafa!important;border-radius:50%!important}#sa11y-css-important button.sa11y-popover-close:hover,button.sa11y-popover-close:focus{background-color:rgba(222,222,222,.25)!important;outline:0!important}#sa11y-css-important button.sa11y-popover-close:focus{border:2px solid #00e7ff75!important}#sa11y-css-important button.sa11y-popover-close svg{overflow:hidden!important;vertical-align:middle!important}#sa11y-css-important .sa11y-popover-arrow{position:absolute;display:block;border-style:solid;border-color:#fafafa;top:100%;border-bottom:none;border-top-width:9px;border-right:8px solid transparent;border-left:8px solid transparent}@media (min-width:481px){#sa11y-css-important .sa11y-popover-arrow{left:28px!important}}@media (max-width:480px){#sa11y-css-important .sa11y-popover{right:15px!important;left:15px!important}}';
$('head').prepend(popupStyle);

var ErrorPopupStart = '<button class="sa11y-popover-toggle sa11y-error-text-btn" aria-haspopup="true" aria-expanded="false">'+ErrorIcon+'</button><div aria-label="Error Pop-up" role="tooltip" class="sa11y-popover"><div class="sa11y-popover-inner"><div class="sa11y-popover-header">Error</div>',
ImageErrorPopupStart = '<button class="sa11y-popover-toggle sa11y-error-btn" aria-haspopup="true" aria-expanded="false">'+ErrorIcon+'</button><div aria-label="Error Pop-up" role="tooltip" class="sa11y-popover"><div class="sa11y-popover-inner"><div class="sa11y-popover-header">Error</div>',
WarningPopupStart = '<button class="sa11y-popover-toggle sa11y-link-warning-btn" aria-haspopup="true" aria-expanded="false">'+WarningIcon+'</button><div aria-label="Warning Pop-up" role="tooltip" class="sa11y-popover"><div class="sa11y-popover-inner"><div class="sa11y-popover-header">Warning</div>',
ImageWarningPopupStart = '<button class="sa11y-popover-toggle sa11y-warning-btn" aria-haspopup="true" aria-expanded="false">'+WarningIcon+'</button><div aria-label="Warning Pop-up" role="tooltip" class="sa11y-popover"><div class="sa11y-popover-inner"><div class="sa11y-popover-header">Please Review!</div>',
PassPopupStart = '<button class="sa11y-popover-toggle sa11y-pass-btn" aria-haspopup="true" aria-expanded="false">'+PassIcon+'</button><div aria-label="Pass Pop-up" role="tooltip" class="sa11y-popover"><div class="sa11y-popover-inner"><div class="sa11y-popover-header">Pass</div>';

var Sa11yPopupEnd = '<button class="sa11y-popover-close">'+CloseIcon+'</button></div><span class="sa11y-popover-arrow"></span></div>';

function openPopover(el) {
    var $this = el;
    var $popover = $this.next(".sa11y-popover");
    var position = $this.position();
    var width = $this.width();
    var height = $this.height();
    var margin_top = parseInt($this.css("marginTop"));
    var margin_left = parseInt($this.css("marginLeft"));
    var popover_height = $popover.height();

    $popover
        .css({
          top: position.top + margin_top - popover_height - 15,
          left: position.left + margin_left + width / 2 - 23
        })
        .find(".sa11y-popover-arrow")
        .css({
          left: position.left + width / 2 - 23
        });
    }

$(document).on("mouseover", ".sa11y-popover-toggle", function() {
  var el = $(this);
  var $popover = el.next(".sa11y-popover");
  openPopover(el);
  $popover.addClass("sa11y-pop-active");
  if ($popover.hasClass("sa11y-pop-active")) {
    el.attr("aria-expanded", "true");
  }
});

 $(document).on("mouseout", ".sa11y-popover-toggle", function() {
  var el = $(this);
  var $popover = el.next(".sa11y-popover");
  $popover.removeClass("sa11y-pop-active");
  if (!$popover.hasClass("sa11y-pop-active") && !$popover.hasClass("sa11y-pop-clicked")) {
    el.attr("aria-expanded", "false");
  }
});

 $(document).on("click", ".sa11y-popover-toggle", function() {
     var el = $(this);
     var $popover = el.next(".sa11y-popover");
     $popover.toggleClass("sa11y-pop-clicked");
     openPopover(el);
     $popover.removeClass("sa11y-pop-active");
     if ($popover.hasClass("sa11y-pop-active") || $popover.hasClass("sa11y-pop-clicked")) {
         el.attr('aria-expanded', 'true');
         } else {
             el.attr('aria-expanded', 'false');
         }

     //For longer popups, scroll into view on click.
     $popover[0].scrollIntoView({behavior: 'smooth', block: 'center'});
});

 $(document).on("click", ".sa11y-popover-close", function() {
  var el = $(this).closest(".sa11y-popover");
  el.removeClass("sa11y-pop-clicked");
  el.prev().attr("aria-expanded", "false");
});

$(document).keyup(function(sa11yclose) {
  if (sa11yclose.keyCode == 27) {
    var el = $(".sa11y-popover");
    el.removeClass("sa11y-pop-clicked");
    el.prev().attr("aria-expanded", "false");
  }
});


} //End of function sa11y()


/*===============================================================
Sa11y - Accessibility checker adapted from Tota11y by Khan Academy.

    Adam Chaboryk, IT Accessibility Specialist, Ryerson University
    Benjamin Luong, Web Accessibility Assistant, Ryerson University
    Arshad Mohammed, Web Accessibility Assistant, Ryerson University

Licensing:
Copyright (c) 2019 Ryerson University

Various parts of Sa11y is adapted from https://github.com/Khan/tota11y

MIT License (MIT)
Copyright (c) 2016 Khan Academy
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Icons: Font Awesome for the SVG icons. See https://fontawesome.com/license/free
===============================================================*/
