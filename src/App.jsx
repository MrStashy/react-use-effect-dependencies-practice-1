import { useState, useEffect } from "react";
import DataList from "./components/DataList.jsx";
import SelectTypeForm from "./components/SelectTypeForm.jsx";
import "./App.css";

export default function App() {
  const [dataType, setDataType] = useState("");

  const [data, setData] = useState(null);


  useEffect(() => {
    const url = `https://swapi.dev/api/${dataType}/`
    const getData = async () => {
      const apiData = await fetch(url)
      const json = await apiData.json()
      setData(json)
    }
    getData()
  }, [dataType])

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}
