import { Puff } from 'react-loader-spinner';

export const Loader = () => {
  <Puff
    height="80"
    width="80"
    radius={1}
    color="#67057a"
    ariaLabel="puff-loading"
    wrapperStyle={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      margin: '0 auto',
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      zIndex: '9999',
    }}
    wrapperClass="Puff-wrapper"
    visible={true}
  />;
};
