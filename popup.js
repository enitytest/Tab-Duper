document.addEventListener('DOMContentLoaded', function() {
  const duplicateTabButton = document.getElementById('duplicateTabButton');
  const duplicateCountSlider = document.getElementById('duplicateCountSlider');

  duplicateTabButton.addEventListener('click', function() {
    const duplicateCount = parseInt(duplicateCountSlider.value);
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const currentTab = tabs[0];
      for (let i = 0; i < duplicateCount; i++) {
        chrome.tabs.create({ url: currentTab.url }, function(newTab) {
          console.log(`Created new tab with ID ${newTab.id}`);
        });
      }
    });
  });
});