import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    this.toggleButton = toggleButton;
    // this.userId = this.$toggleButton.data("user-id")
    // this.followState = this.$toggleButton.data("follow-state")
    // console.log(this.toggleButton);
    this.toggleButton.addEventListener("click", this.handleClick.bind(this));
  }

  async handleClick(event) {
    event.preventDefault();
    console.log(this.followState);

  }

  async follow() {
    // Your code here
  }

  async unfollow() {
    // Your code here
  }

  render() {
    switch (this.followState) {
      // Your code here
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}