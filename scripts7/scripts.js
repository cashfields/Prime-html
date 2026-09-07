

/* <script> */
  // JavaScript
  const button = document.getElementById("submitBtn");
  
  button.addEventListener("click", () => {
    const name = document.getElementById("goto").value;
    console.log(name); // Logs whatever the user typed
	/* alert(name); */
	currentStep=name-1; // text counter
   currentIndex=name-1; // image counter
    /* alert( currentStep + 7); */

	increment()  // update text
	updateVisibility();
 	 updateDisplay();
	
	goto.value = "";
	
  });

/* </script> */



/* <script> */

// Initialize the counter and find total paragraphs
let currentStep = 1;
const totalSteps = document.querySelectorAll('.step').length;

function updateVisibility() {
  // Update the counter text on the screen
  //document.getElementById('counter-display').textContent = currentStep;

  // Loop through all paragraphs to show the active one and hide the rest
  for (let i = 1; i <= totalSteps; i++) {
    const paragraph = document.getElementById(`step-${i}`);
    if (i === currentStep) {
      paragraph.style.display = 'block';
    } else {
      paragraph.style.display = 'none';
    }
  }
}

function increment() {
  if (currentStep < totalSteps)
  {
    currentStep++;
    updateVisibility();
  }
  else
  {
          // wrap up and around
          currentStep =0;
  }

}

function decrement() {
  if (currentStep > 1)
  {
    currentStep--;
    updateVisibility();
  }
  else
  {
                  // wrap down and around
          currentStep =totalSteps+1;
  }



}





    /* </script> */

/*     <!-- 2. The JavaScript Logic --> */
    /* <script> */
        const streamBtn = document.getElementById('toggleScript');
                // Using standard quotes and \n

        streamBtn.addEventListener('click', () => {
            // Check if the document is already in fullscreen mode
            if (!document.fullscreenElement) {
                // If not, request fullscreen on the entire document element (the whole page)
                document.documentElement.requestFullscreen()
                    .then(() => {
                        streamBtn.textContent = "Exit";
                    })
                    .catch((err) => {
                        alert(`Error attempting to enable fullscreen: ${err.message}`);
                    });
            } else {
                // If already in fullscreen, exit it
                document.exitFullscreen();
                streamBtn.textContent = "Full";

            }
        });

        /* Optional: Listen for the Esc key or external changes to update the button text */
        document.addEventListener('fullscreenchange', () => {
            if (!document.fullscreenElement) {
                streamBtn.textContent = "Full";

            }
        });
    /* </script> */










    /* <script> */
        // REPLACE THESE WITH YOUR EXACT PNG FILE NAMES
        const images = [
"./images7/01 ps.png",                                            //01
"./images7/02 ps by 4.png",                                       //02
"./images7/03 ps by 4 with 5 00.png",                             //03
"./images7/04 ps next 30 00.png",                                 //04
"./images7/05 ps next 30 formulas 00.png",                        //05
"./images7/06 ps pattern 00.png",                                 //06
"./images7/06 ps pattern 01.png",                                 //07
"./images7/08 ps pattern delta 00.png",                           //08
"./images7/08 ps pattern delta 01.png",                           //09
"./images7/09 what is missing 00.png",                            //10
"./images7/10 longer 00.png",                                     //11
"./images7/10 longer 01.png",                                     //12
"./images7/10 longer 02.png",                                     //13
"./images7/10 longer 03.png",                                     //14
"./images7/10 longer 04.png",                                     //15
"./images7/10 longer 05.png",                                     //16
"./images7/10 longer 06.png",                                     //17
"./images7/10 longer 07.png",                                     //18
"./images7/11 detail diff delta next box 00.png",                 //19
"./images7/12 what is missing 1 00.png",                          //20
"./images7/13 what is missing 1a 00.png",                         //21
"./images7/14 what is missing 2 00.png",                          //22
"./images7/15 what is missing 2a 00.png",                         //23
"./images7/16 what is missing delta 3 00.png",                    //24
"./images7/17 what is missing delta 3a 00.png",                   //25
"./images7/17 what is missing delta 3a 01.png",                   //26
"./images7/17 what is missing delta 3a 02.png",                   //27
"./images7/17 what is missing delta 3a 03.png",                   //28
"./images7/18 what about the +1 -1 00.png",                       //29
"./images7/19 +1 -1 even odd1 00.png",                            //30
"./images7/20 where are the others 00.png",                       //31
"./images7/20 where are the others 01.png",                       //32
"./images7/21 where are the others 01.png",                       //33
"./images7/21 where are the others 02.png",                       //34
"./images7/22 where are the others 02.png",                       //35
"./images7/22 where are the others 03.png",                       //36
"./images7/22 where are the others 04.png",                       //37
"./images7/22 where are the others 05.png",                       //38
"./images7/22 where are the others 06.png",                       //39
"./images7/22 where are the others 07.png",                       //40
"./images7/22 where are the others 08.png",                       //41
"./images7/22 where are the others 09.png",                       //42
"./images7/22 where are the others 10.png",                       //43
"./images7/22 where are the others 11.png",                       //44
"./images7/22 where are the others 12 last.png",                  //45
"./images7/skip.png",                                             //46
"./images7/skip2.png",                                            //47
"./images7/Blue Thatch.bmp",                                      //48
"./images7/Black Thatch.bmp",                                     //49
"./images7/Black Magic.png",                                      //50

        ];

        // Use a relative path if your PNGs are in a specific folder (e.g., 'images/image1.png')
        // const images = ['images/slide1.png', 'images/slide2.png'];

        let currentIndex = 0;

        function updateDisplay() {
            const imgElement = document.getElementById('walkthrough-img');
            const counterElement = document.getElementById('counter');
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');

            imgElement.src = images[currentIndex];
			//alert(images[currentIndex])
			viewmebig = images[currentIndex]
			//alert(viewmebig)
			//alert(imgElement.src)
            counterElement.textContent = `${currentIndex + 1} of ${images.length}`;

            // Handle button states
//            prevBtn.disabled = currentIndex === 0;
//            nextBtn.disabled = currentIndex === images.length - 1;
        }

        function nextImage() {
            if (currentIndex < images.length - 1) {
                currentIndex++;
                updateDisplay();
            }
                        else
                        {
        // set wrap up
                                                  increment();
                                  currentIndex = 0;

                                  updateDisplay();


                        }
        }

//        function prevImage() {
//            if (currentIndex > 0) {
//                currentIndex--;
//                updateDisplay();
//            }

        function prevImage()
                        {
           if (currentIndex > 0) {
                currentIndex--;
                updateDisplay();
            }
            else

                {
        // set wrap down
                decrement();
                currentIndex = images.length-1;

                                  updateDisplay();


           }

        }

        // Initialize on load
        if (images.length > 0) {
            updateDisplay();
        } else {
            document.getElementById('image-container').innerHTML = '<p>No images found.</p>';
        }
    /* </script> */



  function viewbig() {
/* alert("here " + viewmebig ) */
window.open("viewbig.html?image="+viewmebig, "_blank");

  }
  
  
  /* need to cycle the first screen up and down , with a pause */
  /* this will sync the paragraph number text back to 1 */
  window.addEventListener('load', (event) => {
    console.log('The page, including images and stylesheets, is fully loaded.');
    // Your code here
	
	increment()
	setTimeout(() => {
    console.log("This runs 1 second later");
}, 1000); 
	decrement()
});
  
  
  
  
  