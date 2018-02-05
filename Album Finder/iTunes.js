// Create iTunes class
class iTunes {
    constructor() {
        // search parameters
        this.country = 'US';
        this.entity = 'musicArtist';
        this.limit = 12;
    }
    
    // Get artist search results

    // userText from app.js is used as the parameter
    // text from the form
    async getArtist(artist) {
        const artistResponse = await fetch(`https://itunes.apple.com/search?term=${artist}&country=${this.country}&entity=${this.entity}&limit=${this.limit}`);
        const artistProfile = await artistResponse.json();
        return artistProfile;
    }

    // uses the id of the see albums button as a parameter
    // the id is made to match the artist Id 
    // which is then inserted into the url
    async getAlbums(artist) {
        const albumResponse = await fetch(`https://itunes.apple.com/lookup?id=${artist}&entity=album`);
        const album = await albumResponse.json();
        return album;
    }

}