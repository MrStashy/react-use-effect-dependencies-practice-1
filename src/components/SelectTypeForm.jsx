function SelectTypeForm(props) {
  
  const { setDataType } = props
  

  return (
    <form className="three-column-grid__expand-two gap-md">
      <label htmlFor="type">Data Type</label>
      <select onChange={(e) => setDataType(e.target.value)}id="type" name="type">
        <option value="">Please select...</option>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
      </select>
    </form>
  );
}

export default SelectTypeForm;
