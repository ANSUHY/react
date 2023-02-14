import React from 'react';
import { ReactTabulator } from 'react-tabulator';
import CONST from 'src/assets/js/const';
import API from 'src/assets/js/api'
import LIB from 'src/assets/js/lib'
import 'src/css/contents/Movie.css';
import LIBS from 'src/assets/js/lib';

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();

        this.columns = [
            LIBS.TABULATOR.columns.selector,
            {
                title: CONST.TABLE.COLUMNS.LABEL.IMAGE, field: CONST.TABLE.COLUMNS.VALUE.IMAGE, minWidth: 150,
                width: 150, hozAlign: "center", formatter: "image", headerSort: false
            },
            {
                title: CONST.TABLE.COLUMNS.LABEL.TITLE, field: CONST.TABLE.COLUMNS.VALUE.TITLE, minWidth: 200,
                formatter: "html", editable: false, cellDblClick: LIB.TABULATOR.columnsFunction.cellDblClick, editor: "input", validator: "required",
            },
            {
                title: CONST.TABLE.COLUMNS.LABEL.DIRECTOR, field: CONST.TABLE.COLUMNS.VALUE.DIRECTOR, minWidth: 120,
                editable: false, cellDblClick: LIB.TABULATOR.columnsFunction.cellDblClick, editor: "input"
            },
            {
                title: CONST.TABLE.COLUMNS.LABEL.ACTORS, field: CONST.TABLE.COLUMNS.VALUE.ACTORS, minWidth: 150,
                editable: false, cellDblClick: LIB.TABULATOR.columnsFunction.cellDblClick, editor: "input"
            },
            {
                title: CONST.TABLE.COLUMNS.LABEL.RATING, field: CONST.TABLE.COLUMNS.VALUE.RATING, minWidth: 100,
                width: 150, hozAlign: "center", formatter: "star", editable: false, cellDblClick: LIB.TABULATOR.columnsFunction.cellDblClick, editor: "star"
            }
        ];

        this.options = {
            ...LIB.TABULATOR.options.common,
            ajaxURLGenerator: this.ajaxURLGenerator,
            ajaxResponse: this.ajaxResponse,
            ajaxError: this.ajaxError,
        };
    }


    render() {
        return (
            <div className="Movie">
                <ReactTabulator
                    ref={this.myRef}
                    className="Table"
                    columns={this.columns}
                    options={this.options}
                    data={[]}
                />
            </div>
        );
    }

    componentDidUpdate() {
        const props = this.props.propsObj;
        if (props.trigger === "button") {
            this.handleClick(props.clickedButton);
            return;
        }
        if (!props.urlQuery[CONST.URL.QUERY.QUERY]) {
            alert(CONST.ALERT.ERROR.SEARCH.TITLE);
            return;
        }
        const tabulator = this.myRef.current.table;
        tabulator.setData(API.ajax.query, props.urlQuery);
    }

    // ======== user custom method ========

    ajaxURLGenerator = (url, config, params) => {
        // console.log("ajaxURLGenerator", url, params);
        let newURL = `${url}?${CONST.URL.QUERY.QUERY}=${params.query}&${CONST.URL.QUERY.START}=${(params.page - 1) * params.size + 1}`;
        newURL += params.genre ? `&${CONST.URL.QUERY.GENRE}=${params.genre}` : "";
        return newURL;
    }

    ajaxResponse = (url, params, response) => {
        let data = response.items;
        // console.log('ajaxResponse', url, response);
        data.forEach(ob => {
            ob.title = `${ob.title}<br><i>${ob.subtitle}</i>`
            // ob.image = ob.image === "" ? API.default.image : ob.image;
            ob.actor = ob.actor.replace(/\|/gi, " || ");
            ob.director = ob.director.slice(0, -1);
            ob.userRating /= 2
            return ob;
        })

        return {
            last_page: Math.min(Math.ceil(response.total / 10), 100),
            data: data
        };
    }

    ajaxError = (error) => {
        console.log('ajaxError', error);
    }

    handleClick = (event) => {
        const table = this.myRef.current.table;
        switch (event) {
            case CONST.BUTTON.ID.ADD:
                table.addRow({});
                break;
            case CONST.BUTTON.ID.DELETE:
                table.getSelectedRows().forEach(row => row.delete());
                break;
            case CONST.BUTTON.ID.SAVE:
                alert(CONST.ALERT.SUCCESS.SAVE)
                break;
            case CONST.BUTTON.ID.DOWNLOAD:
                // const fileName = `EZIS_TopSql(${moment(this.$store.state.options.dateRange.from).format("YYMMDD")}).xlsx`;
                // this.tabulator.download("xlsx", fileName);
                console.log("download", table);
                table.download("csv", "data.csv", { bom: true });
                break;
            case CONST.BUTTON.ID.PRINT:
                table.print(false, true);
                break;
            default:
            //
        }
    }
}

export default Movie;
