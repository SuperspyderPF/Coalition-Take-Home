import React, { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <h1>Let's Make Modals!</h1>
      <>Welcome - let's make some modals. Begin by clicking the button below.</>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Make a modal
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default App;
