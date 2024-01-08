/*Name this external file gallery.js*/

function upDate(previewPic) {
  /* In this function you should 
     1) change the url for the background image of the div with the id = "image" to the source file of the preview image */

  // check if event is triggered
  console.log("upDate function triggered");

  // Get the div with the id "image"
  var imageDiv = document.getElementById("image");

  // print info about previewPic var
  console.log("Preview Image alt:", previewPic.alt);
  console.log("Preview Image src:", previewPic.src);

  // Change the background image of the div
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";

  /* 2) Change the text of the div with the id = "image" to the alt text of the preview image */
  imageDiv.textContent = previewPic.alt;

  // check work
  console.log("New background image URL:", imageDiv.style.backgroundImage);
  console.log("New text content:", imageDiv.textContent);
}

function unDo() {
  /* In this function you should 
 1) Update the url for the background image of the div with the id = "image" back to the orginal-image.  You can use the css code to see what that original URL was */

  // Log that the function is triggered
  console.log("unDo function triggered");

  // Get the div with the id "image"
  var imageDiv = document.getElementById("image");

  // Log current state before changes
  console.log("Current background image URL:", imageDiv.style.backgroundImage);
  console.log("Current text content:", imageDiv.textContent);

  // Update the background image of the div back to the original If the original image was set in CSS, you might just clear the inline style
  imageDiv.style.backgroundImage = "";

  /* 2) Change the text  of the div with the id = "image" back to the original text.  You can use the html code to see what that original text was */
  imageDiv.textContent = "Hover over an image below to display here.";

  // Log new state after changes
  console.log("New background image URL (should be empty if reset):", imageDiv.style.backgroundImage);
  console.log("New text content:", imageDiv.textContent);
}

function OnFocus(previewPic) {
  let Ximg = document.getElementById("image");
  let prevSrc = previewPic.src;
  Ximg.style.backgroundImage = "url('" + prevSrc + "')";

  let prevAlt = previewPic.alt;
  Ximg.textContent = prevAlt;

  console.log("Element focused");

}

function onBlur() {
  let original_img = document.getElementById("image");
  original_img.style.backgroundImage = "url('')";

  original_img.innerHTML = "Hover over an image below to display here.";

  console.log("Element blurred");


}

function addTabIndexToImages() {
  console.log("Page loaded, adding tabindex to images.");

  // Get all images with class 'preview'
  var images = document.getElementsByClassName('preview');

  // Loop through each image and add tabindex attribute
  for (var i = 0; i < images.length; i++) {
    images[i].setAttribute('tabindex', '0');
    console.log("Tabindex added to image with src:", images[i].src);
  }
}
