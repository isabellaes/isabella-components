type ChartPropsType = {
  labels: string[];
  dataset: {
    data: number[];
    colors: string[];
    backgroundColor: string;
    type: "horisontal" | "vertical";
  };
};
const Chart = ({ labels, dataset }: ChartPropsType) => {
  let numbers: number[] = dataset.data.slice(0);
  numbers.sort((a, b) => b - a);

  return (
    <div className="chart">
      <table>
        <div className="row">
          <div className="data column">
            {numbers.map((d) => (
              <p className="data">{d}</p>
            ))}
          </div>

          {labels.map((n, index) => {
            const num = dataset.data[index] * 3;
            const height = num.toString() + "em";
            console.log(height);

            return (
              <tr className="table-row">
                <td className="table-data" style={{ height: height }}></td>
              </tr>
            );
          })}
        </div>
        <div className="row ">
          <p className="data"> </p>
          <p className="data"> </p>
          {labels.map((x) => (
            <p className="label">{x}</p>
          ))}
        </div>
      </table>
    </div>
  );
};

export default Chart;
