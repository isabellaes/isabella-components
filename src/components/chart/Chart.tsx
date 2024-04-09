//labels string[]
//dataSet object{} -> data: number[] color: string[] backgroundColor: string
//label and data in right order
//box for data object -> set Hight to number in em
//data number to the left
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
  return (
    <div className="chart">
      <table>
        <div className="row">
          <div className="data column">
            {dataset.data.map((d) => (
              <p>{d}</p>
            ))}
          </div>
          {dataset.data.map((d) => (
            <tr className="table-row">
              <td className="table-data"></td>
            </tr>
          ))}
        </div>
        <div className="row">
          {labels.map((x) => (
            <p className="label">{x}</p>
          ))}
        </div>
      </table>
    </div>
  );
};

export default Chart;
