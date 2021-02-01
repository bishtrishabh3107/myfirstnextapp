import FrontPageSideScreen from '../components/organism/FrontPageSideScreen';
import FrontPageMainScreen from '../components/organism/FrontPageMainScreen';

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-8 sm:grid-cols-1">
        <FrontPageSideScreen />
        <FrontPageMainScreen />
      </div>
    </div>
  );
}
