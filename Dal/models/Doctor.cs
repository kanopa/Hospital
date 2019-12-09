using System;
using System.Collections.Generic;
using System.Text;

namespace Dal.models
{
    public class Doctor
    {
        public int Id { get; set; }
        public string Full_Name { get; set; }
        public string Doctor_Position { get; set; }
        public ICollection<RegistryHospital> RegistryHospitals { get; set; }
    }
}
