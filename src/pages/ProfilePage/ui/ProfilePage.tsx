import {classNames} from "shared/lib/className/classNames";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {profileReducer} from "entities/Profile";

interface ProfilePageProps{
  className?: string
}

const initialReducer : ReducersList = {
  profile: profileReducer
}

const ProfilePage = ({className}: ProfilePageProps) => {
  return (
    <DynamicModuleLoader reducers={initialReducer} removeReducerAfterUnmount={true}>
      <div className={classNames('', {}, [className])}>
        Profile page
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage