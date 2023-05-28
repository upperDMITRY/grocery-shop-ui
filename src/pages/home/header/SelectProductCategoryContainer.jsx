import SelectProductCategory from '../../../components/home/header/SelectProductCategory';

const values = [
  'All Categories',
  'Vegetables',
  'Fruits',
  'Other',
];

const SelectProductCategoryContainer = ({title}) => {
  const handleChange = (e, setProductCategory) => {
    setProductCategory(e.target.value);
  };

  return <SelectProductCategory handleChange={handleChange} values={values} title={title}/>;
};

export default SelectProductCategoryContainer;
