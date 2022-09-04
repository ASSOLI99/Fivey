import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Alert, Table, Button } from "react-bootstrap";
import Pagination from "react-js-pagination";
import "./Code.css";

const Code = () => {
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("token");
  const [message, setMessage] = useState(false);
  // async function getCategoriesData(pageNumber = 1) {

  // }
  const [page, setPage] = useState(1);
  const [codes, setCodes] = useState({
    data: [],
    current_page: "",
    per_page: "",
    total: "",
  });
  useEffect(() => {
    setIsLoading(true);
    const url = `http://localhost:8000/api/code?page=${page}`;
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setCodes(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  }, [page]);
  const pageNumber = (value) => {
    setPage(value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < 14; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    const fData = new FormData();
    fData.append("code", result);
    const token = localStorage.getItem("token");
    axios
      .post("http://127.0.0.1:8000/api/code/add", fData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.errors) {
          setMessage(false);
        } else {
          setMessage("added successfully");
        }
      });
  };
  const { data, current_page, per_page, total } = codes;
  return (
    <div className="category">
      <Container fluid className="container-xl text-center">
        <h1>Codes</h1>
        <Button onClick={submitHandler} className="btn my-2 btn-warning">
          Add Code
        </Button>

        {message && <Alert variant="success my-4">{message}</Alert>}
        <Row className="category-table p-3 d-flex justify-content-center overflow-scroll">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>code</th>
                <th>State</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="overflow-hidden">
              {!isLoading && (
                <>
                  {data.map((code, index) => {
                    return (
                      <tr key={index}>
                        <td>{code.id}</td>
                        <td>{code.code}</td>
                        <td>{code.state == 0 ? "used" : code.state}</td>
                        <td>
                          <Button className="btn btn-warning">Print</Button>
                        </td>
                      </tr>
                    );
                  })}
                </>
              )}
            </tbody>
          </Table>

          {isLoading && (
            <div className="spinner-border text-warning" role="status"></div>
          )}

          <div className="d-flex justify-content-center mt-5">
            <Pagination
              activePage={Number(current_page)}
              totalItemsCount={Number(total)}
              itemsCountPerPage={Number(per_page)}
              onChange={(pageNum) => {
                pageNumber(pageNum);
              }}
            />
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default Code;
