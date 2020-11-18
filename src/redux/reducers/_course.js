import INITIAL_STATE from "./__initial_state";

const courses = (state = INITIAL_STATE, action) => {
  if (action.type === "TOGGLE_LESSON") {
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module,
    };
  }
  return state;
};

export default courses;
