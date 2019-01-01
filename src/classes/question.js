export default class Question {
  constructor(questionData) {
    this.above = questionData.above;
    this.asked = false;
    this.property = questionData.property;
    this.text = questionData.text;
    this.value = questionData.value;
  }
  getConstraint(answer) {
    if (this.above && answer || (!this.above && !answer)) {
      return {
        from: this.value,
        property: this.property,
      };
    } else {
      return {
        property: this.property,
        to: this.value,
      }
    }
  }
}
