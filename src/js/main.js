console.log('Hello guys!');

// Get the element
let elem = document.querySelector('history-events1');
// Create a copy of it
let clone = elem.cloneNode(true);

// Update the ID and add a class
clone.id = 'elem2';
clone.classList.add('history-events__may');

// Inject it into the DOM
elem.after(clone);
