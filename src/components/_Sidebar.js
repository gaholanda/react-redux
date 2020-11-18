import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleLesson } from "../redux/actions";

function Sidebar() {
  const dispatch = useDispatch();
  const { modules } = useSelector(({ course }) => course);

  return (
    <aside className="sidebar">
      {modules.map((module) => (
        <ul key={module.id}>
          <li>
            <strong>{module.title}</strong>
          </li>
          {module.lessons.map((lesson) => (
            <li key={lesson.id}>
              <button onClick={() => dispatch(toggleLesson(module, lesson))}>
                Iniciar
              </button>
              {lesson.title}
            </li>
          ))}
        </ul>
      ))}
    </aside>
  );
}

export default Sidebar;
