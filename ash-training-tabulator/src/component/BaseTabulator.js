
import { React, useRef } from 'react';
import { reactFormatter, ReactTabulator, ReactTabulatorOptions } from 'react-tabulator'

/** ===== 기본기본 */
function BaseTabulator() {

    function SimpleButton(props) {
        //const rowData = props.cell._cell.row.data;
        //const cellValue = props.cell._cell.value || 'Edit | Show';
        //return <button onClick={() => alert(rowData.name)}>{cellValue}</button>;
    }

    const columns = [
        { title: "Name", field: "name", width: 150 },
        { title: "Age", field: "age", hozAlign: "left", formatter: "progress" },
        { title: "Favourite Color", field: "col" },
        { title: "Date Of Birth", field: "dob", hozAlign: "center" },
        { title: "Rating", field: "rating", hozAlign: "center", formatter: "star" },
        { title: "Passed?", field: "passed", hozAlign: "center", formatter: "tickCross" },
        { title: 'Custom', field: 'custom', hozAlign: 'center', editor: 'input', formatter: reactFormatter(<SimpleButton />) }
    ];

    var data = [
        { id: 1, name: "Oli Bob", age: "12", col: "red", dob: "" },
        { id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
        { id: 3, name: "Christine Lobowski", age: "42", col: "green", dob: "22/05/1982" },
        { id: 4, name: "Brendon Philips", age: "125", col: "orange", dob: "01/08/1980" },
        { id: 5, name: "Margret Marmajuke", age: "16", col: "yellow", dob: "31/01/1999" },
    ];

    const options: ReactTabulatorOptions = {
        height: 200,
        movableRows: true,
        movableColumns: true
    };

    //let ref11 = React.useRef();
    let ref11 = useRef();

    /** === 클릭 이벤트 */
    const rowClickHandler = (e, row) => {
        console.log("aaaaaa")

    };

    return (
        <>
            <div>
                <ReactTabulator
                    onRef={(ref) => (ref11.current = ref)}
                    data={data}
                    columns={columns}
                    tooltips={true}
                    layout={"fitData"}
                    events={{
                        rowClick: rowClickHandler
                    }}
                    options={options}
                    data-custom-attr="test-custom-attribute"
                    className="custom-css-class"
                />
            </div>
        </>
    );

}

export default BaseTabulator;

