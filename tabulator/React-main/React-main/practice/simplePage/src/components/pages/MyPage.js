import Profile from 'src/components/contents/Profile';
import InfoMin from 'src/components/contents/InfoMin';
import GridList from 'src/components/contents/GridList';
import CustomField from 'src/components/contents/CustomField';
import 'src/css/pages/MyPage.css';

function MyPage(props) {
    return (
        <div className="MyPage">
            <Profile></Profile>
            <InfoMin></InfoMin>
            <GridList></GridList>
            <CustomField></CustomField>
        </div>
    )
}

export default MyPage;
