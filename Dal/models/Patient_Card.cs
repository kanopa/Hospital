using System;
using System.Collections.Generic;
using System.Text;

namespace Dal.models
{
    public class Patient_Card
    {
        public int Id_Doctor { get; set; }
        public int Id_Patient { get; set; }
        public int Id_Card { get; set; }
        public string Diagnos { get; set; }
        public int Appointment_Length { get; set; }
    }
}
