function DataList(props) {
  const { dataType, data } = props;

  return (
    <>
      <h2>{dataType}</h2>
      <ul>
        {data?.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
    </>
  );
}

export default DataList;
