import React, { useState, useEffect } from "react";
import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { makeStyles, createStyles } from "@mui/styles";
import { Grid, Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "white",
      width: "100%",
      maxWidth: "100% !important",
    },
    backgroundColorTable: {
      background: "#373737 !important",
    },
    emptyRow: {
      height: 100,
    },
    paging: {
      border: "none",
    },
  })
);

export interface HeaderProps {
  name?: string;
  item?: any; // component
  align?: "inherit" | "left" | "center" | "right" | "justify";
  width?: number;
}

interface Props {
  headers: HeaderProps[];
  items?: any[];
  totalElements?: number;
  renderItem: (item: any, index?: number) => any[];
  fetchDataForPage?: (page: number, limit: number) => void;
  refreshData?: boolean;
  filterData?: boolean;
  autoCustomId?: boolean;
  setBackgroundColor?: boolean;
  onSelectRow?: (rowData: any) => void;
  limitElement?: number;
  pageNumber?: number;
  className?: any;
}

export default function Table(props: Props) {
  const classes = useStyles();
  const {
    headers,
    items,
    renderItem,
    autoCustomId = false,
    setBackgroundColor = false,
    onSelectRow,
    className,
  } = props;

  const handleSelectRow = (rowData: any) => {
    if (onSelectRow) {
      onSelectRow(rowData);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [items]);

  return (
    <Paper
      className={`${classes.root} ${
        setBackgroundColor ? classes.backgroundColorTable : ""
      }`}
      variant="elevation"
    >
      <TableContainer>
        <MuiTable
          aria-labelledby="tableTitle"
          size="medium"
          aria-label="enhanced table"
          className={className}
        >
          <TableHead>
            <TableRow>
              {headers.map((header, index) => (
                <TableCell
                  key={index}
                  align={header.align}
                  style={{
                    width: headers[index].width,
                    backgroundColor: "#EEEEEE",
                  }}
                >
                  {header.item ? header.item : header.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {!items || items.length === 0 ? (
              <TableRow className={classes.emptyRow}>
                <TableCell align="center" colSpan={headers.length}>
                  <Typography>No records to display</Typography>
                </TableCell>
              </TableRow>
            ) : (
              items.map((item, idx) => (
                <TableRow key={idx} onClick={(event) => handleSelectRow(item)}>
                  {renderItem(item, idx).map((col, index) => (
                    <TableCell
                      key={index}
                      align={headers[index].align}
                      style={{ width: headers[index].width }}
                    >
                      {index === 0 && autoCustomId ? idx + 1 : col}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </Paper>
  );
}
