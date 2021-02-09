import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import moment from 'moment'

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
      fontSize: "10px"
    },
  },
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root} >
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.number}
        </TableCell>
        <TableCell align="right">{row.name}</TableCell>
        <TableCell align="right">{moment(row.startTime).format('D MMM YYYY, hh:mm')}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Starts Information
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: "bold"}}>Start number</TableCell>
                    <TableCell style={{ fontWeight: "bold"}}>Horse name</TableCell>
                    <TableCell align="right" style={{ fontWeight: "bold"}}>Driver/Rider</TableCell>
                    <TableCell align="right" style={{ fontWeight: "bold"}}>Trainer</TableCell>
                    <TableCell align="right" style={{ fontWeight: "bold"}}>Horse father</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.starts.map((start) => (
                    <TableRow key={start.number}>
                      <TableCell component="th" scope="row">
                        {start.number}
                      </TableCell>
                      <TableCell>{start.horse.name}</TableCell>
                      <TableCell align="right">{start.driver.firstName} {start.driver.lastName}</TableCell>
                      <TableCell align="right">
                        {start.horse.trainer.firstName} {start.horse.trainer.lastName}
                      </TableCell>
                      <TableCell align="right">
                        {start.horse.pedigree.father.name}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable({races}) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead style={{backgroundColor: "#2A4F9F"}}>
          <TableRow>
            <TableCell />
            <TableCell style={{ fontWeight: "bold", fontSize: "12px", color: "#F7DB4A" }}>Race Number</TableCell>
            <TableCell style={{ fontWeight: "bold", fontSize: "12px", color: "#F7DB4A"}} align="right">Race Name</TableCell>
            <TableCell style={{ fontWeight: "bold", fontSize: "12px", color: "#F7DB4A"}} align="right">Race Start Time</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {races.map((race) => {
            return <Row key={race.id} row={race} />
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
