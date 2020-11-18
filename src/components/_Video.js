import React from "react";
import { useSelector } from "react-redux";

function Video() {
  const { activeModule, activeLesson } = useSelector(({ course }) => course);

  return (
    <div className="video">
      {activeLesson && activeModule && (
        <>
          <h3>
            <strong>Módulo {activeModule.title}</strong>
            <br />
            <span className="subtitle">Aula {activeLesson.title}</span>
          </h3>
          <img
            className="player"
            src="https://image.freepik.com/free-vector/video-media-player-design_114579-839.jpg"
            alt="video player"
          />
        </>
      )}
      {!activeLesson && !activeModule && <h3>Escolha uma aula</h3>}
    </div>
  );
}

export default Video;
