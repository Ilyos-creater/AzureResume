const functionApi = "https://count-test-cv2.azurewebsites.net/api/plus-test-cv";

window.addEventListener("DOMContentLoaded", () => {
  // Load from localStorage or show placeholder
  const lastCount = localStorage.getItem("visitCount") || "Loading...";
  document.getElementById("visitCount").innerText = lastCount;

  // Fetch new value from API
  getVisitCount();
});

const getVisitCount = () => {
  fetch(functionApi)
    .then((res) => res.text())
    .then((data) => {
      console.log("Raw response from API:", data);
      const countMatch = data.match(/\d+/);
      const count = countMatch ? parseInt(countMatch[0], 10) : 0;
      console.log("Extracted count:", count);

      // Update counter on page
      document.getElementById("visitCount").innerText = count;

      // Save to localStorage
      localStorage.setItem("visitCount", count);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen der Besucherzahl:", err);
      document.getElementById("visitCount").innerText = "Error";
    });
};
