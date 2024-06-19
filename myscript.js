let playlist = [];

        // Function to add a new song to the playlist
        const songForm = document.getElementById("song-form");
        songForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const songTitle = document.getElementById('SongTitle').value;
            const artistName = document.getElementById('ArtistName').value;
            playlist.push({ title: songTitle, artist: artistName });
            renderPlaylist();
            songForm.reset();
        });
        // Function to render the playlist table
        function renderPlaylist() {
            const playlistBody = document.getElementById("Initial Playlist");
            playlistBody.innerHTML = '';
            playlist.forEach((song) => {
                const newRow = playlistBody.insertRow();
                const titleCell = newRow.insertCell();
                const artistCell = newRow.insertCell();
                const actionCell = newRow.insertCell();
                titleCell.textContent = song.title;
                artistCell.textContent = song.artist;
                actionCell.innerHTML = '<button class="delete-button" onclick="deleteSong(\'' + song.title + '\')">Delete</button>';
            });
        }

        // Function to delete a song from the playlist
        function deleteSong(title) {
            playlist = playlist.filter((song) => song.title !== title);
            renderPlaylist();
        }
        
        $(document).ready(function() {
            $('#song-form').on('submit', function(e) {
                e.preventDefault();
                addSongToPlaylist($('#SongTitle').val(), $('#ArtistName').val());
                $('#SongTitle').val('');
                $('#ArtistName').val('');
            });
        
            $('#sort-button').on('click', function() {
                sortPlaylist();
            });
        
            function addSongToPlaylist(songTitle, artistName) {
                const row = `<tr>
                                <td>${songTitle}</td>
                                <td>${artistName}</td>
                            </tr>`;
                $('#Initial\\ Playlist').append(row);
            }
        
            function sortPlaylist() {
                const rows = $('#Initial\\ Playlist').children('tr').get();
                rows.sort(function(a, b) {
                    const songA = $(a).children('td').eq(0).text().toLowerCase();
                    const songB = $(b).children('td').eq(0).text().toLowerCase();
                    return songA.localeCompare(songB);
                });
                $.each(rows, function(index, row) {
                    $('#Initial\\ Playlist').append(row);
                });
            }
        });
        