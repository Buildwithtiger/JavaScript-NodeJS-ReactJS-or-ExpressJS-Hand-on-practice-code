function getgreetingmsg(timee){
    if(time < 4 || time>=19) return "good night";
    if(time < 9) return "good morning";
    if (time < 16) return "good afternoon"; 
    return 'goood evening';
    
}module.exports=getgreetingmsg;