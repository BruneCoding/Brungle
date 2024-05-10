
        window.onload = function() {
      var currentValue = parseInt(localStorage.getItem('counter')) || 0;
      document.getElementById('counter').textContent = currentValue;
    };
      document.addEventListener("DOMContentLoaded", function() {
    // Get the input element
    window.onload = function() {
      var currentValue = parseInt(localStorage.getItem('counter')) || 0;
      document.getElementById('counter').textContent = currentValue;
    };
                              var searchInput = document.getElementById("searchInput");

 searchInput.addEventListener("keyup", function(event) {
   const searchIcons = document.querySelectorAll('.search-icons');
    const assDiv = document.querySelector('.ass');

  assDiv.classList.add('searchIcon');
            setTimeout(() => {
                assDiv.classList.remove('searchIcon');

        if (event.keyCode === 13) {
            incrementCounter()
            var query = searchInput.value;
            var encodedQuery = encodeURIComponent(query);
            var searchURL = "https://www.google.com/search?q=" + encodedQuery; // Google search URL
            window.location.href = searchURL; // Redirect to Google search URL on the current tab
            var currentValue = parseInt(localStorage.getItem('counter')) || 0;
      // Increment the counter value by
         }, 1000);
        }
    });
});

 document.addEventListener("DOMContentLoaded", function() {
     const toggle = document.querySelector('.toggle');
     const layoutContainer = document.querySelector('.website-layout-container');
 
     toggle.addEventListener('click', function() {
         layoutContainer.classList.toggle('show');
     });
 });
 
 function changeColor(color) {
     document.body.style.backgroundColor = color;
 }
 
 function showCustomColor() {
     var customColorInput = document.getElementById('custom-color');
     customColorInput.style.display = 'inline-block';
 }
 
 function addCustomColor() {
     var customColorInput = document.getElementById('custom-color');
     var customColor = customColorInput.value;
     if (/^#[0-9A-F]{6}$/i.test(customColor)) {
         var colorCircle = document.createElement('div');
         colorCircle.className = 'color-circle';
         colorCircle.style.backgroundColor = customColor;
         colorCircle.setAttribute('onclick', 'changeColor("' + customColor + '")');
         var addButton = document.getElementById('add-button');
         document.getElementById('theme-changer').insertBefore(colorCircle, addButton);
         customColorInput.value = '';
         customColorInput.style.display = 'none';
     } else {
         alert('Please enter a valid hex color code.');
     }
 }


 let count = 2;

 function moveBoth() {
    const open = document.querySelector('.open');
    const sidebar = document.querySelector('.sidebar');

    if (count % 2 === 0) {
        open.style.transform = 'translate(43vw, 0px) rotate(270deg)';
        sidebar.style.transform = 'translate(48vw, 0px)';
        console.log('Sidebar opened by 146.90.75.207');
    } else {
    open.style.transform = 'translate(49vw, 0px) rotate(90deg)';
        sidebar.style.transform = 'translate(53vw, 0px)';
        console.log('Sidebar closed by 146.90.75.207');
    }

    count++;
}


 

 function incrementCounter() {
      // Get the current counter value from localStorage or initialize it to 0
      var currentValue = parseInt(localStorage.getItem('counter')) || 0;
      // Increment the counter value by 1
      currentValue++;
      // Update the counter value in localStorage
      localStorage.setItem('counter', currentValue);
      // Update the counter value on the page
      document.getElementById('counter').textContent = currentValue;
    }



    // Load the counter value from localStorage on page load
    window.onload = function() {
      var currentValue = parseInt(localStorage.getItem('counter')) || 0;
      document.getElementById('counter').textContent = currentValue;
    };




    function resetCounter() {
    // Set the counter value to 0
    var currentValue = 0;
    // Update the counter value in localStorage
    localStorage.setItem('counter', currentValue);
    // Update the counter value on the page
    document.getElementById('counter').textContent = currentValue;
}
















































