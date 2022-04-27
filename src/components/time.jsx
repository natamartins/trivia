const secondsToMinuts = (seconds) => 
    (seconds - (seconds %= 60)) / 60 + (9 < seconds ? ":" : ":0") + seconds;
    
export default secondsToMinuts;
