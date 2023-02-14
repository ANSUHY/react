import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import React from 'react';
// import 'src/css/Profile.css';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            previewUrl: null
        }
    }


    handleUpload = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                selectedFile: file,
                previewUrl: reader.result
            });
        };
        reader.readAsDataURL(file);
    }


    render() {
        return (
            <div className="Profile">
                <Avatar className="ProfileImage" src={this.state.previewUrl} />
                <div className="ProfileUpload BackColorPrimary Opacity8 Radius50">
                    <input accept="image/*" className="Hidden" id="profile-upload" type="file" onChange={this.handleUpload} />
                    <label htmlFor="profile-upload">
                        <IconButton className="Button ColorBrightest" variant="contained" aria-label="upload picture" component="span">
                            <PhotoCamera />
                        </IconButton>
                    </label>
                </div>
            </div>
        );
    }
}


export default Profile;
