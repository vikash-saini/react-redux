import React from "react";

const Phonebook = () => {
  const [record, setRecord] = React.useState([]);
  const [values, setValues] = React.useState({
    name: "Coder",
    lastname: "Bytes",
    number: 1234567890,
  });

  const handleChange = (e) => {
    var name = e.target.name;
    var inputvalue = e.target.value;

    setValues({ ...values, [name]: inputvalue });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setRecord((preRecord) => [...preRecord, values]);
  };

  return (
    <div>
      <h2>Phone Book</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            value={values.name}
            name="name"
            onChange={handleChange}
          />
          <label>lastName:</label>
          <input
            type="text"
            value={values.lastname}
            name="lastname"
            onChange={handleChange}
          />
          <label>phoneNumber:</label>
          <input
            type="text"
            value={values.number}
            name="number"
            onChange={handleChange}
          />
          <button type="submit">submit</button>
        </form>
      </div>
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>Username</th>
              <th>lastname</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {record.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Phonebook;
