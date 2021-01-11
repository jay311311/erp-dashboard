import React,{useState} from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calender  = () => {
    
    const [date, setDate] = useState(new Date());
  
    const handleCalendarClose = () => console.log("Calendar closed");
    const handleCalendarOpen = () => console.log("Calendar opened");
  
    
    return (
      <DatePicker
        selected={date}
        dateFormat="yyyy/MM/dd"
        placeholderText="Click to select a date"
        onChange={date => setDate(date)}
        onCalendarClose={handleCalendarClose}
        onCalendarOpen={handleCalendarOpen}
        
      />
    );
  };

  export default Calender