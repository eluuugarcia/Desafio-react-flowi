import React, { Component } from "react";

export default class TareasList extends Component {
  render() {
    return (
      <div style={{ "justify-content": "center" }}>
        <ul style={{ "list-style-type": "none" }}>
          {this.props.tareas.map(tarea => {
            return (
              <li className="bg-white px-4 py-4 shadow mb-4 card border ">
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => this.props.selectTarea(tarea, this.props.type)}
                >
                  <div
                    className=""
                    style={{
                      display: "flex"
                    }}
                  >
                    <h4>{tarea.id}.</h4>
                    <h4> {tarea.name} </h4>
                  </div>
                  <p>{tarea.desc} </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between"
                  }}
                >
                  <div>
                    {this.props.type === 2 || this.props.type === 3 ? (
                      <button
                        onClick={() =>
                          this.props.goToToDo(
                            this.props.tareas,
                            tarea,
                            this.props.type
                          )
                        }
                        className="btn btn-primary"
                      >
                        To Do
                      </button>
                    ) : null}
                    {this.props.type === 1 || this.props.type === 3 ? (
                      <button
                        onClick={() =>
                          this.props.goToDoing(
                            this.props.tareas,
                            tarea,
                            this.props.type
                          )
                        }
                        className="btn btn-danger"
                      >
                        Doing
                      </button>
                    ) : null}

                    {this.props.type === 1 || this.props.type === 2 ? (
                      <button
                        onClick={() =>
                          this.props.goToFinished(
                            this.props.tareas,
                            tarea,
                            this.props.type
                          )
                        }
                        className="btn btn-success"
                      >
                        Finished
                      </button>
                    ) : null}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 15,
                      right: 15,
                      cursor: "pointer"
                    }}
                  >
                    <img
                      onClick={() => {
                        this.props.eliminarTarea(
                          this.props.tareas,
                          tarea,
                          this.props.type
                        );
                      }}
                      alt="trash"
                      src="https://cdn0.iconfinder.com/data/icons/basic-8/97/5-512.png"
                      style={{ width: "35px", height: "35px" }}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
