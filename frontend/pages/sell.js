import CreateItem from '../components/CreateItem';
import PleaseSignIn from '../components/PleaseSignIn';

function Sell() {
  return (
    <div>
      <PleaseSignIn>
        <CreateItem />
      </PleaseSignIn>
    </div>
  );
}

export default Sell;
