class Mobile{
    phoneModel = 'OnePlus'
    #unLockPIN =123

    maKeCall(){
        console.log('Calling someone...')
    }
    sendSMS(){
        console.log('Sending...')
    }

    getUnlockPin(){
        return this.#unLockPIN
    }

}

const mobile = new Mobile()
mobile.sendSMS()

console.log(mobile.phoneModel)
console.log(mobile.getUnlockPin())
