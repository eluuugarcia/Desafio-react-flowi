import React, { Component } from "react";
import TareasList from "./TareasList";

export default class Seccion extends Component {
  render() {
    return (
      <div
        style={{
          "background-color": this.props.color,
          padding: "10px",
          "justify-content": "center"
        }}
      >
        <h2 style={{ "font-weight": "bold", marginBottom: "20px" }}>
          {this.props.title}
        </h2>

        <TareasList
          tareas={this.props.tareas}
          type={this.props.type}
          from1To2={this.props.from1To2}
          eliminarTarea={this.props.eliminarTarea}
          goToDoing={this.props.goToDoing}
          goToFinished={this.props.goToFinished}
          goToToDo={this.props.goToToDo}
          selectTarea={this.props.selectTarea}
        />
      </div>
    );
  }
}
