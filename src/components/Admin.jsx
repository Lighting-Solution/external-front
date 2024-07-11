import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Container,
} from "@mui/material";

const Admin = (props) => {
  const [inquiries, setInquiries] = useState([]);
  useEffect(() => {
    fetchInquiries();
  }, []);
  const fetchInquiries = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9001/api/v1/lighting_solutions/inquiry/list-inquiry"
      );
      setInquiries(response.data);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
    }
  };
  const getStatusText = (inquiryState) => {
    return inquiryState === 0 ? "대기" : inquiryState === 1 ? "완료" : "";
  };

  const handleRowClick = (id) => {
    console.log(`Clicked row with ID: ${id}`);
  };
  return (
    <Container sx={{ mt: 4 }}>
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        align="center"
        sx={{ fontWeight: "bold", textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
      >
        CUSTOMER INQUIRY
      </Typography>
      <TableContainer component={Paper} sx={{ boxShadow: 5, borderRadius: 2 }}>
        <Table
          sx={{
            minWidth: 650,
            "& th": {
              fontSize: "1.8rem", // Increased font size for table headers
              padding: "16px",
              fontWeight: "bold",
              backgroundColor: "#f0f0f0",
              color: "#333",
            },
            "& td": {
              fontSize: "1.8rem", // Increased font size for table cells
              padding: "16px",
            },
          }}
          aria-label="customer inquiries table"
        >
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>회사명</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>담당자</TableCell>
              <TableCell>문의 상태</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inquiries.map((inquiry) => (
              <TableRow key={inquiry.id}>
                <TableCell component="th" scope="row">
                  <div onClick={() => handleRowClick(inquiry.id)}>
                    {inquiry.id}
                  </div>
                </TableCell>
                <TableCell>{inquiry.companyName}</TableCell>
                <TableCell>{inquiry.name}</TableCell>
                <TableCell>
                  {inquiry.manager ? inquiry.manager : "미배정"}
                </TableCell>
                <TableCell>{getStatusText(inquiry.inquiryState)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Admin;
