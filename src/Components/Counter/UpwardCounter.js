import useCounter from '../../hooks/useCounter';

const UpwardCounter = () => {
  const counter = useCounter(true)
  return <div>{counter}</div>;
};

export default UpwardCounter;
