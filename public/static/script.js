class PilloBoard {

    constructor() {
        this.repetition = true;
        this.audioName = "";
        this.currentLocation = "";
        this.currentMP3 = new Audio();
    }
    pilloStop() {
        this.currentMP3.pause();
        this.currentMP3.currentTime = 0;
    }
    pilloPlay(audioName) {
        this.currentLocation = "./static/segments/" + audioName + ".mp3";
        this.currentMP3 = new Audio(this.currentLocation);
        if(this.audioName != audioName) {
            this.currentMP3.play(); 
            this.audioName = audioName;
            this.repetition = true;
        }
        else {
            if (this.repetition) {
                this.pilloStop();
                this.repetition = !this.repetition;
            }
            else {
                this.currentMP3.play();
                this.repetition = !this.repetition;
            }
        }
    }
}

const pilloBoard = new PilloBoard("ya esta listo esto")
tds = document.querySelectorAll("td")

tds.forEach(element => {
    element.onclick = ()=>{
        pilloBoard.pilloStop()
        pilloBoard.pilloPlay(element.id)
    }
});
