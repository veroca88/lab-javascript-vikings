// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(theDamage) {
        this.health -= theDamage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name
    }
    receiveDamage(theDamage) {
        // receiveDamage.super(theDamage);
        this.health -= theDamage;
        if (this.health > 0) {
            return (`${this.name} has received ${theDamage} points of damage`)
        } else {
            return (`${this.name} has died in act of combat`)
        }
    }
    battleCry() {
        return (`Odin Owns You All!`)

    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(theDamage) {
        this.health -= theDamage;
        if (this.health > 0) {
            return (`A Saxon has received ${theDamage} points of damage`)
        } else {
            return (`A Saxon has died in combat`)
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack() {
        let pickRandomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let pickRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

        let stillAlive = this.saxonArmy[pickRandomSaxon].receiveDamage(this.vikingArmy[pickRandomViking].strength)
        if (this.saxonArmy[pickRandomSaxon].health <= 0) this.saxonArmy.splice(pickRandomSaxon, 1)
        return stillAlive;       
    }

    saxonAttack() {
        let pickRandomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let pickRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let stillAlive = this.vikingArmy[pickRandomViking].receiveDamage(this.saxonArmy[pickRandomSaxon].strength)
        if (this.vikingArmy[pickRandomViking].health <= 0) this.vikingArmy.splice(pickRandomViking, 1)
        return stillAlive;
    }


    showStatus() {
        if(!this.saxonArmy.length) return "Vikings have won the war of the century!";
        if (!this.vikingArmy.length) return "Saxons have fought for their lives and survived another day...";
        return "Vikings and Saxons are still in the thick of battle."

    }
}