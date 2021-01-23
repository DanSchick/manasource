<template class="main">
  <div class="flex-container">
    <h1><span>Mana</span><span id="titleSrc">Source</span></h1>
    <br />
    <div class="controls">
      <div class="gray">
        <button @click="incrementGray($event)">+</button>
        <br />
        <img @click="incrementGray($event)" height="100px" width="100px" src="../assets/gray.png" />
        <br />
        <p>{{gray}}</p>
        <button @click="decrementGray($event)">-</button>
      </div>
      <div class="casting-cost">
        <h1>{{costString}}</h1>
      </div>
      <div class="color">
        <button @click="incrementColored($event)">+</button>
        <br />
        <img @click="incrementColored($event)" height="100px" width="100px" src="../assets/red.png" />
        <br />
        <p>{{colored}}</p>
        <button @click="decrementColored($event)">-</button>
      </div>
    </div>
    <div>
      <p>You need <strong>{{landsNeeded}}</strong> colored sources to cast this on turn <strong>{{cmc}}</strong> reliably</p>
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
      gray: 1,
      colored: 1,
    }
  },
  computed: {
    cmc() {
      const cmc = utils.computeCMC(this.gray, this.colored)
      return cmc;
    },
    landsNeeded() {
      return utils.computerNumberOfLandsNeeded(this.gray, this.colored);
    },
    costString() {
      return utils.computeCostString(this.gray, this.colored);
    }
  },
  methods: {
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
    incrementColored: function(event) {
      if(event){
        event.preventDefault();
      }
      if(this.colored < 3 && this.cmc <= 5){
        this.colored += 1;
      }
    },
    decrementColored: function(event) {
      if(event){
        event.preventDefault();
      }
      if(this.colored > 1){
        this.colored -= 1;
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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  /* width: 50%; */
}

.casting-cost {
  margin-left: 2em;
  margin-right: 2em;
}


button {
  font-size: 20pt;
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
