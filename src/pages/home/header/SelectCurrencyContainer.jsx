import SelectCurrency from '../../../components/home/header/SelectCurrency';

const SelectCurrencyContainer = () => {
  const handleChange = (e, setCurrency) => {
    setCurrency(e.target.value);
  };

  const values = [
    'MLD',
    // 'USD',
    // 'EUR'
  ];

  return <SelectCurrency handleChange={handleChange} values={values} />;
};

export default SelectCurrencyContainer;
