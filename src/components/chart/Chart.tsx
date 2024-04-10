type ChartPropsType = {
  labels: string[];
  dataset: {
    data: number[];
    colors: string[];
    backgroundColor: string;
  };
};
const Chart = ({ labels, dataset }: ChartPropsType) => {
  let numbers: number[] = dataset.data.slice(0);
  numbers.sort((a, b) => b - a);

  const removeDups = (arr: number[]): number[] => {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  };
  numbers = removeDups(numbers);

  function calculateheight(index: number) {
    const data = dataset.data[index];
    if (data) {
      const i = numbers.indexOf(data);
      const l = numbers.length - i;
      return l;
    }
    return 0;
  }

  return (
    <div className="chart">
      <table>
        <div className="row">
          <div className="data column">
            {numbers.map((d) => (
              <div className="data">{d}</div>
            ))}
          </div>

          {labels.map((n, index) => {
            const colHeight = (numbers.length * 4).toString() + "em";
            let num = calculateheight(index);
            const dataHeight = (num * 4).toString() + "em";

            return (
              <tr
                className="table-col"
                style={
                  dataset.backgroundColor
                    ? {
                        backgroundColor: dataset.backgroundColor,
                        height: colHeight,
                      }
                    : { height: colHeight }
                }
              >
                <td
                  className="table-data"
                  style={
                    dataset.colors[index]
                      ? {
                          height: dataHeight,
                          backgroundColor: dataset.colors[index],
                        }
                      : { height: dataHeight }
                  }
                ></td>
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
