
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


"./images5/i0001.png",         // 001    01
"./images5/i0002.png",         // 002    02
"./images5/i0003.png",         // 003    03
"./images5/i0004.png",         // 004    04
"./images5/i0005.png",         // 005    05
"./images5/i0006.png",         // 006    06
"./images5/i0007.png",         // 007    07
"./images5/i0008.png",         // 008    08
"./images5/i0009.png",         // 009    09
"./images5/i0010.png",         // 010    10
"./images5/i0011.png",         // 011    11
"./images5/i0012.png",         // 012    12
"./images5/i0013.png",         // 013    13
"./images5/i0014.png",         // 014    14
"./images5/i0015.png",         // 015    15
"./images5/i0016.png",         // 016    16
"./images5/i0017.png",         // 017    17
"./images5/i0018.png",         // 018    18
"./images5/i0019.png",         // 019    19
"./images5/i0020.png",         // 020    20
"./images5/i0021.png",         // 021    21
"./images5/i0022.png",         // 022    22
"./images5/i0023.png",         // 023    23
"./images5/i0024.png",         // 024    24
"./images5/i0025.png",         // 025    25
"./images5/i0026.png",         // 026    26
"./images5/i0027.png",         // 027    27
"./images5/i0028.png",         // 028    28
"./images5/I0044.png",         // 030    29
"./images5/I0045.png",         // 031    30
"./images5/I0047.png",         // 032    31
"./images5/I0048.png",         // 033    32
"./images5/I0050.png",         // 034    33
"./images5/I0051.png",         // 035    34
"./images5/I0052.png",         // 036    35
"./images5/I0053.png",         // 037    36
"./images5/I0054.png",         // 038    37
"./images5/I0055.png",         // 039    38
"./images5/I0056.png",         // 040    39
"./images5/I0057.png",         // 041    40
"./images5/I0058.png",         // 042    41
"./images5/I0059.png",         // 043    42
"./images5/I0060.png",         // 044    43
"./images5/I0061.png",         // 045    44
"./images5/I0062.png",         // 046    45
"./images5/I0068.png",         // 048    46
"./images5/I0069.png",         // 049    47
"./images5/I0071.png",         // 050    48
"./images5/I0072.png",         // 051    49
"./images5/I0073.png",         // 052    50
"./images5/I0074.png",         // 053    51
"./images5/I0075.png",         // 054    52
"./images5/I0076.png",         // 055    53
"./images5/I0077.png",         // 056    54
"./images5/I0078.png",         // 056    54
"./images5/I0079.png",         // 058    55
"./images5/I0080.png",         // 059    56
"./images5/I0081.png",         // 059    56
"./images5/I0082.png",         // 061    57
"./images5/I0109.png",         // 062    58
"./images5/I0113.png",         // 066    59
"./images5/I0114.png",         // 067    60
"./images5/I0115.png",         // 068    61
"./images5/I0117.png",         // 070    62
"./images5/I0118.png",         // 071    63
"./images5/I0132.png",         // 085    64
"./images5/I0134.png",         // 087    65
"./images5/I0135.png",         // 088    66
"./images5/I0136.png",         // 089    67
"./images5/I0138.png",         // 091    68
"./images5/I0139.png",         // 092    69
"./images5/I0140.png",         // 093    70
"./images5/I0142.png",         // 095    71
"./images5/I0143.png",         // 096    72
"./images5/I0144.png",         // 097    73
"./images5/I0146.png",         // 099    74
"./images5/I0147.png",         // 100    75
"./images5/I0148.png",         // 101    76
"./images5/I0150.png",         // 103    77
"./images5/I0151.png",         // 104    78
"./images5/I0152.png",         // 105    79
"./images5/I0154.png",         // 107    80
"./images5/I0155.png",         // 108    81
"./images5/I0217.png",         // 112    82



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
  
  
  
  
  