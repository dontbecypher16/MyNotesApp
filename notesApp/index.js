function getNoteId(){
    let noteObject = getExistingNotes();
    if(!noteObject){
        return 1
    }

    var keysArray = Object.keys(noteObject);
    var numberKeys = keysArray.map((key) => Number(key));
    console.log(numberKeys);
    return Math.max(...numberKeys) + 1;

}

function getExistingNotes(){
    let notes = localStorage.getItem('notes');
    if(notes){
        return JSON.parse(notes);
    }

   
}






