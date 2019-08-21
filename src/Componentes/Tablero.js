import React, { Component, useState } from "react";
import Seccion from "./Seccion";
import NewTareaForm from "./NewTareaForm";

const Tablero = props => {
  const [tareasToDo, setTareasToDo] = useState([
    {
      id: 1,
      name: "Hacer el cuestionario de IOP",
      desc: "Idiota tenias que hacerlo antes"
    },
    {
      id: 2,
      name: "Terminar la serie de Tevez",
      desc: "no es tan importante"
    }
  ]);

  const [tareasDoing, setTareasDoing] = useState([
    {
      id: 3,
      name: "Haciendo el desafio",
      desc: "..."
    },
    {
      id: 4,
      name: "Trabajar",
      desc: "..."
    }
  ]);

  const [tareasFinished, setTareasFinished] = useState([
    {
      id: 5,
      name: "Ir al neurologo",
      desc: "soy una vieja de 80"
    },
    {
      id: 6,
      name: "Ir al orl",
      desc: "soy una vieja de 80 parte II"
    }
  ]);

  const [form, setForm] = useState({ name: "", desc: "" });

  const [selectedTarea, setSelectedTarea] = useState(null);

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const selectTarea = (selectedTarea, type) => {
    selectedTarea.type = type;
    setSelectedTarea(selectedTarea);
    setForm({
      name: selectedTarea.name,
      desc: selectedTarea.desc
    });
  };

  const unSelectTarea = () => {
    setSelectedTarea(null);
    setForm({
      name: "",
      desc: ""
    });
  };

  const goToDoing = (tareas, tarea, type) => {
    eliminarTarea(tareas, tarea, type);
    tareasDoing.push(tarea);
    setTareasDoing(tareasDoing);
  };

  const goToToDo = (tareas, tarea, type) => {
    eliminarTarea(tareas, tarea, type);
    tareasToDo.push(tarea);
    setTareasToDo(tareasToDo);
  };

  const goToFinished = (tareas, tarea, type) => {
    eliminarTarea(tareas, tarea, type);
    tareasFinished.push(tarea);
    setTareasFinished(tareasFinished);
  };

  const eliminarTarea = (tareas, tarea, type) => {
    let index = tareas.indexOf(tarea);

    tareas.splice(index, 1);
    switch (type) {
      case 1:
        setTareasToDo([...tareas]);

        break;
      case 2:
        setTareasDoing([...tareas]);

        break;
      case 3:
        setTareasFinished([...tareas]);

        break;
      default:
        return null;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let newTarea = {
      name: form.name,
      desc: form.desc
    };
    if (selectedTarea) {
      newTarea.id = selectedTarea.id;
      switch (selectedTarea.type) {
        case 1:
          eliminarTarea(tareasToDo, selectedTarea, selectedTarea.type);
          tareasToDo.push(newTarea);
          setTareasToDo([...tareasToDo]);
          break;
        case 2:
          eliminarTarea(tareasDoing, selectedTarea, selectedTarea.type);
          tareasDoing.push(newTarea);
          setTareasDoing([...tareasDoing]);
          break;
        case 3:
          eliminarTarea(tareasFinished, selectedTarea, selectedTarea.type);
          tareasFinished.push(newTarea);
          setTareasFinished([...tareasFinished]);
          break;
        default:
          break;
      }
    } else {
      newTarea.id =
        tareasDoing.length + tareasToDo.length + tareasFinished.length + 1;
      tareasToDo.push(newTarea);
    }
    setTareasToDo(tareasToDo);
    setForm({
      name: "",
      desc: ""
    });
    setSelectedTarea(null);
  };

  return (
    <div
      style={{
        "background-color": "#d1d1d1",
        //padding: "20px 10px 20px 20px",
        "justify-content": "center"
      }}
    >
      <div style={{ padding: "30px 40px 0px 40px" }}>
        {selectedTarea ? (
          <h4>Modificá la tarea:</h4>
        ) : (
          <h4>Agregá una nueva tarea:</h4>
        )}

        <NewTareaForm
          formValues={form}
          onChange={handleChange}
          onSubmit={handleSubmit}
          selectedTarea={selectedTarea}
          unSelectTarea={unSelectTarea}
        />
      </div>
      <div
        style={{
          display: "flex",
          "margin-top": "40px",
          "justify-content": "space-evenly"
        }}
      >
        <div style={{ flex: 1 }}>
          <Seccion
            title="To do"
            tareas={tareasToDo}
            color="#5191fd"
            type={1}
            goToDoing={goToDoing}
            goToToDo={goToToDo}
            goToFinished={goToFinished}
            eliminarTarea={eliminarTarea}
            selectTarea={selectTarea}
            buttonDisabled
          />
        </div>
        <div style={{ flex: 1 }}>
          <Seccion
            title="Doing"
            tareas={tareasDoing}
            color="#e68a97"
            type={2}
            goToDoing={goToDoing}
            goToToDo={goToToDo}
            goToFinished={goToFinished}
            eliminarTarea={eliminarTarea}
            selectTarea={selectTarea}
          />
        </div>
        <div style={{ flex: 1 }}>
          <Seccion
            title="Finished"
            tareas={tareasFinished}
            color="#66a853"
            type={3}
            goToDoing={goToDoing}
            goToToDo={goToToDo}
            goToFinished={goToFinished}
            eliminarTarea={eliminarTarea}
            selectTarea={selectTarea}
          />
        </div>
      </div>
    </div>
  );
};

export default Tablero;
