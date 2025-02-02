document.addEventListener("DOMContentLoaded", function () {
    // Function to handle playlist functionality
    const setupPlaylist = (mainVideoId, playlistSelector) => {
        const mainVideo = document.getElementById(mainVideoId);
        const playlistItems = document.querySelectorAll(`${playlistSelector} li`);

        playlistItems.forEach(item => {
            item.addEventListener("click", () => {
                mainVideo.src = item.getAttribute("data-src");

                // Remove 'active' class from all items and add to the clicked one
                playlistItems.forEach(el => el.classList.remove("active"));
                item.classList.add("active");
            });
        });

        // Set the first item as active by default
        playlistItems[0].classList.add("active");
    };

    // Setup both playlists
    setupPlaylist("main-video", ".playlist"); // Day 9: Models
    setupPlaylist("main-video-dv", "#playlist-dv"); // Day 3: Data Visualization
});