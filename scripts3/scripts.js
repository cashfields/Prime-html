
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


"./images3/i0001.png",         // 001
"./images3/i0002.png",         // 002
"./images3/i0003.png",         // 003
"./images3/i0004.png",         // 004
"./images3/i0005.png",         // 005
"./images3/i0006.png",         // 006
"./images3/i0007.png",         // 007
"./images3/i0008.png",         // 008
"./images3/i0009.png",         // 009
"./images3/i0010.png",         // 010
"./images3/i0011.png",         // 011
"./images3/i0012.png",         // 012
"./images3/i0013.png",         // 013
"./images3/i0014.png",         // 014
"./images3/i0015.png",         // 015
"./images3/i0016.png",         // 016
"./images3/i0017.png",         // 017
"./images3/i0018.png",         // 018
"./images3/i0019.png",         // 019
"./images3/i0020.png",         // 020
"./images3/i0021.png",         // 021
"./images3/i0022.png",         // 022
"./images3/i0023.png",         // 023
"./images3/i0024.png",         // 024
"./images3/i0025.png",         // 025
"./images3/i0026.png",         // 026
"./images3/i0027.png",         // 027
"./images3/i0028.png",         // 028
"./images3/I0029.png",         // 029
"./images3/I0030.png",         // 030
"./images3/I0031.png",         // 031
"./images3/I0032.png",         // 032
"./images3/I0033.png",         // 033
"./images3/I0034.png",         // 034
"./images3/I0035.png",         // 035
"./images3/I0036.png",         // 036
"./images3/I0037.png",         // 037
"./images3/I0038.png",         // 038
"./images3/I0039.png",         // 039
"./images3/I0040.png",         // 040
"./images3/I0041.png",         // 041
"./images3/I0042.png",         // 042
"./images3/I0043.png",         // 043
"./images3/I0044.png",         // 044
"./images3/I0045.png",         // 045
"./images3/I0046.png",         // 046
"./images3/I0047.png",         // 047
"./images3/I0048.png",         // 048
"./images3/I0049.png",         // 049
"./images3/I0050.png",         // 050
"./images3/I0051.png",         // 051
"./images3/I0052.png",         // 052
"./images3/I0053.png",         // 053
"./images3/I0054.png",         // 054
"./images3/I0055.png",         // 055
"./images3/I0056.png",         // 056
"./images3/I0057.png",         // 057
"./images3/I0058.png",         // 058
"./images3/I0059.png",         // 059
"./images3/I0060.png",         // 060
"./images3/I0061.png",         // 061
"./images3/I0062.png",         // 062
"./images3/I0063.png",         // 063
"./images3/I0064.png",         // 064
"./images3/I0065.png",         // 065
"./images3/I0066.png",         // 066
"./images3/I0067.png",         // 067
"./images3/I0068.png",         // 068
"./images3/I0069.png",         // 069
"./images3/BlueThatch.png",         // 070
"./images3/I0071.png",         // 071
"./images3/I0072.png",         // 072
"./images3/I0073.png",         // 073
"./images3/I0074.png",         // 074
"./images3/I0075.png",         // 075
"./images3/I0076.png",         // 076
"./images3/I0077.png",         // 077
"./images3/I0078.png",         // 078
"./images3/I0079.png",         // 079
"./images3/I0080.png",         // 080
"./images3/I0081.png",         // 081
"./images3/I0082.png",         // 082
"./images3/BlueThatch.png",         // 083
"./images3/BlueThatch.png",         // 084
"./images3/BlueThatch.png",         // 085
"./images3/BlueThatch.png",         // 086
"./images3/I0087.png",         // 087
"./images3/I0088.png",         // 088
"./images3/I0089.png",         // 089
"./images3/I0090.png",         // 090
"./images3/BlueThatch.png",         // 091
"./images3/BlueThatch.png",         // 092
"./images3/BlueThatch.png",         // 093
"./images3/BlueThatch.png",         // 094
"./images3/BlueThatch.png",         // 095
"./images3/BlueThatch.png",         // 096
"./images3/BlueThatch.png",         // 097
"./images3/BlueThatch.png",         // 098
"./images3/BlueThatch.png",         // 099
"./images3/BlueThatch.png",         // 100
"./images3/BlueThatch.png",         // 101
"./images3/BlueThatch.png",         // 102
"./images3/BlueThatch.png",         // 103
"./images3/BlueThatch.png",         // 104
"./images3/BlueThatch.png",         // 105
"./images3/BlueThatch.png",         // 106
"./images3/BlueThatch.png",         // 107
"./images3/BlueThatch.png",         // 108
"./images3/I0109.png",         // 109
"./images3/I0110.png",         // 110
"./images3/I0111.png",         // 111
"./images3/I0112.png",         // 112
"./images3/I0113.png",         // 113
"./images3/I0114.png",         // 114
"./images3/I0115.png",         // 115
"./images3/I0116.png",         // 116
"./images3/I0117.png",         // 117
"./images3/I0118.png",         // 118
"./images3/I0119.png",         // 119
"./images3/I0120.png",         // 120
"./images3/I0121.png",         // 121
"./images3/I0122.png",         // 122
"./images3/I0123.png",         // 123
"./images3/I0124.png",         // 124
"./images3/I0125.png",         // 125
"./images3/I0126.png",         // 126
"./images3/I0127.png",         // 127
"./images3/I0128.png",         // 128
"./images3/I0129.png",         // 129
"./images3/I0130.png",         // 130
"./images3/I0131.png",         // 131
"./images3/I0132.png",         // 132
"./images3/I0133.png",         // 133
"./images3/I0134.png",         // 134
"./images3/I0135.png",         // 135
"./images3/I0136.png",         // 136
"./images3/I0137.png",         // 137
"./images3/I0138.png",         // 138
"./images3/I0139.png",         // 139
"./images3/I0140.png",         // 140
"./images3/I0141.png",         // 141
"./images3/I0142.png",         // 142
"./images3/I0143.png",         // 143
"./images3/I0144.png",         // 144
"./images3/I0145.png",         // 145
"./images3/I0146.png",         // 146
"./images3/I0147.png",         // 147
"./images3/I0148.png",         // 148
"./images3/I0149.png",         // 149
"./images3/I0150.png",         // 150
"./images3/I0151.png",         // 151
"./images3/I0152.png",         // 152
"./images3/I0153.png",         // 153
"./images3/I0154.png",         // 154
"./images3/I0155.png",         // 155
"./images3/I0156.png",         // 156
"./images3/I0157.png",         // 157
"./images3/I0158.png",         // 158
"./images3/I0159.png",         // 159
"./images3/I0160.png",         // 160
"./images3/I0161.png",         // 161
"./images3/I0162.png",         // 162
"./images3/I0163.png",         // 163
"./images3/I0164.png",         // 164
"./images3/I0165.png",         // 165
"./images3/I0166.png",         // 166
"./images3/I0167.png",         // 167
"./images3/I0168.png",         // 168
"./images3/I0169.png",         // 169
"./images3/I0170.png",         // 170
"./images3/I0171.png",         // 171
"./images3/I0172.png",         // 172
"./images3/I0173.png",         // 173
"./images3/I0174.png",         // 174
"./images3/I0175.png",         // 175
"./images3/I0176.png",         // 176
"./images3/I0177.png",         // 177
"./images3/I0178.png",         // 178
"./images3/I0179.png",         // 179
"./images3/I0180.png",         // 180
"./images3/I0181.png",         // 181
"./images3/I0182.png",         // 182
"./images3/I0183.png",         // 183
"./images3/I0184.png",         // 184
"./images3/I0185.png",         // 185
"./images3/I0186.png",         // 186
"./images3/I0187.png",         // 187
"./images3/I0188.png",         // 188
"./images3/I0189.png",         // 189
"./images3/I0190.png",         // 190
"./images3/I0191.png",         // 191
"./images3/I0192.png",         // 192
"./images3/I0193.png",         // 193
"./images3/I0194.png",         // 194
"./images3/I0195.png",         // 195
"./images3/I0196.png",         // 196
"./images3/I0197.png",         // 197
"./images3/I0198.png",         // 198
"./images3/I0199.png",         // 199
"./images3/I0200.png",         // 200
"./images3/I0201.png",         // 201
"./images3/I0202.png",         // 202
"./images3/I0203.png",         // 203
"./images3/I0204.png",         // 204
"./images3/I0205.png",         // 205
"./images3/I0206.png",         // 206
"./images3/I0207.png",         // 207
"./images3/I0208.png",         // 208
"./images3/I0209.png",         // 209
"./images3/I0210.png",         // 210
"./images3/I0211.png",         // 211
"./images3/I0212.png",         // 212
"./images3/I0213.png",         // 213
"./images3/I0214.png",         // 214
"./images3/I0215.png",         // 215
"./images3/I0216.png",         // 216
"./images3/I0217.png",         // 217
"./images3/I0218.png",         // 218
"./images3/I0219.png",         // 219
"./images3/I0220.png",         // 220




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
  
  
  
  
  