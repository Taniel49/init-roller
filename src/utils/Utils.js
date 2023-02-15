function getInitiative(initModif) {
    return (Math.floor(Math.random() * 20) + 1) + Number(initModif)
}

function compare(a, b) {
    if (a.result > b.result) {
        return -1;
    }
    if (a.result < b.result) {
        return 1;
    }
    if (a.result === b.result) {
        if (a.initiativeModifier < b.initiativeModifier) {
            return 1;
        }
        if (a.initiativeModifier > b.initiativeModifier) {
            return -1;
        }
        if (a.initiativeModifier === b.initiativeModifier) {
            const randomNumber = Math.random();
            if (randomNumber > 0.5) {
                return 1
            }
            return -1
        }
    }
}

export default {getInitiative, compare};
