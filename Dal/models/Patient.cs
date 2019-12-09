using System;
using System.Collections.Generic;
using System.Text;

namespace Dal.models
{
    public class Patient
    {
        public int Id { get; set; }
        public string Full_Name { get; set; }
        public DateTime Start_Appointment { get; set; }
        public DateTime End_Appointment { get; set; }
        public ICollection<RegistryHospital> RegistryHospitals { get; set; }
    }
}
