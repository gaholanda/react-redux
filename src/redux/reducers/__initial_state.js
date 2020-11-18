const INITIAL_STATE = {
  activeLesson: null,
  activeModule: null,
  modules: [
    {
      id: 1,
      title: "Iniciando com React",
      lessons: [
        {
          id: 11,
          title: "1a aula",
        },
        {
          id: 12,
          title: "2a aula",
        },
      ],
    },
    {
      id: 2,
      title: "Aprendendo redux",
      lessons: [
        {
          id: 21,
          title: "1a aula",
        },
        {
          id: 22,
          title: "2a aula",
        },
      ],
    },
  ],
};

export default INITIAL_STATE;
