using System;
using System.Collections.Generic;
using System.Text;

namespace Dal.models
{
    public class Schedule
    {
        public int Id_Doctor { get; set; }
        public DateTime Day_Of_Week { get; set; }
        public DateTime Start_Appointment { get; set; }
        public DateTime End_Appointment { get; set; }
    }
}
