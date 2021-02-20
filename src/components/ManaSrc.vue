<template class="main">
  <div class="flex-container">
    <h1><span font-size="36pt">Mana</span><span font-size="36pt" id="titleSrc">Source</span></h1>
    <br />
    <div class="controls">
      <div class="gray value-changer">
        <button @click="decrementGray($event)">-</button>
        <h1>{{gray}}</h1>
        <img @click="incrementGray($event)" height="100px" width="100px" src="../assets/gray.png" />
        <button @click="incrementGray($event)">+</button>
      </div>
      <div class="color value-changer">
        <button @click="decrementColoredA($event)">-</button>
        <h1>{{coloredA}}</h1>
        <img @click="incrementColoredA($event)" height="100px" width="100px" src="../assets/red.png" />
        <button @click="incrementColoredA($event)">+</button>
      </div>
      <button v-if="!multiColor" @click="addColor($event)">Add Color</button>
      <div v-if="multiColor" class="color value-changer">
        <button @click="decrementColoredB($event)">-</button>
        <h1>{{coloredB}}</h1>
        <img @click="incrementColoredB($event)" height="100px" width="100px" src="../assets/green.png" />
        <button @click="incrementColoredB($event)">+</button>
      </div>
      <div v-if="!multiColor" class="casting-cost">
        <h1>{{costString}}</h1>
      </div>
      <div v-else class="casting-cost">
        <h1>{{goldCostString}}</h1>
      </div>
    </div>
    <div v-if="!multiColor">
      <p>You need <strong>{{landsNeeded}}</strong> colored sources to cast this on turn <strong>{{cmc}}</strong> reliably</p>
    </div>
    <div v-else-if="goldLandsNeeded === 'N/A'">
      <span>N/A</span>
    </div>
    <div v-else>
      <span class="lands-needed-for-gold">You need: <br /><strong>{{goldLandsNeeded.forA}}</strong> red sources <br /><strong>{{goldLandsNeeded.forB}}</strong> green sources</span><span class="lands-needed-for-gold" v-if="goldLandsNeeded.forBoth"><br /> and <strong>{{goldLandsNeeded.forBoth}}</strong> lands that produce Red and/or Green</span><span class="lands-needed-for-gold"><br /> to cast this on turn <strong>{{goldCmc}}</strong> reliably</span>
    </div>
  </div>
</template>

<script>
import utils from "../methods/methods";

export default {
  name: 'ManaSrc',
  data() {
    return {
      card: "1CCC",
      multiColor: false,
      gray: 1,
      coloredA: 1,
      coloredB: 1,
    }
  },
  computed: {
    cmc() {
      const cmc = utils.computeCMC(this.gray, this.coloredA)
      return cmc;
    },
    goldCmc() {
      return this.gray + this.coloredA + this.coloredB;
    },
    goldLandsNeeded() {
      return utils.computeGoldCard(this.gray, this.coloredA, this.coloredB);
    },
    landsNeeded() {
      return utils.computerNumberOfLandsNeeded(this.gray, this.coloredA);
    },
    costString() {
      return utils.computeCostString(this.gray, this.coloredA);
    },
    goldCostString() {
      return utils.computeGoldCostString(this.gray, this.coloredA, this.coloredB);
    }
  },
  methods: {
    addColor: function(event) {
      if(event){
        event.preventDefault();
      }
      this.multiColor = true;
    },
    incrementGray: function(event) {
      if(event){
        event.preventDefault();
      }
      if(this.cmc <= 5){
        this.gray += 1;
      }
    },
    decrementGray: function(event) {
      if(event){
        event.preventDefault();
      }
      if(this.gray > 0){
        this.gray -= 1;
      }
    },
    incrementColoredA: function(event) {
      if(event){
        event.preventDefault();
      }
      if(this.coloredA < 3 && this.cmc <= 5){
        this.coloredA += 1;
      }
    },
    decrementColoredA: function(event) {
      if(event){
        event.preventDefault();
      }
      if(this.coloredA > 1){
        this.coloredA -= 1;
      }
    },
    incrementColoredB: function(event) {
      if(event){
        event.preventDefault();
      }
      if(this.coloredB < 3 && this.cmc <= 5){
        this.coloredB += 1;
      }
    },
    decrementColoredB: function(event) {
      if(event){
        event.preventDefault();
      }
      if(this.coloredB > 1){
        this.coloredB -= 1;
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-size: 16pt;
}
/* span {
  font-size: 36pt;
} */

h1 {
  font-size: 36pt;
}


#titleSrc {
  color: #00e054;
}

.flex-container {
  display: flex;
  flex-direction: column;
}


.controls {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 66%;
}

.value-changer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

}

.casting-cost {
  margin-left: 2em;
  margin-right: 2em;
}

.lands-needed-for-gold {
  font-size: 16pt;
}


button {
  font-size: 35pt;
  background-color: #dcdcdc;
  padding: 10px;
}

strong {
  font-size: 22pt;
}

img {
  margin-top: 10px;
}

input {
  font-size: 28pt;
  height: 2em;
  width: 20em;
  text-align: center;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
