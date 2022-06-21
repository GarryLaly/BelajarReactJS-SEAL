import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const ArticleList = () => {
  const user = "1";
  const [listData, setListData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "http://hp-api.herokuapp.com/api/characters"
      );

      setListData(response.data.filter((item, index) => index < 10));
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.error("error", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ padding: "2%" }}>
      {user === null && <Navigate to="/auth" replace={true} />}
      {isLoading && <div>Loading...</div>}
      <div
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          display: "flex",
          maxWidth: 500,
        }}
      >
        {listData.map((item) => (
          <Link
            to={`/article/detail/${item.slug}`}
            style={{
              color: "black",
              textDecoration: "none",
              width: "48%",
              margin: "1%",
            }}
          >
            <div
              style={{
                color: "black",
                textDecoration: "none",
                backgroundColor: "#ccc",
                marginBottom: 5,
                borderRadius: 10,
                padding: 10,
              }}
            >
              <img
                src={item.image}
                style={{ width: "100%", height: "auto" }}
                alt="Alternative"
              />
              <div
                style={{
                  fontSize: 18,
                  marginTop: 5,
                  fontWeight: "bold",
                  color: "#000",
                }}
              >
                {item.name}
              </div>
              <div style={{ color: "#333" }}>
                {item.dateOfBirth === ""
                  ? item.yearOfBirth === ""
                    ? "Unknown"
                    : item.yearOfBirth
                  : item.dateOfBirth}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
