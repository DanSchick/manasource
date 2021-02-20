export default {
    computeCostString(gray, colored) {
        let str = '';
        if(gray > 0){
            str += gray;
        }
        str += 'C'.repeat(colored);
        return str;
    },

    computeGoldCostString(gray, coloredA, coloredB){
        let str = '';
        if(gray > 0){
            str += gray;
        }
        str += 'R'.repeat(coloredA);
        str += 'G'.repeat(coloredB);
        return str;
    },

    computeCMC(gray, colored) {
        return gray + colored;
    },

    computerNumberOfLandsNeeded(gray, colored) {
        for(let el of this.table){
            if(el.g === gray && el.c === colored){
                return el.l
            }
        }
        return "N/A";

    },

    table: [
        {
            g: 5,
            c: 1,
            l: 8,
        },
        {
            g: 4,
            c: 1,
            l: 9,
        },
        {
            g: 3,
            c: 1,
            l: 10,
        },
        {
            g: 2,
            c: 1,
            l: 11,
        },
        {
            g: 1,
            c: 1,
            l: 13,
        },
        {
            g: 4,
            c: 2,
            l: 13,
        },
        {
            g: 0,
            c: 1,
            l: 14,
        },
        {
            g: 3,
            c: 2,
            l: 14,
        },
        {
            g: 2,
            c: 2,
            l: 16,
        },
        {
            g: 3,
            c: 3,
            l: 16,
        },
        {
            g: 1,
            c: 2,
            l: 18,
        },
        {
            g: 2,
            c: 3,
            l: 18,
        },
        {
            g: 0,
            c: 2,
            l: 20,
        },
        {
            g: 1,
            c: 3,
            l: 20,
        },
        {
            g: 0,
            c: 3,
            l: 23,
        },
    ],

    computeGoldCard(gray, coloredA, coloredB) {
        const cmc = gray + coloredA + coloredB;
        let landsNeededForA = null;
        for(let i of this.table){
            if(i.c === coloredA && i.g === cmc - coloredA){
                landsNeededForA = i.l + 1;
            }
        }

        let landsNeededForB = null;
        for(let i of this.table){
            if(i.c === coloredB && i.g === cmc - coloredB){
                landsNeededForB = i.l + 1;
            }
        }

        let landsNeededForBoth = null
        for(let i of this.table){
            if(i.c === coloredA + coloredB && i.g === gray){
                landsNeededForBoth = i.l + 1;
            }
        }
        

        if(landsNeededForB && landsNeededForA){
            return {
                forA: landsNeededForA,
                forB: landsNeededForB,
                forBoth: landsNeededForBoth
            }
        }

        return "N/A";

    }


}