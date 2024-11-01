// index.js
// Incredibox Warm Like Fire - Interactive Music Composition

// Initialize sound elements and theme components
const sounds = ["beat1", "beat2", "melody1", "melody2", "effect1"];
const activeSounds = [];

// Function to play sounds based on user selections
function playSound(sound) {
  const audio = new Audio(`./sounds/${sound}.mp3`);
  audio.play();
}

// Function to add a sound to the active composition
function addSound(sound) {
  activeSounds.push(sound);
  playSound(sound);
}

// Function to clear all sounds
function clearComposition() {
  activeSounds.length = 0;
}

// Export the functions for use in other modules if needed
export { playSound, addSound, clearComposition };

// Usage example
addSound("beat1");
