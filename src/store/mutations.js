// import Vue from 'vue'

export default {
  setState (state, {type, data}) {
    state[type] = data
  },
  setRewards (state, {data}) {
    state.rewards.push(data)
  },
  delRewards (state, {data}) {
    let index = -1
    for (let i = 0; i < state.rewards.length; i++) {
      const reward = state.rewards[i]
      if (reward.customerId === data.customerId &&
        reward.grade === data.grade &&
        reward.reward === data.reward) {
        index = i
      }
    }
    state.rewards.splice(index, 1)
  }
}
