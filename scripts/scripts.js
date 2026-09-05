
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
                        streamBtn.textContent = "Full Off";
                    })
                    .catch((err) => {
                        alert(`Error attempting to enable fullscreen: ${err.message}`);
                    });
            } else {
                // If already in fullscreen, exit it
                document.exitFullscreen();
                streamBtn.textContent = "Full Off";

            }
        });

        /* Optional: Listen for the Esc key or external changes to update the button text */
        document.addEventListener('fullscreenchange', () => {
            if (!document.fullscreenElement) {
                streamBtn.textContent = "Full On";

            }
        });
    /* </script> */










    /* <script> */
        // REPLACE THESE WITH YOUR EXACT PNG FILE NAMES
        const images = [


"./images/a0000 a.png",       // 001    01
"./images/a0000 b.png",       // 002    02
"./images/a0000 c.png",       // 003    03
"./images/a0000 d.png",       // 004    04
"./images/a0000 e.png",       // 005    05
"./images/a0000 f.png",       // 006    06
"./images/a0000 g.png",       // 007    07
"./images/a0000 h.png",       // 008    08
"./images/a0000 i.png",       // 009    09
"./images/a0001.png",         // 010    10
"./images/a0002.png",         // 011    11
"./images/a0003.png",         // 012    12
"./images/a0004.png",         // 013    13
"./images/a0005.png",         // 014    14
"./images/a0006.png",         // 015    15
"./images/a0007.png",         // 016    16
"./images/a0008.png",         // 017    17
"./images/a0009.png",         // 018    17
"./images/a0010.png",         // 019    17
"./images/a0011.png",         // 020    17
"./images/a0012.png",         // 021    17
"./images/a0013.png",         // 022    17
"./images/a0014.png",         // 023    17
"./images/a0015.png",         // 024    17



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

//alert(document.getElementById('image-container').innerHTML)
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




//here
 // Example counter variable
let counter = 0;

function Counterheight() {


        // Optional: Smoothly scroll down to show the new space
        window.scrollBy({ top: 300, behavior: 'smooth' });
    }







/*     <script> */
/*
        function toggleFullscreen() {
            // Check if the browser is already in fullscreen mode
            if (!document.fullscreenElement) {
                // Request fullscreen on the entire document element (the whole page)
                document.documentElement.requestFullscreen()
                    .then(() => {
                        document.getElementById('fullscreenBtn').innerText = "Exit Fullscreen";
                    })
                    .catch(err => {
                        alert(`Error attempting to enable full-screen mode: ${err.message}`);
                    });
            } else {
                // Exit fullscreen mode
                document.exitFullscreen();
                document.getElementById('fullscreenBtn').innerText = "Go Fullscreen";
            }
        }

        // Optional: Update button text if the user exits using the 'Esc' or 'F11' key
        document.addEventListener('fullscreenchange', () => {
            const btn = document.getElementById('fullscreenBtn');
            if (document.fullscreenElement) {
                btn.innerText = "Exit Fullscreen";
            } else {
                btn.innerText = "Go Fullscreen";
            }
        });
/*     </script> */



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
  
  
  
  
  