document.getElementById('pollForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedHobby = document.querySelector('input[name="hobby"]:checked');
    if (selectedHobby) {
        document.getElementById('chosenHobby').innerText = selectedHobby.value;
        document.getElementById('pollResults').style.display = 'block';
        document.getElementById('pollForm').reset();
    } else {
        alert("Please select an option before voting!");
    }
});
window.onload = function() {
    const savedChoice = localStorage.getItem('favoriteHobby');
    if (savedChoice) {
        document.getElementById('chosenHobby').innerText = savedChoice;
        document.getElementById('pollResults').style.display = 'block';
    }
};

document.getElementById('pollForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedHobby = document.querySelector('input[name="hobby"]:checked');
    if (selectedHobby) {
        localStorage.setItem('favoriteHobby', selectedHobby.value);
        document.getElementById('chosenHobby').innerText = selectedHobby.value;
        document.getElementById('pollResults').style.display = 'block';
        document.getElementById('pollForm').reset();
    } else {
        alert("Please select an option before voting!");
    }
});
