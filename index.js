function superbowlWin(array) {
    let winningTeam = array.find(element => element.result === 'W');
    return winningTeam ? winningTeam.year : undefined;
}