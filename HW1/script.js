var loadFile = function(event) {
    let image = document.getElementById('output');
    let loadText = document.getElementById('upload_area');
    image.src = URL.createObjectURL(event.target.files[0]);
    loadText.textContent='';
    image.onload = function() {
        URL.revokeObjectURL(image.src)
    }
};