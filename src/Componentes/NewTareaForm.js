import React, { Component } from "react";

export default class NewTareaForm extends Component {
  render() {
    return (
      <div style={{}}>
        <form onSubmit={this.props.onSubmit}>
          <div>
            <label>Nombre: </label>
            <input
              required
              onChange={this.props.onChange}
              className="form-control "
              type="text"
              name="name"
              value={this.props.formValues.name}
            />
          </div>
          <div>
            <label>Descripcion: </label>
            <input
              required
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="desc"
              value={this.props.formValues.desc}
            />
          </div>
          <div style={{ display: "flex", marginTop: "15px" }}>
            <button style={{ marginRight: "10px" }} className="btn btn-primary">
              {this.props.selectedTarea ? "Modificar" : "Agregar"}
            </button>
            {this.props.selectedTarea ? (
              <button
                onClick={() => this.props.unSelectTarea()}
                className="btn btn-danger"
              >
                Cancelar
              </button>
            ) : null}
          </div>
        </form>
      </div>
    );
  }
}