document.addEventListener("DOMContentLoaded", function() {
  // Get reference to the color element
  var colorElement = document.getElementById("brunebot");
  
  // Get reference to the colornav element
  var colorNavElement = document.getElementById("pro-feature");
  
  // Add click event listener to the color element
  colorElement.addEventListener("click", function() {
    // Check if colornav is currently hidden
    if (colorNavElement.style.display === "none") {
      // If hidden, show colornav by setting display to block
      colorNavElement.style.display = "block";

      // Wait for 3 seconds, then hide colornav again
      wait(10000, () => {
        colorNavElement.style.display = "none";
      });
    } else {
      // If already shown, hide colornav by setting display to none
      colorNavElement.style.display = "none";
    }
  });
});

// Simple wait function
function wait(milliseconds, callback) {
  setTimeout(callback, milliseconds);
}


function showThemeChanger() {
    // Get reference to the theme changer element
    var themeChanger = document.getElementById('theme-changer');

    // Toggle the display property of the theme changer
    if (themeChanger.style.display === "none" || themeChanger.style.display === "") {
        themeChanger.style.display = "block";
    } else {
        themeChanger.style.display = "none";
    }
}

const abras = document.querySelector('.timetable-container');
abras.style.display = "none";

function showTimetable() {
    // Get reference to the theme changer element
    var themeChanger = document.querySelector('.timetable-container');

    // Toggle the display property of the theme changer
    if (themeChanger.style.display === "none" || themeChanger.style.display === "") {
        themeChanger.style.display = "block";
    } else {
        themeChanger.style.display = "none";
    }
}

function showShop() {
    // Get reference to the theme changer element
    var themeChanger = document.querySelector('.container');

    // Toggle the display property of the theme changer
    if (themeChanger.style.display === "none" || themeChanger.style.display === "") {
        themeChanger.style.display = "block";
    } else {
        themeChanger.style.display = "none";
    }
}























// Initialize variables
let brunglePoints = parseInt(localStorage.getItem('counter')); // Initialize with counter value or default value
let boughtItems = 0;

// Update display
function updateDisplay() {
  document.getElementById('brunglePoints').textContent = brunglePoints;
  document.getElementById('boughtItems').textContent = boughtItems;
}

// Buy item function
function buyItem(price) {
  let brunglePointsElement = document.getElementById('brunglePoints');
  let boughtItemsElement = document.getElementById('boughtItems');
  
  if (brunglePoints >= price) {
    brunglePoints -= price;
    boughtItems++;
    brunglePointsElement.textContent = brunglePoints;
    boughtItemsElement.textContent = boughtItems;
    // Update cloud variable here
    updateCloudVariable(brunglePoints, boughtItems);
    alert('Item bought successfully!');
  } else {
    alert('Not enough Brungle Points!');
  }
}

// Simulate updating cloud variable
function updateCloudVariable(points, items) {
  // You can replace this with your actual cloud variable update logic
  console.log(`Cloud variable updated: Brungle Points = ${points}, Bought Items = ${items}`);
}

// Initial display update
updateDisplay();








function toggleTables() {
      var table1 = document.getElementById('table1');
      var table2 = document.getElementById('table2');

      if (table1.style.display === 'block') {
        table1.style.display = 'none';
        table2.style.display = 'block';
      } else {
        table1.style.display = 'block';
        table2.style.display = 'none';
      }
    }






    // admin tools

    function infa() {
  // Get the current counter value from localStorage or initialize it to 0
  let currentValue = parseInt(localStorage.getItem('counter')) || 0;
  
  // Increase the counter value by 10000
  currentValue += 10000;
  
  // Update the counter value in localStorage
  localStorage.setItem('counter', currentValue.toString());
  
  // Display the updated counter value
  console.log('Counter increased by 10000. New value: ' + currentValue);
}

// Call the function to increase the counter value by 10000
increaseCounterBy10000();

         
         /*-- Made with Zdog --*/

