<template>
  <div class="character">
    <div class="status">
      <div>
        <span class="letter">S</span>
        {{this.special.s}}
      </div>
      <div>
        <span class="letter">P</span>
        {{this.special.p}}
      </div>
      <div>
        <span class="letter">E</span>
        {{this.special.e}}
      </div>
      <div>
        <span class="letter">C</span>
        {{this.special.c}}
      </div>
      <div>
        <span class="letter">I</span>
        {{this.special.i}}
      </div>
      <div>
        <span class="letter">A</span>
        {{this.special.a}}
      </div>
      <div>
        <span class="letter">L</span>
        {{this.special.l}}
      </div>
    </div>
    <div class="question-text">{{this.currentQuestionText}}</div>
    <div class="btns">
      <button @click="this.yes">Yes</button>
      <button @click="this.no">No</button>
      <button @click="this.notSure">Not sure</button>
    </div>
  </div>
</template>

<script>
import noConstraintConflict from "../functions/no-constraint-conflict";
import Question from "../classes/question";
import questions from "../assets/questions.json";

export default {
  computed: {
    constraints: function() {
      return [
        ...this.agreed.map(question => question.getConstraint(true)),
        ...this.disagreed.map(question => question.getConstraint(false))
      ];
    },
    currentQuestionText: function() {
      if (this.currentQuestion === undefined) {
        return "No more questions";
      }
      return this.currentQuestion.text;
    }
  },
  created: function() {
    this.showNextQuestion();
  },
  data: () => ({
    agreed: [],
    currentQuestion: undefined,
    disagreed: [],
    questions: questions.map(question => new Question(question)),
    special: {
      s: 5,
      p: 5,
      e: 5,
      c: 5,
      i: 5,
      a: 5,
      l: 5
    }
  }),
  methods: {
    applyConstraint(constraint) {
      const specialChange = {};
      if (
        constraint.from &&
        this.special[constraint.property] < constraint.from
      ) {
        specialChange[constraint.property] = constraint.from;
      }
      if (constraint.to && this.special[constraint.property] > constraint.to) {
        specialChange[constraint.property] = constraint.to;
      }
      this.special = {
        ...this.special,
        ...specialChange
      };
    },
    canBeAsked(question) {
      return (
        noConstraintConflict([
          ...this.constraints,
          question.getConstraint(true)
        ]) &&
        noConstraintConflict([
          ...this.constraints,
          question.getConstraint(false)
        ])
      );
    },
    no: function() {
      this.applyConstraint(this.currentQuestion.getConstraint(false));
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
      let notUsedQuestions = this.questions.filter(
        question => !question.asked && this.canBeAsked(question)
      );
      if (notUsedQuestions.length === 0) {
        this.currentQuestion = undefined;
      }
      this.currentQuestion =
        notUsedQuestions[Math.floor(Math.random() * notUsedQuestions.length)];
    },
    yes: function() {
      this.applyConstraint(this.currentQuestion.getConstraint(true));
      this.agreed.push(this.currentQuestion);
      this.showNextQuestion();
    }
  },
  name: "Character",
  props: {
    // msg: String
  }
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
