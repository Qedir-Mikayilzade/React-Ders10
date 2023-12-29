function Input() {
  let submitForm = (e) => {
    e.preventdefault();
  };
  let clickForm = () => {
    alert("succesfull");
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="name">
          <p>Ad</p>
          <input className="ad" type="text" required />
        </label>
        <label htmlFor="name">
          <p>Soyad</p>
          <input className="ad" type="text" required />
        </label>
        <label htmlFor="name">
          <p>Telefon</p>
          <input className="ad" type="number" required />
        </label>
        <label htmlFor="name">
          <p>Mail</p>
          <input className="ad" type="text" required />
        </label>
        <label>
          <p>Serh</p>
          <textarea
            className="simp"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </label>{" "}
        <br />
        <br />
        <button type="submit" onClick={clickForm}>
          Gonder
        </button>
      </form>
    </div>
  );
}

export default Input;
