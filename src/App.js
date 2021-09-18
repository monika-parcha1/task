import "./App.css";
import { getResultOfClass, getBestThreeStudents } from "./task";
import { classes } from "./utils/mockdata";

function App() {
  const results = Object.values(classes).map((data) => {
    const classResult = getResultOfClass(data);
    return {
      className: data,
      result: classResult,
    };
  });

  const topThree = getBestThreeStudents();

  return (
    <div className="App">
      <div>
        <ul>
          <h1> Top Three Students Are </h1>
          {topThree.map((data, index) => {
            return (
              <li key={`top_${index}`}>
                {data.name.first + data.name.last} with {data.total} marks
              </li>
            );
          })}
        </ul>
      </div>
      {results.map((data, index) => {
        return (
          <div key={index}>
            <h3> Result of class {data.className} </h3>
            <table style={{ width: "100%" }}>
              <thead>
                <tr>
                  <td>Name </td> <td>Subjects </td> <td> Total Marks</td> <td>Rank or Position </td>
                </tr>
              </thead>
              <tbody>
                {data.result.map((res, index) => {
                  return (
                    <tr key={`result_${index}`}>
                      <td>{res.name.first + res.name.last} </td>
                      {res.marks.map((data, index) => {
                        return (
                          <table
                            style={{ width: "100%" }}
                            key={`marks_${index}`}
                          >
                            <tbody>
                              <tr className="innerTr">
                                <td style={{ width: "33%" }}>{data.subject}</td>
                                <td style={{ width: "33%" }}>{data.marks}</td>
                                <td style={{ width: "33%" }}>{data.status}</td>
                              </tr>
                            </tbody>
                          </table>
                        );
                      })}
                      <td>{res.total} </td>
                      <td>{index + 1} </td>

                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}

export default App;
