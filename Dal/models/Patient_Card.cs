using System;
using System.Collections.Generic;
using System.Text;

namespace Dal.models
{
    public class Patient_Card
    {
        public int Id { get; set; }
        public int PatientId { get; set; }
        public Patient Patient { get; set; }
        public int DoctorId { get; set; }
        public Doctor Doctor { get; set; }
        public string Diagnos { get; set; }
        public int Appointment_Length { get; set; }
        public ICollection<RegistryHospital> RegistryHospitals { get; set; }
    }
}
