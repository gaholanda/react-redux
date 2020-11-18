// Definição de uma action
const toggleLesson = (module, lesson) => {
  return {
    // 'type' é obrigatório e ser para identificar a action. Deve ser única dentro do redux.
    type: "TOGGLE_LESSON",
    module,
    lesson,
  };
};

export { toggleLesson };
