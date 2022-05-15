import React, {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';

interface CountryProps {
  name:string, 
  continent:string, 
  capital:string, 
  population:number
}

const defaultCountries :CountryProps[] = [
  {name:'Japan', continent:'Asia', capital:'Tokyo', population:1.2},
  {name:'Germany', continent:'Europe', capital:'Berlin', population:0.8},
  {name:'India', continent:'Asia', capital:'Dehli',population:11},
  {name:'United States', continent:'America', capital:'Washington', population:3},
]

export default function BasicTable() {

  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option:CountryProps) => option.name,
  });
  
  const [displayedCountries, setDisplayedCountries] = useState <CountryProps[]>(defaultCountries)
  const [inputValue,setInputValue] = useState<string>('')

  return (
    <>
      <Autocomplete 
        inputValue={inputValue}
        options={defaultCountries}
        filterOptions={filterOptions}
        renderInput={(params) => <TextField {...params} label="Custom filter" />}
        getOptionLabel={(option) => option.name}        
        onInputChange={(e:any,newValue:string)=>{
        if(!newValue){
          setInputValue('')
        }else{
          setInputValue(newValue)
        }
        }}
        onChange={(e:any,newValue:CountryProps|null)=>{
          if(!newValue){
            setDisplayedCountries(defaultCountries)
          }else{
            const filter = defaultCountries.filter(function(country){
              return country.name === newValue.name
            })
            setDisplayedCountries(filter)
          }
          }
        }
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Country</TableCell>
              <TableCell align="right">Continent</TableCell>
              <TableCell align="right">Capital&nbsp;(g)</TableCell>
              <TableCell align="right">Population&nbsp;(million)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedCountries.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.continent}</TableCell>
                <TableCell align="right">{row.capital}</TableCell>
                <TableCell align="right">{row.population}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}