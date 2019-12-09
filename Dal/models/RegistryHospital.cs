using System;
using System.Collections.Generic;
using System.Text;

namespace Dal.models
{
    public class RegistryHospital
    {
        public int PatientId { get; set; }
        public Patient Patient { get; set; }
        public int DoctorId { get; set; }
        public Doctor Doctor { get; set; }
        public int CardId { get; set; }
        public Patient_Card Card { get; set; }
    }
}