// setting up Zdog illustration element
const illoElem = document.querySelector('.illo');
const illoSize = 50;
const minWindowSize = Math.min( window.innerWidth - 20, window.innerHeight - 60 );
const zoom = Math.floor( (minWindowSize / illoSize) * 0.75 );
illoElem.setAttribute( 'width', illoSize * zoom );
illoElem.setAttribute( 'height', illoSize * zoom);

// Zdog math variables
const TAU = Zdog.TAU;

// boolean flag for spin 
let isSpinning = true;

// illustration base
const illo = new Zdog.Illustration({
  element: illoElem,
  zoom: zoom,
  dragRotate: true,
  onDragStart: function() {
    isSpinning = false;
  },
  rotate: { y: TAU/4 }
});

// frontside earth
const head = new Zdog.Hemisphere({
  addTo: illo,
  diameter: 40,
  stroke: false,
  color: '#1976B5',
});

// backside earth
new Zdog.Hemisphere({
  addTo: head,
  diameter: 40,
  stroke: false,
  color: '#105AAA',
  rotate: { x: TAU/2 }
});

// light green lands
const land1 = new Zdog.Shape({
  path: [
    { x: 0, y:  0, z:  0 },
    { x: -2, y: 0, z: 5 },
  ],
  translate: { x: 17, y: 5, z: 4 },
  color: "#6FCC50",
  closed: false,
  fill: true,
  stroke: 7,
  addTo: head,
});
land1.copy({
  scale: { x: -1 },
  translate: { x: -17, y: 0, z: 4 },
})

const land2 = new Zdog.Shape({
  path: [
    { x: 0, y:  0, z:  0 },
    { x: -10, y: 0, z: 4 },
  ],
  translate: { x: 13, y: -10, z: 10 },
  color: "#6FCC50",
  closed: false,
  fill: true,
  stroke: 7,
  addTo: head,
});

new Zdog.Shape({
  path: [
    { x: 0, y:  0, z:  0 },
    { x: 5, y: 0, z: 4 },
  ],
  translate: { x: -13, y: -10, z: 10 },
  color: "#6FCC50",
  closed: false,
  fill: true,
  stroke: 7,
  addTo: head,
});

const land3 = new Zdog.Shape({
  path: [
    { x: 0, y:  0, z:  0 },
    { x: -2, y: 0, z: 3 },
  ],
  translate: { x: 13, y: 13, z: 7 },
  color: "#6FCC50",
  closed: false,
  fill: true,
  stroke: 4,
  addTo: head,
});
land3.copy({
  scale: { x: -1 },
  translate: { x: -13, y: 13, z: 7 },
})

const land4 = new Zdog.Shape({
  path: [
    { x: 0, y:  0, z:  0 },
    { x: -7, y: 0, z: 3 },
  ],
  translate: { x: 10, y: -3, z: 16 },
  color: "#6FCC50",
  closed: false,
  fill: true,
  stroke: 4,
  addTo: head,
});
land4.copy({
  scale: { x: -1 },
  translate: { x: -10, y: 3, z: 16 },
})

// light clouds
const cloud1 = new Zdog.Shape({
  path: [
    { x: 0, y:  0, z:  0 },
    { x: -2, y: 0, z: 5 },
  ],
  translate: { x: 20, y: 7, z: 4 },
  color: "#fff",
  closed: false,
  fill: true,
  stroke: 5,
  addTo: head,
});

new Zdog.Shape({
  path: [
    { x: 0, y:  0, z:  0 },
    { x: 3, y: 0, z: 1 },
  ],
  translate: { x: -5, y: 7, z: 20 },
  color: "#fff",
  closed: false,
  fill: true,
  stroke: 5,
  addTo: head,
});

const cloud2 = new Zdog.Shape({
  path: [
    { x: 0, y:  0, z:  0 },
    { x: -5, y: 0, z: 10 },
  ],
  translate: { x: 23, y: 2, z: 4 },
  color: "#fff",
  closed: false,
  fill: true,
  stroke: 4,
  addTo: head,
});
cloud2.copy({
  scale: { x: -1 },
  translate: { x: -23, y: 2, z: 4 },
})

