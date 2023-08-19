import { Filter } from "@mui/icons-material";
import { useData } from "../utility/useData";
import Card from "./homepage/Card";
import MainForm from "./homepage/MainForm";
import Paginator from "./homepage/Paginator";
import Search from "./homepage/Search";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Container = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  //  const[data,loading,error] = useData(currentPage)
  const [data, loading, error] = useData();
  const initialState = data.slice(0, 5);
  const [mapped, setMapped] = useState<any>(initialState);
  const [inputValue, setInputValue] = useState<string>("United States");
  const [textInput, setTextInput] = useState("");
  const [pageSize, setPageSize] = useState<number>(0);
  const [searchVal, setSearchVal] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const perPage = 5;

  useEffect(() => {
    // setMapped(data.slice(currentPage===1?0:currentPage * perPage + currentPage,perPage))
    if (!loading && !error && inputValue) {
      const startIndex = (currentPage - 1) * perPage;
      const endIndex = startIndex + perPage;
      const filteredData = data.filter(
        (job) => job.locationRestrictions[0] === inputValue
      );

      setMapped(filteredData.slice(startIndex, endIndex));
      setPageSize(Math.ceil(filteredData.length / perPage));
    }

    console.log("inputValue", inputValue);
    console.log(mapped);
  }, [data, currentPage, inputValue, searchVal, filteredData, textInput]);

  const handleInputChange = (e: Event) => {
    setInputValue("");
    setInputValue((e.target as HTMLInputElement).value);
    setCurrentPage(1);
  };

  const handleSearch = (e: Event, searchVal: string) => {
    e.preventDefault();
    setInputValue("");

    const lSearchVal = searchVal.toLowerCase().trim();
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;

    setFilteredData(
      data.filter((job) => {
        return (
          job.title.toLowerCase().includes(lSearchVal.toLowerCase()) ||
          job.companyName.toLowerCase().includes(lSearchVal) ||
          job.seniority
            .toString()
            .toLowerCase()
            .includes(lSearchVal.toLowerCase()) ||
          job.locationRestrictions[0] === inputValue
        );
      })
    );
    setInputValue("");
    setMapped(filteredData.slice(startIndex, endIndex));
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
    const startIndex = (value - 1) * perPage;
    const endIndex = startIndex + perPage;
    setMapped(filteredData.slice(startIndex, endIndex));
  };

  return (
    <div className="cont">
      <Search
        onChange={(e: Event) =>
          setSearchVal((e.target as HTMLInputElement).value)
        }
        onClick={(e: Event) => handleSearch(e, searchVal)}
      />
      <div className="media-cont">
        <MainForm
          onChange={(e: Event) =>
            setInputValue((e.target as HTMLInputElement).value)
          }
          onSubmit={(e: Event) => e.preventDefault()}
        />
        <div className="mapped">
          {loading
            ? "loading"
            : mapped.map((item: any, index: number) => (
                <Link to="/job" state={{ job: item }} key={index}>
                  {" "}
                  <Card key={index} {...item} />
                </Link>
              ))}

          <Paginator
            pagesize={pageSize}
            currentPage={currentPage}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Container;
