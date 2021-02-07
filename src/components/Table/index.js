import React from 'react';
import PropTypes from 'prop-types';
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

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.number}
        </TableCell>
        <TableCell align="right">{row.name}</TableCell>
        <TableCell align="right">{row.startTime}</TableCell>
        {/* <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Starts information
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Start number</TableCell>
                    <TableCell>Horse name</TableCell>
                    <TableCell align="right">Driver/rider</TableCell>
                    <TableCell align="right">Trainer</TableCell>
                    <TableCell align="right">horse father</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.starts.map((historyRow) => (
                    <TableRow key={historyRow.number}>
                      <TableCell component="th" scope="row">
                        {historyRow.number}
                      </TableCell>
                      <TableCell>{historyRow.horse.name}</TableCell>
                      <TableCell align="right">{historyRow.driver.firstName}</TableCell>
                      <TableCell align="right">
                        {historyRow.horse.trainer.firstName}
                      </TableCell>
                      <TableCell align="right">
                        {historyRow.horse.pedigree.father.name}
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

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

export default function CollapsibleTable({races}) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Race number</TableCell>
            <TableCell align="right">Race name</TableCell>
            <TableCell align="right">Race start time</TableCell>
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

// User interface should contain input field to put game type in. Below the input field there should be
// the area where information about the game is presented.
// Information about the game should contain following data: - Game type - Races information (see
// below)
// For each race: - Race number - Race name - Race start time - Starts information (see below)
// For each start: - Start number - Horse name - Driver/rider first name + last name - Trainer first
// name + last name (expanded view) - Name of the horse father (expanded view)
// Information about start should be presented in expandable block (collapsed by default). The
// following information should be available in the expanded view: - Trainer first name + last name -
// Name of the horse father