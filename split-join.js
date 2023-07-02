const nationalSong = "Amar Sonar Bangladrsh Ami Tomai Valobasi, Chirodin Tomar Akash Tomar Batas Amar Pranr Bajai Bashi Sonar Bangla";
//Split
// Parts
const parts = nationalSong.split(' ');
console.log(parts);

//sentence
const sentence = nationalSong.split('.');
console.log(sentence);

//chars
const chars = nationalSong.split('');
console.log(chars);

//slice

//slice
const partial = nationalSong.slice(11, 21);
console.log(partial);

// SubString
const partial2 = nationalSong.substring(11, 21);
console.log(partial2);

//join
const lines = [
    'Amar Sonar Bangladrsh Ami',
    'Tomai Valobasi, Chirodin Tomar',
    'Akash Tomar Batas Amar Pranr',
    'Bajai Bashi Sonar Bangla'];

const newSongs = lines.join(',');
console.log(newSongs);

