interface AudioPlayer{
    audioVolume: number,
    songDuration: number,
    song: String,
    details: Details,

};

interface Details{
    author: string,
    year: number,
};

const audioPlayer:AudioPlayer={
    audioVolume: 10,
    songDuration: 20,
    song: 'Lego House',
    details: {
        author: 'Ed Sheeran',
        year: 2015,
    }
};

console.log(`Normal song: ${audioPlayer.song}`);
console.log(audioPlayer.songDuration);
console.log(audioPlayer.details.author);

const {song:AnotherSong, songDuration: duration} = audioPlayer;

console.log(`Destructurated song: ${AnotherSong}`);
console.log(`Destructurated duration: ${duration}`);

// Destructurate details and author

const {details} = audioPlayer;

const {author , year} = details;

console.log(`Destructurated author: ${author}`);
console.log(`Destructurated year: ${year}`)

// another way to do it

const {details:{author:author2}} = audioPlayer;

console.log(`Destructurated but not easily to follow author: ${author2}`)


const dbz:string[] = ['Goku','Vegetta','Trunk'];

const character3:string = dbz[3] || 'No hay personaje';

console.error(`Personaje 3: ${character3} `);


const[itc= "Not found", estocas="Not found", teoinfo="Not found", ingesoft = 'Not found'] :string[] = ['ITC','estocasticos','teoinfo'];

console.log(`S1: ${itc}`);
console.log(`S2: ${estocas}`);
console.log(`S3: ${teoinfo}`);
console.log(`S4: ${ingesoft}`);




export {};