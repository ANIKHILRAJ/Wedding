// Function to update the invitation text based on form input
function updateInvitation() {
  // Get the values from the form
  const bride = document.getElementById('bride').value;
  const groom = document.getElementById('groom').value;
  const weddingDate = document.getElementById('weddingDate').value;
  const weddingTime = document.getElementById('weddingTime').value;
  const venue = document.getElementById('venue').value;
  const venueLocation = document.getElementById('venueLocation').value;

  // Update the invitation text
  if (bride) document.getElementById('bride-name').innerText = bride;
  if (groom) document.getElementById('groom-name').innerText = groom;
  if (weddingDate) document.getElementById('wedding-date').innerText = weddingDate;
  if (weddingTime) document.getElementById('date-time').innerText = weddingTime;
  if (venue) document.getElementById('venue').innerText = venue;
  if (venueLocation) document.getElementById('venueLocation').innerText = venueLocation;

  // Clear the form fields
  document.getElementById('invitationForm').reset();
}
