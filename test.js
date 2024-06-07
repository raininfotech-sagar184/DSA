class BrowserHistory {
  constructor(homepage) {
    this.history = [homepage]; // Array to store history
    this.currentIndex = 0;     // Index to keep track of the current page
  }

  visit(url) {
    // Remove all forward history
    this.history = this.history.slice(0, this.currentIndex + 1);
    // Add the new url
    this.history.push(url);
    // Move the current index to the new page
    this.currentIndex++;
  }

  back(steps) {
    // Move back up to 'steps' times or to the start of the history
    this.currentIndex = Math.max(0, this.currentIndex - steps);
    return this.history[this.currentIndex];
  }

  forward(steps) {
    // Move forward up to 'steps' times or to the end of the history
    this.currentIndex = Math.min(this.history.length - 1, this.currentIndex + steps);
    return this.history[this.currentIndex];
  }
}

// Example usage:
const browserHistory = new BrowserHistory('homepage');
browserHistory.visit('page1');        // Visit 'page1'
browserHistory.visit('page2');        // Visit 'page2'
console.log(browserHistory.back(1));  // Go back to 'page1', prints 'page1'
console.log(browserHistory.back(1));  // Go back to 'homepage', prints 'homepage'
console.log(browserHistory.forward(1)); // Go forward to 'page1', prints 'page1'
browserHistory.visit('page3');        // Visit 'page3', erasing forward history
console.log(browserHistory.back(2));  // Go back to 'homepage', prints 'homepage'
console.log(browserHistory.forward(2)); // Go forward to 'page3', prints 'page3'
