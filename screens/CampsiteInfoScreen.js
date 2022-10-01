import RenderCampsite from '../features/campsites/RenderCampsite2';

const CampsiteInfoScreen = ({ route }) => {
    const { campsite } = route.params;
    console.log(`route ${route.params.campsite.name}`)
    return <RenderCampsite campsite={campsite} />;
};

export default CampsiteInfoScreen;