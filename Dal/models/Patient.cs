using System;
using System.Collections.Generic;
using System.Text;

namespace Dal.models
{
    public class Patient
    {
        public int Id_Patient { get; set; }
        public string Full_Name { get; set; }
        public DateTime Appointment { get; set; }
    }
}
