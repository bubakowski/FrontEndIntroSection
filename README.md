### Links
https://www.w3schools.com/howto/howto_css_dropdown.asp  //dropdown menu
https://www.w3schools.com/js/js_htmldom_eventlistener.asp //eventlistener attachment
https://stackoverflow.com/questions/2234979/how-to-check-in-javascript-if-one-element-is-contained-within-another //check if element is child 
https://www.w3schools.com/cssref/tryit.asp?filename=trycss_text_white-space //text nowrap
https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Functions/Arrow_functions //arrow Functions
https://www.codegrepper.com/code-examples/javascript/javascript+replace+img+src // change img in JS
https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter //overlay
https://stackoverflow.com/questions/61940666/css-transition-on-filter-property //overlay transition

### What I learned:
HAMBURGER MENU with animation

	.hamburger{
		position: absolute;
		z-index: 3;
		right: 0%;
		padding: 2%;
		display: inline-block;
		background-color: transparent;
		border: 0;
		margin: 0;
		.ham__box{
			position: relative;
			display: inline-block;
			width: 35px;
			height: 25px;
			.ham__inner{
				@include hamburger-line;
				top: 50%;
				transform: translate(0,-50%);
				transition: background-color .1s .2s ease-in-out;
			}
			.ham__inner::before, .ham__inner::after{
				@include hamburger-line;

				content: "";
				transition: transform .3s ease-in-out;
				
			}
			.ham__inner::before{
				top: -10px;
			}
			.ham__inner::after{
				top: 10px;
			}
		}	
	}
	.ham-active .ham__inner::before{
		transform: translateY(10px) rotate(45deg);
		
	}
	.ham-active .ham__inner::after{
		transform: translateY(-10px) rotate(-45deg);
	}
	.ham-active .ham__box .ham__inner {
		background-color: transparent;
		transition: background-color .3s .1s ease-in-out;
	}
### Built with
- Semantic HTML5 markup
- CSS custom properties
- SCSS 
- Flexbox
- JavaScript
