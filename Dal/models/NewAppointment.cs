using System;
using System.Collections.Generic;
using System.Text;

namespace Dal.models
{
    public class NewAppointment
    {
        public string Full_Name { get; set; }
        public int DoctorId { get; set; }
        public DateTime Start_Appointment { get; set; }
        public DateTime End_Appointment { get; set; }
    }
}
