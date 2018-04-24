export default {
  doneRegister: state => state.register,
  doneLogin: state => state.login,
  doneAddDevice: state => state.addDevice,
  doneDeviceForTester: state => state.deviceForTester,
  doneDelDeviceByDeviceId: state => state.delDeviceByDeviceId,
  donePublish: state => state.publish,
  donePublishProjects: state => state.publishProjects,
  doneProjectStep: state => state.projectStep,
  doneIsNewProject: state => state.isNewProject,
  doneProject: state => state.project,
  doneRewards: state => state.rewards,
  doneProjectsForCustomer: state => state.projectsForCustomer,
  doneDelProjectByProjectId: state => state.delProjectByProjectId,
  doneGetRewardsByProjectId: state => state.getRewardsByProjectId,
  doneDelReward: state => state.delReward,
  doneUpdateProject: state => state.updateProject
}
