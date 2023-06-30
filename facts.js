document.addEventListener('DOMContentLoaded', function() {
    var navigationLinks = document.querySelectorAll('.topnav a');
  
    navigationLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        // Remove the "active" class from all links
        navigationLinks.forEach(function(navLink) {
          navLink.classList.remove('active');
        });
  
        // Add the "active" class to the clicked link
        link.classList.add('active');
  
        // Add your custom logic or actions here
        console.log(link.textContent + ' link clicked!');
      });
    });
  
    const facts = [
      "There exists a massive abandoned supercollider in Texas. Its construction was approved in 1987 and it was supposed to be the largest particle collider in the world when completed (3x the Large Hadron Collider at CERN in Switzerland). It was abandoned in 1993 due to escalating estimated cost. When the project was cancelled, 14 miles of tunnels and 17 shafts had already been dug, as well as all surface structures completed.",
      "Hashima Island of Japan at its peak in 1959 was the most densely-populated place on Earth with a population density of 139,100 people/km2. It was abandoned 1974 after its coal mines were shut down. It is now a ghost island filled with abandoned high rise concrete complexes. Google sent a lone employee to map the entire island last year.",
      "In 2005, US Supreme Court ruled in favor of the application of Eminent Domain to kick homeowners off of their property so private developers could build hotels, health clubs, and condos in New London, Connecticut. About 9 years later, the abandoned property remains an overgrown, barren field.",
      "There is an abandoned island at Disney World called Discovery Island that 3 guys swam to and found preserved snakes in coke bottles and more eerie stuff.",
      "A guy in Japan laid legal claim to 2.5 million acres of abandoned woodlands via adverse possession, acquired ownership by prescription, then declared independence from Japan and founded a micronation.",
      "A large number of past Olympic venues are now sitting abandoned with no intention of repurposing.",
      "Deep inside an abandoned mine 230 feet below Pennsylvania, 600 federal workers process truckloads of retirement paperwork by moving files by hand to and from over 28,000 file cabinets, desk to desk, from cavern to cavern. The process works as slowly now as it did in 1977.",
      "There is a ‘ghost town’ in New York City called “The Hole”. It is an area of Queens built too close to the water table, which is mostly abandoned, usually flooded, and was once a body-dumping ground for the mafia.",
      "In 2007, China tried to build a city that was an exact replica of Paris, right down to the replica Eiffel Tower, but it is now a ghost town.",
      "An underground mine fire that was ignited in 1962 still burns today and has transformed Centralia, Pennsylvania into a modern day ghost town."
    ];
  
    // Get the button and fact display elements
    const factButton = document.getElementById('factButton');
    const factDisplay = document.getElementById('factDisplay');
  
    // Add a click event listener to the button
    factButton.addEventListener('click', function() {
      // Get a random fact from the array
      const randomIndex = Math.floor(Math.random() * facts.length);
      const randomFact = facts[randomIndex];
  
      // Display the random fact
      factDisplay.textContent = randomFact;
    });
  });