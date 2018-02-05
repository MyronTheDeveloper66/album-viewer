// Test input form
// const searchArtist = document.getElementById('search-artist');
// searchArtist.addEventListener('keyup', () => {
//     console.log(searchArtist.value);
// });

// Init iTunes class
const itunes = new iTunes();
// Init UI class
const ui = new UI();

// Get Artist
// Event listener for form
const searchArtist = document.getElementById('search-artist');
searchArtist.addEventListener('keyup', (e) => {
    
    // store user input
    const userText = e.target.value;

    // Use itunes method with user text as parameter
    itunes.getArtist(userText)
    .then(data => { // itunes responds with artists matching criteria
        if(data.resultCount === 0){
            console.log('No results');
        } else {
            // uses UI method to loop through the response array and display artists
            ui.showArtists(data.results); 
            // gets the classes of all the buttons to see discography
            const artistId = document.getElementsByClassName('artist-id');
            // converts html collection of the artist-id buttons to an array
            // loops through the array and adds an event listener to each button
            Array.from(artistId).forEach(function(element) {
                element.addEventListener('click', function(e) {
                    // runs iTunes method with the id of the artist
                    // showArtist sets the button element id to the artist id from the results
                    itunes.getAlbums(e.target.id)
                        // Runs UI method to show all artist albums
                        .then(res => ui.showAlbums(res.results));
                })
            })
        }
    });
});