let playlist = []; // Array to store the playlist of songs

// Function to add a new song to the playlist
const songForm = document.getElementById("song-form");
songForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    const songTitle = document.getElementById('SongTitle').value; // Get the song title from the form
    const artistName = document.getElementById('ArtistName').value; // Get the artist name from the form
    playlist.push({ title: songTitle, artist: artistName }); // Add the new song to the playlist array
    renderPlaylist(); // Update the playlist display
    songForm.reset(); // Reset the form fields
});

// Function to render the playlist table
function renderPlaylist() {
    const playlistBody = document.getElementById("Initial Playlist");
    playlistBody.innerHTML = ''; // Clear the current playlist display
    playlist.forEach((song) => {
        const newRow = playlistBody.insertRow(); // Create a new row for each song
        const titleCell = newRow.insertCell(); // Create a cell for the song title
        const artistCell = newRow.insertCell(); // Create a cell for the artist name
        const actionCell = newRow.insertCell(); // Create a cell for the delete action
        titleCell.textContent = song.title; // Set the song title in the cell
        artistCell.textContent = song.artist; // Set the artist name in the cell
        actionCell.innerHTML = '<button class="delete-button" onclick="deleteSong(\'' + song.title + '\')">Delete</button>'; // Add a delete button with an onclick event to delete the song
    });
}

// Function to delete a song from the playlist
function deleteSong(title) {
    playlist = playlist.filter((song) => song.title !== title); // Remove the song with the specified title from the playlist array
    renderPlaylist(); // Update the playlist display
}

// jQuery to handle form submission and sorting
$(document).ready(function() {
    $('#song-form').on('submit', function(e) {
        e.preventDefault(); // Prevents the default form submission behavior
        addSongToPlaylist($('#SongTitle').val(), $('#ArtistName').val()); // Add the new song to the playlist
        $('#SongTitle').val(''); // Clear the song title field
        $('#ArtistName').val(''); // Clear the artist name field
    });

    $('#sort-button').on('click', function() {
        sortPlaylist(); // Sort the playlist when the sort button is clicked
    });

    // Function to add a new song to the playlist (jQuery version)
    function addSongToPlaylist(songTitle, artistName) {
        const row = `<tr>
                        <td>${songTitle}</td>
                        <td>${artistName}</td>
                    </tr>`; // Create a new row with the song title and artist name
        $('#Initial\\ Playlist').append(row); // Append the new row to the playlist table
    }

    // Function to sort the playlist alphabetically by song title
    function sortPlaylist() {
        const rows = $('#Initial\\ Playlist').children('tr').get(); // Get all the rows in the playlist table
        rows.sort(function(a, b) {
            const songA = $(a).children('td').eq(0).text().toLowerCase(); // Get the song title of the first row
            const songB = $(b).children('td').eq(0).text().toLowerCase(); // Get the song title of the second row
            return songA.localeCompare(songB); // Compare the song titles for sorting
        });
        $.each(rows, function(index, row) {
            $('#Initial\\ Playlist').append(row); // Append the sorted rows back to the playlist table
        });
    }
});
