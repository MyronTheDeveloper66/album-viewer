class UI {
    constructor() {
        this.artist = document.getElementById('artist');
        this.discography = document.getElementById('discography');
    }
    // Display artist search results
    showArtists(artists) { //takes data.results from app.js as a parameter
        // data.results is an array of artists matching the search criteria
        let output = '<div class ="row">';

        // loops through data.results array
        artists.forEach(function(artist) {
            output += `
                <div class="col-md-3">
                    <h3>${artist.artistName}</h3>
                    <p class="lead">Genre: ${artist.primaryGenreName}</p>
                    <a href="#discography" class="btn btn-primary btn-block mb-3 artist-id" id="${artist.artistId}">See Albums</a>
                    <a href="${artist.artistLinkUrl}" target="_blank" class="btn btn-primary btn-block mb-3">See More</a>
                </div>
            `;
        })
        output += '</div>'
        this.artist.innerHTML = output;
    }

    // Display artist discography
    showAlbums(albums) { // takes res.results from app.js as the parameter
        // albums is an array of the artists albums

        // clear previous results
        this.clearResults();

        //albums[0] simply holds the artistName. no albums
        let output = `
            <h3 class="mt-3 mb-4">${albums[0].artistName}</h3>
            <div class ="row">
        `;
        // take out first item in albums array
        // the first item only holds the artistName
        albums.slice(1).forEach(function(album) {
            output += `
                <div class="col-md-3">
                    <h5>${album.collectionName}</h5>
                    <img class="img-fluid mb-4" src="${album.artworkUrl100}">
                    <p class="lead">Tracks: ${album.trackCount}</p>
                    <br>
                    <a href="${album.collectionViewUrl}" target="_blank" class="btn btn-primary btn-block mb-3">See More</a>
                </div>
            `;
        });
        output += `</div>`;
        this.discography.insertAdjacentHTML('beforeend', output);
    }

    // Used to clear out previous results
    clearResults() {
        this.discography.innerHTML = '';
    }
}