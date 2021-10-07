let resturant = {
    naem: "ASD",
    guestCapacity: 75,
    gusetCount: 0,
    checkAvailability: function(partySize) {
        let seatsLeft = this.guestCapacity - this.gusetCount;
        return partySize <= seatsLeft;
    },
    setParty: function(partySize) {
        return this.gusetCount = this.gusetCount + partySize;
    },
    removeParty: function(guestRrmoved){
        this.gusetCount = this.gusetCount - guestRrmoved;
    }
}

resturant.setParty(72)
console.log(resturant.checkAvailability(4))
console.log(resturant)
console.log('dfsfdsffsdfdfsdfsdfds*************')
resturant.removeParty(5)
console.log(resturant)
console.log(resturant.checkAvailability(4))
