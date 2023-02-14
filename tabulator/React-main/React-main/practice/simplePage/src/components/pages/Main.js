import Navigation from "src/components/utilities/Navigation";
import CONST from 'src/assets/js/const';
import Router from 'src/assets/js/router';
import controller from 'src/components/controllers/ControllerMain';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import LIB from 'src/assets/js/lib';
import 'src/css/pages/Main.css';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileName: null,
            fileType: null,
        }
    }

    handleUpload = (e) => {
        console.log("file change", e.target.files);
        const reader = new FileReader();
        const file = e.target.files[0];
        const { name, type } = controller.filnameParser(file.name);

        reader.onloadend = () => {
            this.setState({
                fileName: name,
                fileType: type
            });
        };
        reader.readAsDataURL(file);
    }

    changeFile = (e) => {
        console.log("changeFile");
        this.setState({ fileName: e.target.value })
    }

    changeLevel = (e, value) => {
        console.log("changeLevel", value);
    }

    changeCategory = (e, value) => {
        console.log("changeCategory", value);
    }

    render() {
        const navItem = Router.filter(ob => ob.name === CONST.ROUTER.NAME.LIST);
        return (
            <div className="Main">
                <div className="Title SizeRes20 Bold ColorTitle">{CONST.TEXT.MAIN_TITLE}</div>
                <div className="Item">
                    <div className="Upload">
                        <div className="SubItem">
                            <input className="Hidden" id="file-upload" type="file" onChange={this.handleUpload} />
                            <button className="BackColorPrimary ColorBrightest UploadButton">
                                <label htmlFor="file-upload" className="Button">
                                    {CONST.TEXT.FILE} {CONST.BUTTON.LABEL.UPLOAD}
                                </label>
                            </button>
                        </div>
                        <div className="SubItem">
                            <TextField
                                id="file-name"
                                style={{ minWidth: 120 }}
                                label={`${CONST.TEXT.WORD_LIST} ${CONST.TEXT.NAME}`}
                                value={this.state.fileName || ''}
                                onChange={this.changeFile}
                            />
                        </div>
                        <div className="SubItem">
                            <Autocomplete
                                id="difficulty"
                                style={{ minWidth: 120 }}
                                disableClearable
                                defaultValue={LIB.MATERIAL_UI.data.select.level[1]}
                                options={LIB.MATERIAL_UI.data.select.level}
                                getOptionLabel={(option) => option.title}
                                onChange={this.changeLevel}
                                renderInput={(params) => {
                                    return < TextField {...params} label={`${CONST.TEXT.DIFFICULTY} ${CONST.TEXT.SELECT}`} />
                                }}
                            />
                        </div>
                        <div className="SubItem">
                            <Autocomplete
                                id="category"
                                style={{ minWidth: 120 }}
                                disableClearable
                                defaultValue={LIB.MATERIAL_UI.data.select.category[1]}
                                options={LIB.MATERIAL_UI.data.select.category}
                                getOptionLabel={(option) => option.title}
                                onChange={this.changeCategory}
                                renderInput={(params) => {
                                    return < TextField {...params} label={`${CONST.TEXT.CATOGORY} ${CONST.TEXT.SELECT}`} />
                                }}
                            />
                        </div>
                    </div>
                    <div className="Setting">
                        <div className="LinkButton BackColorPrimary">
                            <Navigation class="ColorWhite Size20 Button" item={navItem}></Navigation>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
