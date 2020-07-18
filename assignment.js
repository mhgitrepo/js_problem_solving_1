//feetToMile
function feetToMile(feet){
    let mile = feet * 0.000189394;
    return mile;
}

//woodCalculator
function woodCalculator(numberOfchairs, numberOftables, numberOfbeds){
    let woodPerChair = numberOfchairs * 1, //ft3
        woodPertable = numberOftables * 3, //ft3
        woodPerBed = numberOfbeds * 5, //ft3
        totalWoodRequire = woodPerChair + woodPertable + woodPerBed;
    return totalWoodRequire;
}

//brickCalculator
function brickCalculator(totalFloorNumber) {
    let brickNeeded;
    if ( totalFloorNumber < 0 ) {
        brickNeeded = "Floors cannot be negative.";
    } else if ( totalFloorNumber <= 10 ) {
        brickNeeded = totalFloorNumber * 15 * 1000;
    } else if ( totalFloorNumber <= 20 ) {
        let floorsAboveTenthFloor = totalFloorNumber - 10;
        brickNeeded = 10 * 15 * 1000 + floorsAboveTenthFloor * 12 * 1000;
    } else {
        let floorsAboveTwentiethFloor = totalFloorNumber - 20;
        brickNeeded = (10 * 15 * 1000) + (10 * 12 * 1000) + (floorsAboveTwentiethFloor * 10 *1000);
    }
    return brickNeeded;
}

//tinyFriend
function tinyFriend(myFriendsName){
    if (myFriendsName.length <= 0) {
        return "There is no name in the array."
    } else {
        let tiny = myFriendsName[0];
        for(let i = 0; i < myFriendsName.length; i++){
            let friend = myFriendsName[i];
            if ( friend.length <= 0 ) {
                tiny = "Array has an empty name slot.";
                break;
            } else {
                if(friend.length < tiny.length){
                    tiny = friend;
                }
            }
        }
        return tiny;
    }
}