const cloud3 = new Zdog.Shape({
  path: [
    { x: 0, y:  0, z:  0 },
    { x: -2, y: 0, z: 5 },
  ],
  translate: { x: 20, y: -2, z: 7 },
  color: "#fff",
  closed: false,
  fill: true,
  stroke: 2,
  addTo: head,
});
cloud3.copy({
  scale: { x: -1 },
  translate: { x: -20, y: -2, z: 7 },
})

const cloud4 = new Zdog.Shape({
  path: [
    { x: 0, y:  0, z:  0 },
    { x: -2, y: 0, z: 5 },
  ],
  translate: { x: 18, y: -10, z: 7 },
  color: "#fff",
  closed: false,
  fill: true,
  stroke: 3,
  addTo: head,
});
cloud4.copy({
  scale: { x: -1 },
  translate: { x: -18, y: -10, z: 7 },
})

// dark clouds
const cloud5 = new Zdog.Shape({
  path: [
    { x: 0, y:  0, z:  0 },
    { x: 0, y: 0, z: -3 },
  ],
  translate: { x: 20, y: -8, z: -3 },
  color: "#A6B3DA",
  closed: false,
  fill: true,
  stroke: 3,
  addTo: head,
});
cloud5.copy({
  scale: { x: -1 },
  translate: { x: -20, y: -8, z: -3 },
})

const cloud6 = new Zdog.Shape({
  path: [
    { x: 0, y:  0, z:  0 },
    { x: -4, y: 0, z: -7 },
  ],
  translate: { x: 20, y: 0, z: -8 },
  color: "#A6B3DA",
  closed: false,
  fill: true,
  stroke: 6,
  addTo: head,
});
cloud6.copy({
  scale: { x: -1 },
  translate: { x: -20, y: 0, z: -8 },
})

const cloud7 = new Zdog.Shape({
  path: [
    { x: 0, y:  0, z:  0 },
    { x: -3, y: 0, z: -3 },
  ],
  translate: { x: 15, y: 15, z: -8 },
  color: "#A6B3DA",
  closed: false,
  fill: true,
  stroke: 3,
  addTo: head,
});
cloud7.copy({
  scale: { x: -1 },
  translate: { x: -15, y: 15, z: -8 },
})

new Zdog.Shape({
  path: [
    { x: 0, y:  0, z: 0 },
    { x: -5, y:  0, z: 0 },
  ],
  translate: { x: -5, y: -4, z: -18 },
  color: "#A6B3DA",
  fill: true,
  stroke: 8,
  addTo: head,
});

// dark green lands
const land5 = new Zdog.Shape({
  path: [
    { x: 0, y:  0, z: 0 },
    { x: 2.5, y:  0, z: 2 },
  ],
  translate: { x: 7, y: 7, z: -16 },
  color: "#489268",
  fill: true,
  stroke: 4,
  addTo: head,
});
land5.copy({
  scale: { x: -1 },
  translate: { x: -7, y: 12, z: -16 },
})

const land6 = new Zdog.Shape({
  path: [
    { x: 0, y:  0, z: 0 },
    { x: 10, y:  0, z: 9 },
  ],
  translate: { x: 5, y: -2, z: -17 },
  color: "#489268",
  fill: true,
  stroke: 8,
  addTo: head,
});

const land7 = new Zdog.Shape({
  path: [
    { x: 0, y:  0, z: 0 },
    { x: 2.5, y:  0, z: 5 },
  ],
  translate: { x: 13, y: -10, z: -10 },
  color: "#489268",
  fill: true,
  stroke: 4,
  addTo: head,
});
land5.copy({
  scale: { x: -1 },
  translate: { x: -13, y: -10, z: -10 },
  stroke: 5,
})


// spinning animation
function animate() {
  illo.rotate.y += isSpinning ? -0.01 : 0;
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();

// reset animation
document.querySelector('.reset-button').onclick = function() {
  isSpinning = false;
  illo.rotate.set({
    y: TAU/4,
  });
  
  setTimeout(() => { 
    isSpinning = true;
  }, 2000);
};





