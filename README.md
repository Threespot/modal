# Modal
A progressively enhanced modal window that supports multiple toggles and multiple close buttons.  

## Install
```bash
yarn add @threespot/modal
```

## Usage

### Javascript

```jsx
import Modal from "@threespot/modal";

const container = document.getElementById("modal");

// Opts are optional
const opts = {
	activeClasses: "active bg-red",
};

new Modal(container, opts);

// If you have more than one modal on the page
const containers = document.querySelectorAll(".Modal");

const opts = {
	activeClasses: "active bg-red",
};

// ES6
containers.forEach(container => new Modal(container, opts));

// ES5 
for (var i = 0, len = containers.length; i < len; i+=1) {
	new Modal(containers[i]);
}
```

**Styles needed** 

```scss
//------------------------------------------------------------------------
// Modal windows (required by modals.js)
//
// Content is shown by default and hidden once JS runs
//------------------------------------------------------------------------
.Modal {
  $selector: &;
  $open-speed: 250ms;
  $close-speed: 500ms;
  $z-index: 900;
  $bg-default: #fff; // This can be whatever you want the modal color to be

  background-color: rgba(#000, 0.5);// overlay color
  bottom: 0;
  left: 0;
  margin: 0 !important; // reset u-richtext div styles
  max-height: 0; // iOS fix
  opacity: 0;
  overflow: auto; // allows scrollig when content exceeds viewport height
  -webkit-overflow-scrolling: touch; // iOS “momentum” scrolling
  position: fixed;
  right: 0;
  top: 0;
  transition: max-height 0s linear $close-speed,
              visibility 0s linear $close-speed,
              opacity $close-speed;
  visibility: hidden; // hide from screen readers and keyboards until active
  z-index: $z-index; // must be greater than overlay

  // Styles will be applied when URL hash matches modal ID attribute
  &:not([aria-hidden]):target,
  &[aria-hidden="false"] {
    max-height: 100vh; // can’t set to “none” because that can't be transitioned
    opacity: 1;
    transition: max-height 0s linear 0s, visibility 0s linear 0s, opacity $open-speed;
    visibility: visible;
  }

  // Modal content wrapper
  &-content {
    @include fs-print-hide;
    background-color: $bg-default;
    opacity: 0;
    position: relative;
    transform: scale(0.95);
    transition: all $close-speed fs-easing('easeOutCubic');
    visibility: hidden;
    width: 100%;
    z-index: $z-index + 1;

    #{$selector}:not([aria-hidden]):target &,
    #{$selector}[aria-hidden="false"] & {
      opacity: 1;
      transform: scale(1);
      transition: all $open-speed fs-easing('easeOutCubic');
      visibility: visible;
    }
  }// end content

  // Close button
  &-close {
    padding: fs-rem(15px);
    position: fixed;
    right: 0;
    top: 0;
    transition: all 150ms ease-in-out;
    z-index: $z-index + 2;
  }// end close

  // if you want the modal window to take up the entire screen (optional)
  &--fullWidth {
    #{$selector}-content {
      min-height: 100%;
    }
  }

}// end Modal

```

**Minimum markdown needed**

```html
<!-- you can have multiple toggle buttons --> 
<a data-modal="foo">Open</a>

<!-- Div container -->
<!-- Modal must have an aria-label / aria-labelledby attribute -->
<!-- This modal window adds aria-hidden & role='dialog' out of the box -->
<div class="Modal" id="foo">
	<!-- It doesn't matter where this is located -->
	<!-- Codebase stores this by data-modal -->
	<!-- We add role="button" to the close button automatically -->
	<a class="Modal-close" href="#nav-modal-toggle" data-modal-close>Close</a>
	
	<!-- codebase stores this too by class name-->
	<div class="Modal-content">
	
	</div>
</div>
```

### API

**Required Data Attributes for markup**

`data-modal-close` tells Modal what button(s) can close the modal window. This can be anywhere inside of the `.Modal`

`data-modal="{YOUR_MODAL_ID_GOES_HERE}"` - toggle button(s) for the modal button must have this attribute with the `.Modal` corresponding ID as its value. This allow us to toggle the `.Modal` on and off.

 **`new Modal(el, [opts])`**

```jsx
// This is the Modal that wraps everything except for the toggle/open button(s). 
const el = document.querySelector('.Modal'); 

// Opts Config (optional)
{
	// {string} CSS transition speed to delay focus
  // Default value: 100
	transitionSpeed: "100", 

	// {string} Class(es) to apply on open modal
	// Multiples classes are stored inside a string delimited by a space
  // Default value: ''
  activeClasses: "is-active is-privacy-modal",
	
	// {string} Class of modal content wrapper
  // default value: "Modal-content"
	modalContentClass: "Modal-content", 
	
	// {function} Once Modal object is constructed, this function will be called
	// default value: null
	onReady: function() {
		console.log('Success!')
	}
}
```

### License

This is free software and may be redistributed under the terms of the MIT license.

### About Threespot

Threespot is an independent digital agency hell-bent on helping those, and only those, who are committed to helping others. Find out more at [https://www.threespot.com](https://www.threespot.com/).