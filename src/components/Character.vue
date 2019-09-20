<template>
  <div class="character">
    <div class="status">
      <div v-for="property in PROPERTIES" :key="property">
        <v-badge left>
        <span class="letter" slot="badge">{{property.toUpperCase()}}</span>
        <v-rating length="10" v-model="special[property]" small readonly :title="special[property]"></v-rating>
        </v-badge>
      </div>
    </div>
    <div class="points-left">Залишилось очок: {{this.pointsLeft}}</div>
    <div v-if="this.ready">This character is ready, you can use it.</div>
    <div class="question-text" v-if="!this.ready">{{this.currentQuestionText}}</div>
    <div class="btns" v-if="!this.ready">
      <v-btn color="success" @click="this.yes">Yes</v-btn>
      <v-btn color="error" @click="this.no">No</v-btn>
      <v-btn color="warning" @click="this.notSure">Not sure</v-btn>
    </div>
  </div>
</template>

<script>
import getRandIntBetween from '../functions/rand-int-between';
import noConstraintConflict from '../functions/no-constraint-conflict';
import Question from '../classes/question';
import questions from '../assets/questions.csv';

const LOWER = 0;
const MAX_POINTS = 40;
const UPPER = 1;

export default {
  computed: {
    constraints: function() {
      return [
        ...this.agreed.map(question => question.getConstraint(true)),
        ...this.disagreed.map(question => question.getConstraint(false)),
      ];
    },
    constraintsCombined: function() {
      const val = {};
      this.PROPERTIES.forEach(property => {
        val[property] = [1, 10];
      });
      this.constraints.forEach(constraint => {
        if (constraint.from) {
          if (val[constraint.property][LOWER] < constraint.from) {
            val[constraint.property][LOWER] = constraint.from;
          }
        }
        if (constraint.to) {
          if (val[constraint.property][UPPER] > constraint.to) {
            val[constraint.property][UPPER] = constraint.to;
          }
        }
      });
      return val;
    },
    currentQuestionText: function() {
      if (this.currentQuestion === undefined) {
        return 'No more questions';
      }
      return this.currentQuestion.text;
    },
    pointsLeft: function() {
      return (
        MAX_POINTS - Object.values(this.special).reduce((a, b) => a + b, 0)
      );
    },
    ready: function() {
      return this.pointsLeft === 0;
    },
    special: function() {
      const val = {};
      'special'.split('').forEach(property => {
        val[property] = getRandIntBetween.apply(
          null,
          this.constraintsCombined[property],
        );
      });
      return val;
    },
  },
  created: function() {
    this.showNextQuestion();
  },
  data: () => ({
    agreed: [],
    currentQuestion: undefined,
    disagreed: [],
    questions: questions.map(question => new Question(question)),
    PROPERTIES: 'special'.split(''),
  }),
  methods: {
    canBeAsked(question) {
      if (question.asked) return false;
      return (
        noConstraintConflict([
          ...this.constraints,
          question.getConstraint(true),
        ]) &&
        noConstraintConflict([
          ...this.constraints,
          question.getConstraint(false),
        ])
      );
    },
    no: function() {
      this.disagreed.push(this.currentQuestion);
      this.showNextQuestion();
    },
    notSure: function() {
      this.showNextQuestion();
    },
    showNextQuestion: function() {
      if (this.currentQuestion) {
        this.currentQuestion.asked = true;
      }
      if (this.ready) {
        this.currentQuestion = undefined;
      }
      let notUsedQuestions = this.questions.filter(question =>
        this.canBeAsked(question),
      );
      if (notUsedQuestions.length === 0) {
        this.currentQuestion = undefined;
      }
      this.currentQuestion =
        notUsedQuestions[Math.floor(Math.random() * notUsedQuestions.length)];
    },
    yes: function() {
      this.agreed.push(this.currentQuestion);
      this.showNextQuestion();
    },
  },
  name: 'Character',
  props: {
    // msg: String
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  margin: 0.5rem;
  padding: 1rem 3rem;
}
div {
  display: flex;
  justify-content: space-around;
  margin: 1rem;
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
.character {
  flex-direction: column;
}
.letter {
  font-weight: bold;
}
.status {
  justify-content: space-around;
  width: 100%;
}
</style>
